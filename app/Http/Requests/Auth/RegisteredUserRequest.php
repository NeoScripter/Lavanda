<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'gender' => 'nullable|in:male,female',
            'birthday' => 'nullable|date|before:today',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'policy' => 'required|accepted',
            'consent' => 'required|accepted',
        ];
    }
}
