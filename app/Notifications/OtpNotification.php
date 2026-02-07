<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class OtpNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(protected string $password) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Код для входа в аккаунт')
            ->greeting('Здравствуйте, '.$notifiable->name)
            ->line('Рады видеть вас на нашем сайте! Вот ваш одноразовый пароль для входа:')
            ->line(new HtmlString(
                '<div style="text-align: center; margin: 30px 0; font-size: 42px; font-weight: bold; letter-spacing: 10px; color: #000; font-family: monospace;">'
                    .$this->password.
                    '</div>'
            ))
            ->line('Этот код действителен в течение 3 минут.')
            ->action('В личный кабинет', url('/account'))
            ->salutation(new HtmlString('<p>С уважением, <br>Лаванда</p>'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
