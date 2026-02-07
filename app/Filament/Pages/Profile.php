<?php

namespace App\Filament\Pages;

use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Actions\Action;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class Profile extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::User;

    protected string $view = 'filament.pages.profile';

    protected static ?string $title = 'Профиль админа';

    protected ?string $heading = 'Профиль админа';

    protected ?string $subheading = 'Здесь вы можете изменить данные своего профиля';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Основная информация')
                    ->schema([
                        TextInput::make('name')
                            ->label('Имя')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->unique()
                            ->maxLength(255),
                    ])->maxWidth('xl'),

                Section::make('Изменить пароль')
                    ->description('Оставьте пустым, если не хотите менять пароль')
                    ->schema([
                        TextInput::make('current_password')
                            ->label('Текущий пароль')
                            ->password()
                            ->revealable()
                            ->currentPassword()
                            ->dehydrated(false)
                            ->required(fn($get): bool => filled($get('password'))),

                        TextInput::make('password')
                            ->label('Новый пароль')
                            ->password()
                            ->revealable()
                            ->rule(Password::default())
                            ->dehydrated(fn($state): bool => filled($state))
                            ->confirmed(),

                        TextInput::make('password_confirmation')
                            ->label('Подтвердите пароль')
                            ->password()
                            ->revealable()
                            ->dehydrated(false),
                    ])
                    ->maxWidth('xl')
                    ->columns(1),

                // Add the save button inside the form schema
                Action::make('save')
                    ->label('Сохранить изменения')
                    ->action('save'),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        $user = auth()->user();

        $user->update([
            'name' => $data['name'],
            'email' => $data['email'],
        ]);

        if (filled($data['password'] ?? null)) {
            $user->update([
                'password' => Hash::make($data['password']),
            ]);
        }

        Notification::make()
            ->success()
            ->title('Профиль обновлён')
            ->body('Ваши данные успешно сохранены.')
            ->send();
    }
}
