<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class ReviewNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $review;

    /**
     * Create a new notification instance.
     */
    public function __construct($review)
    {
        $this->review = $review;
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
            ->subject('Отзыв от пользователя ' . $this->review?->name)
            ->greeting('Здравствуйте, Татьяна')
            ->line('Вот отзыв пользователя ' . $this->review?->name)
            ->line("Email: {$this->review?->email}")
            ->line("Отзыв: {$this->review?->description}")
            ->salutation(new HtmlString('<p>Ваш любимый сайт, <br>Lavanda Kim</p>'));
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
