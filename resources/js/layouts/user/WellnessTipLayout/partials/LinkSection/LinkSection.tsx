import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { WellnessTip } from '@/types/model';
import { ArrowUpRight } from 'lucide-preact';
import { FC } from 'react-dom/src';
import css from './LinkSection.module.scss';

const WellnessTipSection: FC<{ tips: WellnessTip[] }> = ({ tips }) => {
    return (
        <section class={css.wrapper}>
            <ul class={css.grid}>
                {tips.map((tip) => (
                    <WellnessTipCard
                        key={tip.id}
                        tip={tip}
                    />
                ))}
            </ul>

            <p style={{ textAlign: 'center' }}>TODO Pagination</p>
        </section>
    );
};

export default WellnessTipSection;

const WellnessTipCard: FC<{ tip: WellnessTip }> = ({ tip }) => {
    return (
        <li class={css.cardWrapper}>
            {tip.image != null && (
                <LazyImage
                    prtClass={css.cardImgWrapper}
                    imgClass={css.cardImg}
                    img={tip.image.path}
                    tinyImg={tip.image.tiny_path}
                    alt={tip.image.alt}
                />
            )}
            <p class={css.description}>{tip.description}</p>

            <a
                target="_blank"
                href={tip.url}
                class={css.cardLink}
            >
                Перейти
                <ArrowUpRight />
            </a>
        </li>
    );
};
