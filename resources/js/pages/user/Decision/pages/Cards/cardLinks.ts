import NavLink1DkTiny from '@/assets/images/cards/index/navLink1-dk-tiny.webp';
import NavLink1Dk from '@/assets/images/cards/index/navLink1-dk.webp';
import NavLink2DkTiny from '@/assets/images/cards/index/navLink2-dk-tiny.webp';
import NavLink2Dk from '@/assets/images/cards/index/navLink2-dk.webp';
import NavLink3DkTiny from '@/assets/images/cards/index/navLink3-dk-tiny.webp';
import NavLink3Dk from '@/assets/images/cards/index/navLink3-dk.webp';

export type CardLink = {
    id: string;
    href: string;
    label: string;
    img: string;
    alt: string;
    tinyImg: string;
    description: string;
};

export const cardLinks: CardLink[] = [
    {
        id: crypto.randomUUID(),
        label: 'Таро',
        img: NavLink1Dk,
        tinyImg: NavLink1DkTiny,
        alt: 'Стопка фиолетовых магических карт с сияющим символом в центре',
        description:
            '78 дверей к внутренней ясности. Каждая карта — портал в сюжет о выборе, испытании или трансформации. Случайный выбор карты может стать ключом к неочевидному ответу, который уже живет внутри вас.',
        href: '/decision/cards/tarot',
    },
    {
        id: crypto.randomUUID(),
        label: 'Гадание Госпожи Ленорман',
        img: NavLink2Dk,
        tinyImg: NavLink2DkTiny,
        alt: 'Стопка розовых магических карт с светящимся символом в центре',
        description:
            'Карты  Марии Ленорман  - известной француженки, которая в свое время предсказала смерть Наполеону... Миниатюрные сцены, символы и повседневные образы, собранные в особую колоду.',
        href: '/decision/cards/lenormand',
    },

    {
        id: crypto.randomUUID(),
        label: 'Метафорические карты',
        img: NavLink3Dk,
        tinyImg: NavLink3DkTiny,
        alt: 'Стопка светло-золотых магических карт с сияющим символом в центре',
        description:
            'Каждая карта — как спонтанная ассоциация, образ или эмоция. Авторское трактование - поддержка для подписчиков.',
        href: '/decision/cards/metaphoric',
    },
];
