import HeroDkTiny from '@/assets/images/experience/hero-dk-tiny.webp';
import HeroDk from '@/assets/images/experience/hero-dk.webp';
import HeroMbTiny from '@/assets/images/experience/hero-mb-tiny.webp';
import HeroMb from '@/assets/images/experience/hero-mb.webp';
import HeroTbTiny from '@/assets/images/experience/hero-tb-tiny.webp';
import HeroTb from '@/assets/images/experience/hero-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './HeroSection.module.scss';
import useMediaQuery from '@/hooks/useMediaQuery';

const HeroSection: FC<NodeProps> = ({ className }) => {
    const isDesktop = useMediaQuery('(min-width: 1110px)');

    return (
        <section class={cn(css.wrapper, !isDesktop && 'full-bleed', className)}>
            <BgLoader
                prtClass={css.foreground}
                dk={HeroDk}
                dkTiny={HeroDkTiny}
                tb={HeroTb}
                tbTiny={HeroTbTiny}
                mb={HeroMb}
                mbTiny={HeroMbTiny}
            />

            <div class={css.banner}>
                <h1 class={css.heading}>Опыт автора</h1>

                <p>
                    Иногда решение приходит не тогда, когда мы мучительно думаем
                    о нём, а когда даём себе немного тишины и внимания. Этот
                    раздел — набор простых практик, которые помогут
                    остановиться, настроиться на себя и яснее услышать
                    внутренний голос. Каждая из них займёт всего несколько
                    минут, но подарит ощущение опоры и лёгкости.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
