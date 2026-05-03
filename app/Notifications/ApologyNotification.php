<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class ApologyNotification extends Notification implements ShouldQueue
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
            ->subject('Извинения от LavandaKim ⏳')
            ->greeting('Здравствуйте, ')
            ->line('Недавно Вы зарегистрировались на нашем сайте и должны были получить бесплатный доступ на 24 часа.')
            ->line('К большому сожалению, в результате технической ошибки, этого не произошло.')
            ->line('Приносим Вам свои искренние извинения и сообщаем Вам, что данная ошибка была исправлена и Вам открыт доступ к платной части сайта на 24 часа.')
            ->action('Перейти на сайт', url('/'))
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
