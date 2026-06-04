<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class SurveyNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $survey;

    /**
     * Create a new notification instance.
     */
    public function __construct($survey)
    {
        $this->survey = $survey;
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
            ->subject('Результат опроса от пользователя ' . $this->survey?->name)
            ->greeting('Здравствуйте, Татьяна')
            ->line('Вот результаты опроса пользователя ' . $this->survey?->name)
            ->line("Имя: {$this->survey?->name}")
            ->line("Email: {$this->survey?->email}")
            ->line("Дата рождения: {$this->survey?->birthday}")
            ->line("Пол: {$this->survey?->gender}")
            ->line("Выбор инструмента: {$this->survey?->tool}")
            ->line("Наиболее волнующая сфера: {$this->survey?->sphere}")
            ->line("Подробное описание ситуации: {$this->survey?->description}")
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
