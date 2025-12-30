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
                    Этот проект создан человеком, который хорошо знает, что
                    такое сомнения, новые начала и возвращение к себе. Опыт в
                    консалтинге, IT и личные поворотные этапы жизни стали
                    основой пространства поддержки — здесь бережно собраны
                    любимые инструменты, а их логика, алгоритмы и визуализации продуманы до деталей.
                    <br />
                    <br />
                    Здесь нет универсальных рецептов. Но есть слова, образы и
                    практики, которые помогают услышать свой голос, снизить
                    тревогу и сделать следующий шаг чуть увереннее — наедине с
                    собой и Lavanda.
                    <br />
                    <br />
                    Тепло. Конфиденциально. И Вам здесь рады.
                    <br />
                    <br />
                    С уважением к вам и вашему выбору,
                    <br />
                    Lavanda.Kim
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
