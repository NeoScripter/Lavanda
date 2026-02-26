<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class SubscriptionExpiryNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

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
            ->subject('Напоминание о продлении подписки')
            ->greeting('Здравствуйте, ' . $notifiable->name)
            ->line('Напоминаем вам, что ваша подписка заканчивается через неделю')
            ->line('Для ее продления вы можете перейти на страницу с тарифами и следовать дальнейшим инструкциям по оплате.')
            ->line('Данное сообщение сгенерировано автоматически. Пожалуйста, не отвечайте на него')
            ->action('Тарифы', url('/plans'))
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
