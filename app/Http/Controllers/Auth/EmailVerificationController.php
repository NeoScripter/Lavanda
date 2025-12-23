<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function create()
    {
        return to_route('home')->with('verifyEmail', 'На указанный вами адрес электронной почты отправлено письмо с кодом подтверждения. Пожалуйста, откройте это письмо и нажмите на ссылку внутри, чтобы подтвердить действие и перейти дальше.');
    }

    public function show(EmailVerificationRequest $request)
    {
        $request->fulfill();

        return to_route('home');
    }

    public function update(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();

        return back()->with('verifyEmail', 'Ссылка для подтверждения успешно отправлена!');
    }
}
