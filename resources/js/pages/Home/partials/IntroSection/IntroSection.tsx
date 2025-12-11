import Dk1Tiny from '@/assets/images/home/intro-1-dk-tiny.webp';
import Dk1 from '@/assets/images/home/intro-1-dk.webp';
import Mb1Tiny from '@/assets/images/home/intro-1-mb-tiny.webp';
import Mb1 from '@/assets/images/home/intro-1-mb.webp';
import Tb1Tiny from '@/assets/images/home/intro-1-tb-tiny.webp';
import Tb1 from '@/assets/images/home/intro-1-tb.webp';
import {
    default as Img2,
    default as Img2Tiny,
} from '@/assets/images/home/intro-2.webp';
import {
    default as Img3,
    default as Img3Tiny,
} from '@/assets/images/home/intro-3.webp';
import Dk4Tiny from '@/assets/images/home/intro-4-dk-tiny.webp';
import Dk4 from '@/assets/images/home/intro-4-dk.webp';
import Mb4Tiny from '@/assets/images/home/intro-4-mb-tiny.webp';
import Mb4 from '@/assets/images/home/intro-4-mb.webp';
import Tb4Tiny from '@/assets/images/home/intro-4-tb-tiny.webp';
import Tb4 from '@/assets/images/home/intro-4-tb.webp';
import {
    default as Img5,
    default as Img5Tiny,
} from '@/assets/images/home/intro-5.webp';

import {
    default as Img6,
    default as Img6Tiny,
} from '@/assets/images/home/intro-6.webp';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import IntroSquareCard from '../IntroSquareCard/IntroSquareCard';
import IntroWideCard from '../IntroWideCard/IntroWideCard';
import css from './IntroSection.module.scss';

const IntroSection: FC<NodeProps> = ({ className }) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <IntroWideCard
                className={cn(css.intro1)}
                heading="Принять решение"
                content="Иногда кажется, что мысли застряли в круге сомнений. Здесь собраны инструменты, которые помогут по-новому взглянуть на ситуацию и выбрать свой путь."
                url="/"
                alt="Лицо женщины, покрытое светлой тканью, закрывающей глаза; минималистичный монохромный образ с мягкими плавными складками ткани."
                mb={Mb1}
                mbTiny={Mb1Tiny}
                tb={Tb1}
                tbTiny={Tb1Tiny}
                dk={Dk1}
                dkTiny={Dk1Tiny}
            />

            <IntroSquareCard
                heading="Аффирмация на день"
                content="Короткие слова иногда способны сделать больше, чем длинные рассуждения. В этом разделе вы найдете простое послание на день — напоминание о вашей силе, ценности и возможности справляться с любыми ситуациями. Это как маленькая заметка от самой себя, которая поддерживает и вдохновляет."
                url="/"
                alt="Крупный план белых цветочных лепестков с деликатными прожилками и волнообразными формами в монохромной палитре"
                img={Img2}
                tinyImg={Img2Tiny}
            />

            <IntroSquareCard
                heading="Мне грустно"
                content="Грусть — это часть жизни, и иногда важно не загонять её внутрь, а мягко прожить. Здесь вы сможете выбрать то, что поможет именно сейчас. Этот раздел создан, чтобы помочь вам почувствовать: вы не одни в своей грусти, всегда можно найти слово или знак, который вернет немного тепла."
                url="/"
                alt="Элегантные женские руки в нежном жесте на фоне струящейся белой ткани с мягким освещением"
                img={Img3}
                tinyImg={Img3Tiny}
            />

            <IntroWideCard
                className={cn(css.intro2)}
                heading="Хочу расслабиться"
                content="Мы часто думаем о том, что должны быть продуктивными, сильными, собранными. Но не меньшее значение имеет умение отдыхать. Здесь собрана подборка ресурсов, которые помогут расслабиться и восстановить силы: музыка, медитации, дыхательные практики, статьи о заботе о себе. Это пространство, где можно замедлиться и позволить себе просто быть."
                url="/"
                alt="Женщина в купальнике сидит в позе лотоса с закрытыми глазами в медитации на мягком светлом фоне"
                mb={Mb4}
                mbTiny={Mb4Tiny}
                tb={Tb4}
                tbTiny={Tb4Tiny}
                dk={Dk4}
                dkTiny={Dk4Tiny}
            />

            <IntroSquareCard
                heading="Полезные ресурсы"
                content="Когда мы ищем ответы, всегда помогают дополнительные источники вдохновения. В этом разделе собраны книги, статьи, сайты и практики, которые могут стать спутниками на вашем пути. Это база знаний, к которой можно возвращаться, чтобы находить новые идеи, укрепляться и развиваться."
                url="/"
                alt="Мощные белые волны с брызгами, замершие в момент удара."
                img={Img5}
                tinyImg={Img5Tiny}
            />

            <IntroSquareCard
                heading="БОНУС: экспресс-карта от Lavanda.Space"
                content="Когда мы ищем ответы, всегда помогают дополнительные источники вдохновения. В этом разделе собраны книги, статьи, сайты и практики, которые могут стать спутниками на вашем пути. Это база знаний, к которой можно возвращаться, чтобы находить новые идеи, укрепляться и развиваться."
                url="/"
                alt="Светлый коридор с повторяющимися арками, уходящий вдаль."
                img={Img6}
                tinyImg={Img6Tiny}
            />
        </div>
    );
};

export default IntroSection;
