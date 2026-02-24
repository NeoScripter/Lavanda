<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\User;
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
            'order_id' => (string) (auth()->id() . '-' . time()),
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
        $data = $request->all();
        $signature = $request->header('Sign');

        if (!$this->verify($data, $signature)) {
            return response('Invalid signature', 400);
        }

        $customerEmail = $data['customer_email'] ?? null;
        $orderId = $data['order_id'] ?? null;
        $paymentStatus = $data['payment_status'] ?? null;

        // Process only if payment is successful
        if ($paymentStatus === 'success' && $customerEmail) {
            // Find user by email
            $user = User::where('email', $customerEmail)->first();

            if ($user) {
                // Extend subscription logic here
                // Example:
                // $user->subscription_expires_at = now()->addMonth();
                // $user->save();

                Log::info('Subscription extended', [
                    'email' => $customerEmail,
                    'order_id' => $orderId
                ]);
            }
        }

        return response('OK', 200);
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
