import Item1Tiny from '@/assets/images/experience/experience-item-1-tiny.webp';
import Item1 from '@/assets/images/experience/experience-item-1.webp';
import Item2Tiny from '@/assets/images/experience/experience-item-2-tiny.webp';
import Item2 from '@/assets/images/experience/experience-item-2.webp';
import Item3Tiny from '@/assets/images/experience/experience-item-3-tiny.webp';
import Item3 from '@/assets/images/experience/experience-item-3.webp';
import Item4Tiny from '@/assets/images/experience/experience-item-4-tiny.webp';
import Item4 from '@/assets/images/experience/experience-item-4.webp';
import Item5Tiny from '@/assets/images/experience/experience-item-5-tiny.webp';
import Item5 from '@/assets/images/experience/experience-item-5.webp';
import Item6Tiny from '@/assets/images/experience/experience-item-6-tiny.webp';
import Item6 from '@/assets/images/experience/experience-item-6.webp';

import ManDkTinyWebp from "@/assets/images/cards/lenormand/man-dk-tiny.webp";
import ManDkWebp from "@/assets/images/cards/lenormand/man-dk.webp";
import WomanDkTinyWebp from "@/assets/images/cards/lenormand/woman-dk-tiny.webp";
import WomanDkWebp from "@/assets/images/cards/lenormand/woman-dk.webp";


export type ImageObj = {
    id: string;
    img: string;
    tinyImg: string;
    alt: string;
};

export const itemPreviewMap: Record<string, ImageObj> = {
    man: {
        id: crypto.randomUUID(),
        img: ManDkWebp,
        tinyImg: ManDkTinyWebp,
        alt: 'Мужской портрет в викторианском стиле: профиль молодого мужчины в классическом костюме с жилетом и галстуком, окружённого ветвями сирени.',
    },
    woman: {
        id: crypto.randomUUID(),
        img: WomanDkWebp,
        tinyImg: WomanDkTinyWebp,
        alt: 'Женский портрет в викторианском стиле: профиль молодой женщины с собранными волосами, украшенными сиренью, в светлом платье с кружевным воротником и букетом сирени.',
    },
};

export const images: ImageObj[] = [
    {
        id: crypto.randomUUID(),
        img: Item1,
        tinyImg: Item1Tiny,
        alt: 'Белые бумажные или пластиковые веерообразные элементы разной высоты',
    },
    {
        id: crypto.randomUUID(),
        img: Item2,
        tinyImg: Item2Tiny,
        alt: 'Абстрактная белая композиция из гладких изогнутых форм',
    },
    {
        id: crypto.randomUUID(),
        img: Item3,
        tinyImg: Item3Tiny,
        alt: 'Минималистичные белые изогнутые линии на светлом фоне',
    },
    {
        id: crypto.randomUUID(),
        img: Item4,
        tinyImg: Item4Tiny,
        alt: 'Нежные белые складки шелковистой ткани с плавными изгибами',
    },
    {
        id: crypto.randomUUID(),
        img: Item5,
        tinyImg: Item5Tiny,
        alt: 'Текстурированная белая ткань с естественными складками и переплетениями волокон',
    },
    {
        id: crypto.randomUUID(),
        img: Item6,
        tinyImg: Item6Tiny,
        alt: 'Абстрактные белые волнистые складки ткани с мягкими тенями',
    },
];
