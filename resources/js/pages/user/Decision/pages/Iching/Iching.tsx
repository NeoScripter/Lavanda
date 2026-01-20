import ForegroundDkTinyWebp from '@/assets/images/iching/foreground-dk-tiny.webp';
import ForegroundDkAvif from '@/assets/images/iching/foreground-dk.avif';
import ForegroundDkWebp from '@/assets/images/iching/foreground-dk.webp';
import ForegroundMbTinyWebp from '@/assets/images/iching/foreground-mb-tiny.webp';
import ForegroundMbAvif from '@/assets/images/iching/foreground-mb.avif';
import ForegroundMbWebp from '@/assets/images/iching/foreground-mb.webp';
import SchemaTiny from '@/assets/images/iching/schema-dk-tiny.webp';
import Schema from '@/assets/images/iching/schema-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { Head } from '@inertiajs/react';
import css from './Iching.module.scss';
import { heading, intro } from './pageData';
import CoinGame from './partials/CoinGame';
('@/assets/images/iching/schema.png');

const Iching = () => {
    return (
        <>
            <Head title="Таблица гексаграмм" />
            <BreadCrumbLayout
                heading={heading}
                intro={intro}
                className={css.wrapper}
                imgClass={css.heroForeground}
                withCards={false}
                fgImg={{
                    dk: ForegroundDkWebp,
                    dkAvif: ForegroundDkAvif,
                    dkTiny: ForegroundDkTinyWebp,
                    tb: ForegroundDkWebp,
                    tbAvif: ForegroundDkAvif,
                    tbTiny: ForegroundDkTinyWebp,
                    mb: ForegroundMbWebp,
                    mbAvif: ForegroundMbAvif,
                    mbTiny: ForegroundMbTinyWebp,
                }}
                hasHeroRevealer={true}
            >
                <InteractiveLayout
                    btnLabels={['Случайный выбор']}
                    components={[() => <CoinGame />]}
                    className={css.interactiveLayout}
                >
                    <LazyImage
                        prtClass={css.schema}
                        img={Schema}
                        tinyImg={SchemaTiny}
                    />
                </InteractiveLayout>
            </BreadCrumbLayout>
        </>
    );
};

export default Iching;
