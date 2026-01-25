export function formatDate(isoDate: string): string {
    return new Intl.DateTimeFormat('ru-RU').format(new Date(isoDate));
}
