import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import FAQSection from '../Home/partials/FAQSection/FAQSection';
import css from './FAQs.module.scss';

const FAQs = () => {
    return (
        <AppLayout
            extendedFooter={false}
            className={css.layout}
            variation="light"
        >
            <FAQSection />
        </AppLayout>
    );
};

export default FAQs;
