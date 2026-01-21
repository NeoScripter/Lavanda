const SECONDS_IN_MINUTE = 60;

export function convertSecondsToTime(totalSeconds: number): string {
    const wholeSeconds = Math.floor(totalSeconds);
    const minutes = Math.floor(wholeSeconds / SECONDS_IN_MINUTE);
    const seconds = wholeSeconds % SECONDS_IN_MINUTE;

    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return `${minutesStr}:${secondsStr}`;
}

