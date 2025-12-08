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
            'Использую сайт, когда сомневаюсь в выборе. Простые <strong> практики действительно помогают</strong> собраться с мыслями.',
        img: Avatar1,
        author: 'Ольга',
        job: 'Преподаватель',
    },
    {
        id: crypto.randomUUID(),
        content:
            'Мне очень понравились аффирмации и аудио-наставления. Чувствуется <strong>поддержка и внимание к деталям!</strong>',
        img: Avatar2,
        author: 'Елена',
        job: 'Дизайнер интерьера',
    },
    {
        id: crypto.randomUUID(),
        content:
            'Очень удобно, когда нужен <strong> мягкий толчок к решению. </strong>Сайт помогает взглянуть на ситуацию под другим углом.',
        img: Avatar3,
        author: 'Анна',
        job: 'Психолог',
    },
];
