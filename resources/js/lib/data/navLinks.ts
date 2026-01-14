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
        label: 'Главная',
        type: 'link',
        href: '/',
    },
    {
        id: crypto.randomUUID(),
        label: 'Решение',
        type: 'popover',
        links: [
            {
                id: crypto.randomUUID(),
                label: 'Общая информация',
                type: 'link',
                href: '/decision',
            },
            {
                id: crypto.randomUUID(),
                label: 'Практика',
                type: 'link',
                href: '/decision/practice',
            },
            {
                id: crypto.randomUUID(),
                label: 'Опыт автора',
                type: 'link',
                href: '/decision/experience',
            },
            {
                id: crypto.randomUUID(),
                label: 'Спросить у рун',
                type: 'link',
                href: '/decision/runes',
            },
            {
                id: crypto.randomUUID(),
                label: 'Спросить у карт',
                type: 'link',
                href: '/decision/cards',
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
                href: '/decision/mind-games',
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
                label: 'Общая информация',
                type: 'link',
                href: '/sadness',
            },
            {
                id: crypto.randomUUID(),
                label: 'Руны',
                type: 'link',
                href: '/decision/runes',
            },
            {
                id: crypto.randomUUID(),
                label: 'Старинное гадание госпожи Ленорман',
                type: 'link',
                href: '/decision/cards/lenormand',
            },
            {
                id: crypto.randomUUID(),
                label: 'Метафорические карты',
                type: 'link',
                href: '/decision/cards/metaphoric',
            },
            {
                id: crypto.randomUUID(),
                label: 'Карты Таро',
                type: 'link',
                href: '/decision/cards/tarot',
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
        href: '/relaxation',
    },
    {
        id: crypto.randomUUID(),
        label: 'Ресурсы',
        type: 'link',
        href: '/toolkit',
    },
    {
        id: crypto.randomUUID(),
        label: 'Бонус игра',
        type: 'link',
        href: '/promo',
    },
    {
        id: crypto.randomUUID(),
        label: 'О ресурсе',
        type: 'link',
        href: '/about',
    },
];
