import { FC } from 'react-dom/src';
import css from './IntroSection.module.scss';

const IntroSection: FC<{ heading: string; intros: string[] }> = ({
    heading,
    intros,
}) => {
    return (
        <section class={css.wrapper}>
            <div class={css.headingWrapper}>
                <h2>{heading}</h2>
            </div>
            <div class={css.intro}>
                {intros.map((intro) => (
                    <p key={intro.slice(0, 20)}>{intro}</p>
                ))}
            </div>
        </section>
    );
};

export default IntroSection;
