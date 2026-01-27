import { FC } from 'react-dom/src';
import css from './IntroSection.module.scss';

const IntroSection: FC<{ heading: string; intros: string[] }> = ({
    heading,
    intros,
}) => {
    return (
        <section class={css.wrapper}>
            <div class={css.headingWrapper}>
                <h2
                    className={css.heading}
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            </div>
            <div class={css.intro}>
                {intros.map((intro) => (
                    <p
                        key={intro.slice(0, 20)}
                        dangerouslySetInnerHTML={{ __html: intro }}
                    />
                ))}
            </div>
        </section>
    );
};

export default IntroSection;
