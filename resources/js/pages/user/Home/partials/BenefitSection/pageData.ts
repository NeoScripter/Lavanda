import { InfoCardType } from "./BenefitSection";

import InfoCard1Tiny from "@/assets/images/home/info-cards/info-card-1-md-tiny.webp";
import InfoCard1 from "@/assets/images/home/info-cards/info-card-1-md2x.webp";
import InfoCard2Tiny from "@/assets/images/home/info-cards/info-card-2-md-tiny.webp";
import InfoCard2 from "@/assets/images/home/info-cards/info-card-2-md2x.webp";
import InfoCard3Tiny from "@/assets/images/home/info-cards/info-card-3-md-tiny.webp";
import InfoCard3 from "@/assets/images/home/info-cards/info-card-3-md2x.webp";
import InfoCard4Tiny from "@/assets/images/home/info-cards/info-card-4-md-tiny.webp";
import InfoCard4 from "@/assets/images/home/info-cards/info-card-4-md2x.webp";
import InfoCard5Tiny from "@/assets/images/home/info-cards/info-card-5-md-tiny.webp";
import InfoCard5 from "@/assets/images/home/info-cards/info-card-5-md2x.webp";
import InfoCard6Tiny from "@/assets/images/home/info-cards/info-card-6-md-tiny.webp";
import InfoCard6 from "@/assets/images/home/info-cards/info-card-6-md2x.webp";
import InfoCard7Tiny from "@/assets/images/home/info-cards/info-card-7-md-tiny.webp";
import InfoCard7 from "@/assets/images/home/info-cards/info-card-7-md2x.webp";
import InfoCard8Tiny from "@/assets/images/home/info-cards/info-card-8-md-tiny.webp";
import InfoCard8 from "@/assets/images/home/info-cards/info-card-8-md2x.webp";
import InfoCard9Tiny from "@/assets/images/home/info-cards/info-card-9-md-tiny.webp";
import InfoCard9 from "@/assets/images/home/info-cards/info-card-9-md2x.webp";

export const infoCards: InfoCardType[] = [
    {
        id: crypto.randomUUID(),
        title: 'Для души и состояния',
        items: [
            {
                id: crypto.randomUUID(),
                img: InfoCard1,
                tinyImg: InfoCard1Tiny,
                label: 'Метафорические карты с комментариями психолога',
                href: route('decision.cards.metaphoric'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard2,
                tinyImg: InfoCard2Tiny,
                label: 'Аудиопослания от автора',
                href: route('sadness.audios'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard3,
                tinyImg: InfoCard3Tiny,
                label: 'Авторские таро Лаванда, карты Ленорман',
                href: route('decision.cards.index'),
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        title: 'Для решений и дел',
        items: [
            {
                id: crypto.randomUUID(),
                img: InfoCard4,
                tinyImg: InfoCard4Tiny,
                label: 'Скандинавские руны и расклады карт',
                href: route('decision.runes'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard5,
                tinyImg: InfoCard5Tiny,
                label: 'Книга перемен',
                href: route('decision.iching'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard6,
                tinyImg: InfoCard6Tiny,
                label: 'Легкие бизнес-практики',
                href: route('decision.practice'),
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        title: 'Для легкости и настроя',
        items: [
            {
                id: crypto.randomUUID(),
                img: InfoCard7,
                tinyImg: InfoCard7Tiny,
                label: 'Карты "Игры разума"',
                href: route('decision.mind-games'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard8,
                tinyImg: InfoCard8Tiny,
                label: 'Аффирмации и настрой на день',
                href: route('affirmations'),
            },
            {
                id: crypto.randomUUID(),
                img: InfoCard9,
                tinyImg: InfoCard9Tiny,
                label: '"Кошачий оракул" (бесплатно)',
                href: route('promo'),
            },
        ]
    },
];
