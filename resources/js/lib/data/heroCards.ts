import Avatar1 from '@/assets/images/home/avatar-1.webp';
import Avatar2 from '@/assets/images/home/avatar-2.webp';
import Avatar3 from '@/assets/images/home/avatar-3.webp';

export type HeroCard = {
    id: string;
    content: string;
    img: string;
    author: string;
    job: string;
};

export const heroCards: HeroCard[] = [
    {
        id: crypto.randomUUID(),
        content:
            'Очень удобно, когда хочется порефлексировать или нужен <strong>аккуратный толчок к решению</strong>. Сайт помогает взглянуть на ситуацию под другим углом.',
        img: Avatar1,
        author: 'Евгения',
        job: 'Социальный педагог',
    },
    {
        id: crypto.randomUUID(),
        content:
            'Мне очень понравились аффирмации и аудио-наставления. Чувствуется <strong>поддержка и внимание к деталям!</strong>',
        img: Avatar2,
        author: 'Галина М.',
        job: 'Веб-дизайнер',
    },
    {
        id: crypto.randomUUID(),
        content:
            'Моя жена использует сайт, когда сомневается в выборе. Чаще всего ее решение уже принято внутри, и нужно вытащить его на поверхность. Лично меня восхищают продуманные алгоритмы.',
        img: Avatar3,
        author: 'Андрей',
        job: 'АВАР разработчик',
    },
];
