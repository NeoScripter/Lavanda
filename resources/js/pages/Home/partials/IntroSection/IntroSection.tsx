import Dk1Tiny from '@/assets/images/home/intro-1-dk-tiny.webp';
import Dk1 from '@/assets/images/home/intro-1-dk.webp';
import Mb1Tiny from '@/assets/images/home/intro-1-mb-tiny.webp';
import Mb1 from '@/assets/images/home/intro-1-mb.webp';
import Tb1Tiny from '@/assets/images/home/intro-1-tb-tiny.webp';
import Tb1 from '@/assets/images/home/intro-1-tb.webp';
import Dk4Tiny from '@/assets/images/home/intro-4-dk-tiny.webp';
import Dk4 from '@/assets/images/home/intro-4-dk.webp';
import Mb4Tiny from '@/assets/images/home/intro-4-mb-tiny.webp';
import Mb4 from '@/assets/images/home/intro-4-mb.webp';
import Tb4Tiny from '@/assets/images/home/intro-4-tb-tiny.webp';
import Tb4 from '@/assets/images/home/intro-4-tb.webp';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import IntroWideCard from '../IntroWideCard/IntroWideCard';
import css from './IntroSection.module.scss';

const IntroSection: FC<NodeProps> = ({ className }) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <IntroWideCard
                className={cn(css.violetText, css.intro1)}
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

            <IntroWideCard
                className={cn(css.violetText, css.intro2)}
                heading="Хочу расслабиться"
                content="Мы часто думаем о том, что должны быть продуктивными, сильными, собранными. Но не меньшее значение имеет умение отдыхать. Здесь собрана подборка ресурсов, которые помогут расслабиться и восстановить силы: музыка, медитации, дыхательные практики, статьи о заботе о себе. Это пространство, где можно замедлиться и позволить себе просто быть."
                url="/"
                alt="Лицо женщины, покрытое светлой тканью, закрывающей глаза; минималистичный монохромный образ с мягкими плавными складками ткани."
                mb={Mb4}
                mbTiny={Mb4Tiny}
                tb={Tb4}
                tbTiny={Tb4Tiny}
                dk={Dk4}
                dkTiny={Dk4Tiny}
            />
        </div>
    );
};

export default IntroSection;
