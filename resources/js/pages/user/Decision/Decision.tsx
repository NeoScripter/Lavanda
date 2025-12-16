import HeroDecorTiny from '@/assets/images/decision/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/decision/hero-decor.webp';
import FgDkTiny from '@/assets/images/decision/hero-fg-dk-tiny.webp';
import FgDk from '@/assets/images/decision/hero-fg-dk.webp';
import FgMbTiny from '@/assets/images/decision/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/decision/hero-fg-mb.webp';
import FgTbTiny from '@/assets/images/decision/hero-fg-tb-tiny.webp';
import FgTb from '@/assets/images/decision/hero-fg-tb.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AssymetricLayout from '@/layouts/user/AssymetricLayout/AssymetricLayout';
import css from './Decision.module.scss';

const Decision = () => {
    return (
        <AssymetricLayout
            headTitle="Решение"
            heroProps={{
                heading: 'Принять решение',
                description:
                    'Когда трудно выбрать путь — остановись и послушай себя. Здесь ты найдёшь поддержку, чтобы принять решение спокойно и уверенно.',
                decorImg: (
                    <LazyImage
                        img={HeroDecor}
                        tinyImg={HeroDecorTiny}
                        prtClass={css.decor}
                    />
                ),
                fgImg: {
                    dk: FgDk,
                    dkTiny: FgDkTiny,
                    tb: FgTb,
                    tbTiny: FgTbTiny,
                    mb: FgMb,
                    mbTiny: FgMbTiny,
                },
            }}
            introProps={{
                heading:
                    'Твои решения — твоя сила. Иногда достаточно маленького шага, чтобы её почувствовать',
                intros: [
                    'Каждый из нас оказывается в моменте выбора — большого или маленького. Порой решение кажется очевидным, но внутри остаётся тревога и сомнения. А иногда вариантов так много, что сложно услышать свой собственный голос. Этот раздел создан, чтобы помочь вам остановиться и прислушаться к себе.',
                    'Здесь нет готовых рецептов и чужих ответов. Зато есть инструменты, которые мягко направляют к пониманию: практики для концентрации и внутреннего равновесия, символы и образы, которые открывают новые смыслы, и истории автора, чтобы увидеть, что вы не одни в своём поиске.',
                    'Всё это — не про магию и гадания, а про внимательность к себе. Чтобы, принимая решение, вы чувствовали уверенность, спокойствие и опору внутри.',
                ],
            }}
        >
            <p class={css.something}>children</p>
        </AssymetricLayout>
    );
};

export default Decision;
