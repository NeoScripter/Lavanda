import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import useMediaQuery from '@/hooks/useMediaQuery';
import { BgLoaderImg } from '@/lib/types/shared';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './HeroSection.module.scss';

type CardHeroSectionProps = {
    heading: string;
    description: string;
    fgImg: BgLoaderImg;
    imgClass?: string;
};

const HeroSection: FC<NodeProps<CardHeroSectionProps>> = ({
    className,
    heading,
    description,
    fgImg,
    imgClass
}) => {
    const isDesktop = useMediaQuery('(min-width: 1110px)');

    return (
        <section class={cn(css.wrapper, !isDesktop && 'full-bleed', className)}>
            <BgLoader
                prtClass={cn(css.foreground, imgClass)}
                dk={fgImg.dk}
                dkTiny={fgImg.dkTiny}
                tb={fgImg.tb}
                tbTiny={fgImg.tbTiny}
                mb={fgImg.mb}
                mbTiny={fgImg.mbTiny}
            />

            <div class={css.banner}>
                <h1 class={css.heading}>{heading}</h1>

                <p>{description}</p>
            </div>
        </section>
    );
};

export default HeroSection;
