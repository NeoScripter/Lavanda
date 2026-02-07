<?php

namespace App\Http\Requests\Auth;

use App\Enums\UserGender;
use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class RegisteredUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'email' => mb_strtolower(trim($this->email)),
            'birthday' => $this->birthday ?: null,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // При валидации алгоритм отклоняет запрос, если пользователь
        // не дал согласия на обработку персиольных данных и политики конфинденциальности
        return [
            'name' => ['required', 'string', 'max:255'],
            'gender' => ['nullable', new Enum(UserGender::class)],
            'birthday' => ['nullable', 'date', 'before:today'],
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'policy' => ['required', 'accepted'],
            'consent' => ['required', 'accepted'],
        ];
    }
}
