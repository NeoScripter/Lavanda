export default function shortenUserName(name: string) {
    const parts = name.split(' ');

    if (parts.length < 2) {
        return name;
    }

    return parts[0] + ' ' + parts[1].split('')[0].toUpperCase() + '.';
}
