import BackgroundTiny from '@/assets/images/home/about-bg-tiny.webp';
import Background from '@/assets/images/home/about-bg.webp';
import ForegroundTiny from '@/assets/images/home/about-fg-tiny.webp';
import Foreground from '@/assets/images/home/about-fg.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import css from './AboutSection.module.scss';

const AboutSection = () => {
    return (
        <section class={css.wrapper}>
            <div>
                <h2 class={css.heading}>Об авторе</h2>

                <p class={css.description}>
                    Этот проект создан человеком, который знает, каково это —
                    сомневаться, искать и снова вставать на свой путь. Много лет
                    опыта и личных открытий превратились в желание делиться
                    поддержкой с другими. Здесь нет готовых решений или
                    универсальных рецептов, потому что у каждого из нас свой
                    путь. Но есть слова, истории и практики, которые могут
                    помочь вам услышать свой голос и сделать шаг вперед с
                    уверенностью.
                </p>
            </div>

            <div className={css.imgWrapper}>
                <LazyImage
                    img={Background}
                    tinyImg={BackgroundTiny}
                    prtClass={css.bgParent}
                    alt="Абстрактный светлый фон из полупрозрачной струящейся ткани с мягкими складками и плавными линиями"
                />
                <LazyImage
                    img={Foreground}
                    tinyImg={ForegroundTiny}
                    prtClass={css.fgParent}
                    alt="Портрет светловолосой женщины в очках с тонкой оправой, нейтральное выражение лица, мягкий дневной свет, светлый фон"
                />
            </div>
        </section>
    );
};

export default AboutSection;
