import ForegroundDkTiny from '@/assets/images/cards/mind-games/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/cards/mind-games/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/cards/mind-games/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/cards/mind-games/foreground-mb.webp';
import Narrative from '@/components/user/ui/Narrative/Narrative';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { Head } from '@inertiajs/react';
import css from './MindGames.module.scss';
import { heading, intro, narrativeHeading, narrativeIntro } from './pageData';
import RandomCards from './partials/RandomCards';

const MindGames = () => {
    return (
        <>
            <Head title="Игры разума" />
            <BreadCrumbLayout
                heading={heading}
                intro={intro}
                className={css.wrapper}
                imgClass={css.heroForeground}
                withCards={false}
                fgImg={{
                    dk: ForegroundDk,
                    dkTiny: ForegroundDkTiny,
                    tb: ForegroundDk,
                    tbTiny: ForegroundDkTiny,
                    mb: ForegroundMb,
                    mbTiny: ForegroundMbTiny,
                }}
                hasHeroRevealer={true}
            >
                <Narrative
                    className={css.intro}
                    heading={narrativeHeading}
                    prgs={[narrativeIntro]}
                />
                <InteractiveLayout
                    btnLabels={['Случайный выбор']}
                    components={[() => <RandomCards />]}
                />
            </BreadCrumbLayout>
        </>
    );
};

export default MindGames;
