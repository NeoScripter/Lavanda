export function getNumberedLabel(num: number): string {
    if (num < 0 || num > 8) {
        throw new Error('Invalid number range! Must be between 1 and 5');
    }

    switch (num) {
        case 1:
            return 'Первая';
        case 2:
            return 'Вторая';
        case 3:
            return 'Третья';
        case 4:
            return 'Четвёртая';
        case 5:
            return 'Пятая';
        default:
            return 'Последняя';
    }
}
