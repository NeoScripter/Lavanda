import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout/InteractiveLayout';
import { Rune } from '@/types/model';
import { usePage } from '@inertiajs/react';
import { heading, intro } from './pageData';
import ChosenRunes from './partials/ChosenRunes';
import RandomRunes from './partials/RandomRunes';
import css from './Runes.module.scss';

const Runes = () => {
    const { runes } = usePage<{ runes: Rune[] }>().props;
    return (
        <BreadCrumbLayout
            heading={heading}
            intro={intro}
            imgClass={css.heroForeground}
            withCards={true}
        >
            <InteractiveLayout
                btnLabels={['Случайный выбор', 'Выбрать самой']}
                components={[
                    () => <RandomRunes runes={runes} />,
                    () => <ChosenRunes runes={runes} />,
                ]}
            >
                <div>Выберите тему</div>
            </InteractiveLayout>
        </BreadCrumbLayout>
    );
};

export default Runes;
