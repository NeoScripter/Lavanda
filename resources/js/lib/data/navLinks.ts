type PlainNavLink = {
    type: 'link';
    id: string;
    href: string;
    label: string;
};

type PopoverNavLink = {
    type: 'popover';
    id: string;
    label: string;
    links: PlainNavLink[];
};
export type NavLinkType = PopoverNavLink | PlainNavLink;

export const navLinks: NavLinkType[] = [
    {
        id: crypto.randomUUID(),
        label: 'Решение',
        type: 'popover',
        links: [
            {
                id: crypto.randomUUID(),
                label: 'Решение',
                type: 'link',
                href: route('decision.index'),
            },
            {
                id: crypto.randomUUID(),
                label: 'Практика',
                type: 'link',
                href: route('decision.practice'),
            },
            {
                id: crypto.randomUUID(),
                label: 'Опыт автора',
                type: 'link',
                href: route('decision.experience'),
            },
            {
                id: crypto.randomUUID(),
                label: 'Руны ',
                type: 'link',
                href: route('decision.runes'),
            },
            {
                id: crypto.randomUUID(),
                label: 'Расклад карт',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Книга перемен',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Игры разума',
                type: 'link',
                href: '/',
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        label: 'Настрой',
        type: 'link',
        href: '/',
    },
    {
        id: crypto.randomUUID(),
        label: 'Мне грустно',
        type: 'popover',
        links: [
            {
                id: crypto.randomUUID(),
                label: 'Мне грустно',
                type: 'link',
                href: route('sadness.index'),
            },
            {
                id: crypto.randomUUID(),
                label: 'Руны',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Старинное гадание госпожи Ленорман',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Карты Ошо',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Карты Таро',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Гадание по книге перемен (и-цзин)',
                type: 'link',
                href: '/',
            },
            {
                id: crypto.randomUUID(),
                label: 'Послание поддержки от автора',
                type: 'link',
                href: '/',
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        label: 'Расслабиться',
        type: 'link',
        href: route('relaxation'),
    },
    {
        id: crypto.randomUUID(),
        label: 'Ресурсы',
        type: 'link',
        href: route('toolkit'),
    },
    {
        id: crypto.randomUUID(),
        label: 'Экспресс-карта',
        type: 'link',
        href: '/',
    },
];
