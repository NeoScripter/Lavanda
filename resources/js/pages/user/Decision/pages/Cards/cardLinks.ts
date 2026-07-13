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
            'За каждой картой Таро скрывается история о человеке. О любви и страхе. О выборе и надежде. О потерях, ошибках и новых началах. Поэтому спустя сотни лет мы по-прежнему узнаём в этих историях самих себя.',
        href: '/decision/cards/tarot',
    },
    {
        id: crypto.randomUUID(),
        label: 'Гадание Госпожи Ленорман',
        img: NavLink2Dk,
        tinyImg: NavLink2DkTiny,
        alt: 'Стопка розовых магических карт с светящимся символом в центре',
        description:
            'Эта колода словно рассказывает историю. Каждая карта сама по себе проста, но вместе они складываются в картину происходящего. Ленорман помогает разобраться в отношениях, работе, выборе и жизненных ситуациях, показывая не только ответ, но и то, как события связаны между собой.',
        href: '/decision/cards/lenormand',
    },

    {
        id: crypto.randomUUID(),
        label: 'Метафорические карты',
        img: NavLink3Dk,
        tinyImg: NavLink3DkTiny,
        alt: 'Стопка светло-золотых магических карт с сияющим символом в центре',
        description:
            'Один и тот же образ каждый человек понимает по-своему. Бывает, смотришь на картинку и вдруг понимаешь что-то, о чём даже не думал. Именно так работают метафорические карты. Каждый человек увидит в одном и том же образе свою историю.',
        href: '/decision/cards/metaphoric',
    },
];
