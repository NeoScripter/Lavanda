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
            ->subject('Осталось 60 минут в пространстве LavandaKim ⏳')
            ->greeting('Здравствуйте, ' . $notifiable->name)
            ->line('Ваш доступ завершится через час.')
            ->line('Успейте прислушаться к себе и найти важную подсказку. Возможно, сейчас время для самого сокровенного:')
            ->line('- Войти в нужный настрой - получить Ваше напутствие и поддержку по выбранной теме')
            ->line('- Расклады карт - за ответом на волнующий вопрос')
            ->line('- Аудиопослание - услышать то, что важно именно сейчас')
            ->line('- МАК-карты - для искреннего диалога с подсознанием')
            ->line('А если захотите вернуться позже — наш Кошачий оракул всегда ждёт вас бесплатно. 🐾')
            ->action('Все инструменты', url('/#benefits'))
            ->salutation(new HtmlString('<p>С теплом, <br>Lavanda Kim</p>'));
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
