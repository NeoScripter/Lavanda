export type FooterNavLinkType = {
    id: string;
    title: string;
    description: string;
    url: string;
};

export const footerNavLinks: FooterNavLinkType[] = [
    {
        id: 'about',
        title: 'О ресурсе',
        description:
            'Lavanda.Kim — пространство поддержки и вдохновения. Здесь вы найдёте простые инструменты, которые помогают услышать себя.',
        url: '/about',
    },
    {
        id: 'subscription',
        title: 'Подписка',
        description: 'Выберите подходящий тариф. Поддержка всегда под рукой.',
        url: '/plans',
    },
    {
        id: 'contacts',
        title: 'Контакты',
        description:
            'Остались вопросы? Напишите авторам - будем рады обратной связи.',
        url: '/contacts',
    },
    {
        id: 'useful',
        title: 'Оферта',
        description:
            'Здесь можно ознакомиться с условиями использования и политиками ресурса.',
        url: '/legal/policy',
    },
];
