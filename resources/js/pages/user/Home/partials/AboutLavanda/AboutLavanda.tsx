import Icon from '@/assets/images/home/about-lavanda/icon-mb.webp';
import MagicBallDkTinyWebp from '@/assets/images/home/about-lavanda/magic-ball-dk-tiny.webp';
import MagicBallDkAvif from '@/assets/images/home/about-lavanda/magic-ball-dk.avif';
import MagicBallDkWebp from '@/assets/images/home/about-lavanda/magic-ball-dk.webp';
import MagicBallDk2xAvif from '@/assets/images/home/about-lavanda/magic-ball-dk2x.avif';
import MagicBallDk2xWebp from '@/assets/images/home/about-lavanda/magic-ball-dk2x.webp';
import MagicBallDk3xAvif from '@/assets/images/home/about-lavanda/magic-ball-dk3x.avif';
import MagicBallDk3xWebp from '@/assets/images/home/about-lavanda/magic-ball-dk3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './AboutLavanda.module.scss';
import { listItems } from './pageData';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';

const AboutLavanda = () => {
    return (
        <section class={cn(css.wrapper, 'full-bleed')}>
            <div className={css.content}>
                <h2 className={css.heading}>
                    {' '}
                    <span class={cn('decorative-title')}>
                        Lavanda<sup>Kim</sup>
                    </span>
                    - больше, чем просто сайт
                </h2>

                <ul className={css.items}>
                    {listItems.map((label, idx) => (
                        <Item
                            key={idx}
                            html={label}
                        />
                    ))}
                </ul>

                <Link
                    href={route('about')}
                    className={css.aboutBtn}
                >
                    О ресурсе
                    <ArrowRight />
                </Link>
            </div>
            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={cn(css.fgImage)}
                dk={MagicBallDkWebp}
                dk2x={MagicBallDk2xWebp}
                dk3x={MagicBallDk3xWebp}
                dkAvif={MagicBallDkAvif}
                dkAvif2x={MagicBallDk2xAvif}
                dkAvif3x={MagicBallDk3xAvif}
                dkTiny={MagicBallDkTinyWebp}
                tb={MagicBallDkWebp}
                tb2x={MagicBallDk2xWebp}
                tb3x={MagicBallDk3xWebp}
                tbAvif={MagicBallDkAvif}
                tbAvif2x={MagicBallDk2xAvif}
                tbAvif3x={MagicBallDk3xAvif}
                tbTiny={MagicBallDkTinyWebp}
                mb={MagicBallDkTinyWebp}
                mb2x={MagicBallDk2xWebp}
                mb3x={MagicBallDk3xWebp}
                mbAvif={MagicBallDkAvif}
                mbAvif2x={MagicBallDk2xAvif}
                mbAvif3x={MagicBallDk3xAvif}
                mbTiny={MagicBallDkTinyWebp}
            />
        </section>
    );
};

export default AboutLavanda;

const Item: FC<{ html: string }> = ({ html }) => {
    return (
        <li className={css.item}>
            <figure
                className={css.itemIcon}
                aria-hidden="true"
            >
                <img
                    src={Icon}
                    alt=""
                />
            </figure>
            <p dangerouslySetInnerHTML={{ __html: html }} />
        </li>
    );
};
