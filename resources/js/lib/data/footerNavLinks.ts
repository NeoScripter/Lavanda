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
            'LotoSfera — пространство поддержки и вдохновения. Здесь вы найдёте практики, аффирмации и символы, которые помогают услышать себя.',
        url: '/',
    },
    {
        id: 'subscription',
        title: 'Подписка',
        description:
            'Выберите тариф на месяц или год. Поддержка всегда под рукой.',
        url: route('plans'),
    },
    {
        id: 'contacts',
        title: 'Контакты',
        description:
            'Остались вопросы? Напишите автору — буду рада обратной связи.',
        url: '/',
    },
    {
        id: 'useful',
        title: 'Полезное',
        description:
            'Подборка ссылок и материалов для тех, кто хочет больше ресурсов для спокойствия и вдохновения.',
        url: route('toolkit'),
    },
];
