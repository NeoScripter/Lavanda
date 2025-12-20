import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import css from './Experience.module.scss';
import HeroSection from './partials/HeroSection';
import ItemSection from './partials/ItemSection';

const Experience = () => {
    return (
        <AppLayout className={css.layout}>
            <HeroSection />

            <ItemSection />
        </AppLayout>
    );
};

export default Experience;
