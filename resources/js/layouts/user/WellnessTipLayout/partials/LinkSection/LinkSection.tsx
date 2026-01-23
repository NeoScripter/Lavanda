import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import Pagination from '@/components/user/ui/Pagination/Pagination';
import Paywall from '@/components/user/ui/Paywall/Paywall';
import { Auth } from '@/types/auth';
import { WellnessTip } from '@/types/model';
import { PaginationMeta } from '@/types/pagination';
import { usePage } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-preact';
import { FC, useId } from 'preact/compat';
import css from './LinkSection.module.scss';

const WellnessTipSection = () => {
    const { tips, auth } = usePage<{
        tips: PaginationMeta<WellnessTip> | null;
        auth: Auth;
    }>().props;

    const id = useId();
    const isMember = auth.hasPremiumAccess;

    return (
        <section class={css.wrapper}>
            {isMember ? (
                <ul
                    id={id}
                    class={css.grid}
                >
                    {tips &&
                        tips.data.map((tip) => (
                            <WellnessTipCard
                                key={tip.id}
                                tip={tip}
                            />
                        ))}
                </ul>
            ) : (
                <Paywall />
            )}

            {tips && (
                <Pagination
                    shouldScroll={false}
                    scrollElementId={id}
                    meta={tips}
                />
            )}
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
