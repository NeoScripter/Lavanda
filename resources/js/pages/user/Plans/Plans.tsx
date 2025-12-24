import BackgroundDk from '@/assets/images/plans/background-dk.webp';
import BackgroundMb from '@/assets/images/plans/background-mb.webp';
import BackgroundTb from '@/assets/images/plans/background-tb.webp';
import BackgroundTiny from '@/assets/images/plans/background-tiny.webp';
import PlanPicker from '@/components/user/sections/PlanPicker/PlanPicker';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import css from './Plans.module.scss';

const Plans = () => {
    return (
        <AppLayout
            extendedFooter={false}
            variation="dark"
            className={css.layout}
        >
            <PlanPicker />

            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                imgClass={css.bgImage}
                dk={BackgroundDk}
                dkTiny={BackgroundTiny}
                tb={BackgroundTb}
                tbTiny={BackgroundTiny}
                mb={BackgroundMb}
                mbTiny={BackgroundTiny}
            />
        </AppLayout>
    );
};

export default Plans;
