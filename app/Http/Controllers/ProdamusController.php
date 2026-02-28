<?php

namespace App\Http\Controllers;

use App\Enums\PlanTitle;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Subscription;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProdamusController extends Controller
{
    public function pay(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'do' => 'nullable|in:link,pay'
        ]);

        $plan = Plan::findOrFail($request->plan_id);

        $data = [
            'do' => $request->input('do', 'pay'),
            'order_id' => (string) ($plan->id . '-' . time()),
            'customer_email' => $request->user()->email,
            // 'urlReturn' => route('home'),
            // 'urlSuccess' => route('payment.success'),
            'products' => [
                [
                    'name' => 'Тариф "' . mb_convert_case($plan->title, MB_CASE_TITLE, 'UTF-8') . '"',
                    'price' => (string) $plan->price,
                    'quantity' => '1',
                ]
            ]
        ];


        $data['signature'] = $this->sign($data);

        $url = config('prodamus.url') . '?' . http_build_query($data);
        if ($request->input('do') === 'link') {
            return response()->json(['payment_url' => $url]);
        }
        return Inertia::location($url);
    }

    public function webhook(Request $request)
    {
        Log::info('Prodamus webhook triggered', ['data' => $request->all()]);

        $data = $request->all();
        $signature = $request->header('Sign');
        $signature = preg_replace('/^Sign:\s*/', '', $signature);

        Log::debug('Signature check', [
            'received'  => $signature,
            'computed'  => $this->sign($data),
            'raw_body'  => $request->getContent(),
        ]);
        // Verify signature first
        if (!$this->verify($data, $signature)) {
            Log::error('Invalid signature', ['data' => $data]);
            return response('Invalid signature', 400);
        }

        // Extract data
        $customerEmail = $data['customer_email'] ?? null;
        $orderId = $data['order_id'] ?? null;
        $paymentStatus = $data['payment_status'] ?? null;


        if ($orderId == null) {
            Log::warning('Order id is not found', ['status' => $paymentStatus]);
            return response('OK', 200); // Return 200 to acknowledge receipt
        }
        // Get plan_id from order_id or products
        $orderNum = $data['order_num'] ?? null;
        $parts = explode('-', $orderNum);
        $planId = $parts[0] ?? null;

        // Validate required fields
        if ($paymentStatus !== 'success') {
            Log::warning('Payment not successful', ['status' => $paymentStatus, 'order_id' => $orderId]);
            return response('OK', 200); // Return 200 to acknowledge receipt
        }

        if (!$customerEmail) {
            Log::error('Customer email missing', ['order_id' => $orderId]);
            return response('OK', 200); // Return 200 to stop retries
        }

        if (!$planId) {
            Log::error('Plan ID missing', ['order_id' => $orderId, 'data' => $data]);
            return response('OK', 200);
        }

        // Find user and plan
        $user = User::where('email', $customerEmail)->first();
        $plan = Plan::find($planId);

        if (!$user) {
            Log::error('User not found', ['email' => $customerEmail, 'order_id' => $orderId]);
            return response('OK', 200);
        }

        if (!$plan) {
            Log::error('Plan not found', ['plan_id' => $planId, 'order_id' => $orderId]);
            return response('OK', 200);
        }

        // Use database transaction
        try {
            DB::transaction(function () use ($user, $plan, $orderId) {
                if (!$user->subscription) {
                    // Create new subscription
                    Subscription::create([
                        'user_id' => $user->id,
                        'title' => $plan->title,
                        'starts_at' => now(),
                        'ends_at' => now()->addDays($plan->duration_in_days),
                    ]);
                } else {
                    // Extend existing subscription
                    $subscription = $user->subscription;

                    $endsAt = $subscription->ends_at instanceof Carbon
                        ? $subscription->ends_at
                        : Carbon::parse($subscription->ends_at);

                    // If subscription already expired, start from now
                    if ($endsAt->isPast()) {
                        $subscription->ends_at = now()->addDays($plan->duration_in_days);
                    } else {
                        // Otherwise extend from current end date
                        $subscription->ends_at = $endsAt->addDays($plan->duration_in_days);
                    }

                    $subscription->save();
                }

                Log::info('Subscription processed successfully', [
                    'email' => $user->email,
                    'order_id' => $orderId,
                    'plan' => $plan->title
                ]);
            });

            return response('OK', 200);
        } catch (\Exception $e) {
            Log::error('Failed to process subscription', [
                'error' => $e->getMessage(),
                'order_id' => $orderId,
                'email' => $customerEmail
            ]);

            // Return 200 to prevent Prodamus from retrying
            return response('OK', 200);
        }
    }

    private function sign($data)
    {
        unset($data['signature']);
        array_walk_recursive($data, fn(&$v) => $v = (string)$v);
        $this->ksortRecursive($data);
        $json = str_replace('/', '\/', json_encode($data, JSON_UNESCAPED_UNICODE));
        return hash_hmac('sha256', $json, config('prodamus.key'));
    }

    private function verify($data, $signature)
    {
        return hash_equals($this->sign($data), $signature);
    }

    private function ksortRecursive(&$array)
    {
        ksort($array);
        foreach ($array as &$value) {
            if (is_array($value)) {
                $this->ksortRecursive($value);
            }
        }
    }

    public function success()
    {
        return Inertia::render('user/Payment/Payment');
    }
}
