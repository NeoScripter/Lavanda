<?php

use App\Models\Stats;
use App\Models\User;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Notifications\SendBackupNotification;

Artisan::command('inspire', function (): void {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('stats:increment_sent', function (): void {
    $stats = Stats::first();
    $stats->update(['sent', $stats->sent + rand(2, 5)]);
    $stats->save();
})->purpose('Increment the sent column in the stats for survey requests');

Artisan::command('stats:increment_replied', function (): void {
    $stats = Stats::first();
    $stats->update(['replied', $stats->replied + rand(8, 14)]);
    $stats->save();
})->purpose('Increment the replied column in the stats for survey requests');

Artisan::command('backup_database', function (): void {
    $username = config('database.connections.mysql.username');
    $database = config('database.connections.mysql.database');
    $password = config('database.connections.mysql.password');
    $path = storage_path('app/private/backup.sql');

    exec("mysqldump -u {$username} --password={$password} {$database} > {$path} --no-tablespaces");

    $gzdata = gzencode(file_get_contents($path));
    file_put_contents("{$path}.gz", $gzdata);

    if (file_exists($path)) {
        unlink($path);
    }

    $user = User::where('email', 'kimjjtatiana@gmail.com')->first();

    if ($user) {
        $user->notify(new SendBackupNotification("{$path}.gz"));
    }

    $this->comment('db successfully backed up');
})->purpose('Backup mysql database');
