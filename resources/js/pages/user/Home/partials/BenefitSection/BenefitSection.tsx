import { cn } from '@/utils/cn';
import css from './BenefitSection.module.scss';

const BenefitSection = () => {
    return (
        <section className={cn(css.root, 'full-bleed')}>
            <div className={css.intro}>
                <h2 className={css.heading}>Что внутри?</h2>
                <p className={css.description}>Инструменты на любой запрос</p>
            </div>

            <ul className={css.cardList}>
            </ul>

            <div className={css.footnote}>
                <p>И это только часть. Коллекция постоянно пополняется: новые карты, расклады, практики и авторские инструменты</p>
            </div>
        </section>
    );
};

export default BenefitSection;

type InfoCardItemType = {
    id: string;
    img: string;
    tinyImg: string;
    label: string;
    href: string;
}

type InfoCardType = {
    id: string;
    title: string;
    items: InfoCardItemType[];
}
