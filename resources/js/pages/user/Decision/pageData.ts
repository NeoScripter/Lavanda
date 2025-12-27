import DecisionLink1Tiny from '@/assets/images/decision/decision-link-1-tiny.webp';
import DecisionLink1 from '@/assets/images/decision/decision-link-1.webp';
import DecisionLink2Tiny from '@/assets/images/decision/decision-link-2-tiny.webp';
import DecisionLink2 from '@/assets/images/decision/decision-link-2.webp';
import DecisionLink3Tiny from '@/assets/images/decision/decision-link-3-tiny.webp';
import DecisionLink3 from '@/assets/images/decision/decision-link-3.webp';
import DecisionLink4Tiny from '@/assets/images/decision/decision-link-4-tiny.webp';
import DecisionLink4 from '@/assets/images/decision/decision-link-4.webp';
import DecisionLink5Tiny from '@/assets/images/decision/decision-link-5-tiny.webp';
import DecisionLink5 from '@/assets/images/decision/decision-link-5.webp';
import DecisionLink6Tiny from '@/assets/images/decision/decision-link-6-tiny.webp';
import DecisionLink6 from '@/assets/images/decision/decision-link-6.webp';
import FgDkTiny from '@/assets/images/decision/hero-fg-dk-tiny.webp';
import FgDk from '@/assets/images/decision/hero-fg-dk.webp';
import FgMbTiny from '@/assets/images/decision/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/decision/hero-fg-mb.webp';
import FgTbTiny from '@/assets/images/decision/hero-fg-tb-tiny.webp';
import FgTb from '@/assets/images/decision/hero-fg-tb.webp';
import { AssymetricSectionLink } from '@/layouts/user/AssymetricLayout/partials/LinkSection/LinkSection';

export const foregroundImage = {
    dk: FgDk,
    dkTiny: FgDkTiny,
    tb: FgTb,
    tbTiny: FgTbTiny,
    mb: FgMb,
    mbTiny: FgMbTiny,
};

export const heroHeading = 'Принять решение';

export const heroDescription =
    'Когда трудно выбрать путь — остановись и послушай себя. Здесь ты найдёшь поддержку, чтобы принять решение спокойно и уверенно.';

export const introHeading =
    'Твои решения — твоя сила. Иногда достаточно маленького шага, чтобы её почувствовать';

export const introParts = [
    'Каждый из нас оказывается в моменте выбора — большого или маленького. Порой решение кажется очевидным, но внутри остаётся тревога и сомнения. А иногда вариантов так много, что сложно услышать свой собственный голос. Этот раздел создан, чтобы помочь вам остановиться и прислушаться к себе.',
    'Здесь нет готовых рецептов и чужих ответов. Зато есть инструменты, которые мягко направляют к пониманию: практики для концентрации и внутреннего равновесия, символы и образы, которые открывают новые смыслы, и истории автора, чтобы увидеть, что вы не одни в своём поиске.',
    'Всё это — не про магию и гадания, а про внимательность к себе. Чтобы, принимая решение, вы чувствовали уверенность, спокойствие и опору внутри.',
];

export const assymetricSectionLinks: AssymetricSectionLink[] = [
    {
        id: crypto.randomUUID(),
        title: 'Практика',
        description:
            'Простые упражнения помогут замедлиться, услышать свои мысли и эмоции. Это шаг к тому, чтобы самостоятельно найти ответ, а не полагаться на случай.',
        img: DecisionLink1,
        imgTiny: DecisionLink1Tiny,
        alt: 'Три фиолетовые свечи с кристаллами аметиста у основания',
        url: '/decision/practice',
    },
    {
        id: crypto.randomUUID(),
        title: 'опыт автора',
        description:
            'Автор делится личными историями и находками, которые помогали справляться с выбором. Иногда чужой опыт становится подсказкой и поддержкой.',
        img: DecisionLink2,
        imgTiny: DecisionLink2Tiny,
        alt: 'Рука держит фиолетовый кристалл аметиста, акварельная иллюстрация',
        url: '/decision/experience',
    },
    {
        id: crypto.randomUUID(),
        title: 'РУНЫ',
        description:
            'Руны помогут взглянуть на ситуацию под новым углом и заметить то, что раньше ускользало.',
        img: DecisionLink3,
        imgTiny: DecisionLink3Tiny,
        alt: 'Руна Манназ в центре фиолетовых рунических камней',
        url: '/decision',
    },
    {
        id: crypto.randomUUID(),
        title: 'РАСКЛАД КАРТ',
        description:
            'Карты работают как зеркало: через символы и образы можно понять, что на самом деле важно для вас. Это не гадание, а инструмент самопознания.',
        img: DecisionLink4,
        imgTiny: DecisionLink4Tiny,
        alt: 'Колода карт Таро с мистическим дизайном в фиолетово-голубых тонах',
        url: '/decision',
    },
    {
        id: crypto.randomUUID(),
        title: 'КНИГА ПЕРЕМЕН (И-Цзин)',
        description:
            'Руны помогут взглянуть на ситуацию под новым углом и заметить то, что раньше ускользало.',
        img: DecisionLink5,
        imgTiny: DecisionLink5Tiny,
        alt: 'Багуа с символом Инь-Ян в центре и триграммами на фиолетовом фоне',
        url: '/decision',
    },
    {
        id: crypto.randomUUID(),
        title: 'ИГРЫ РАЗУМА',
        description:
            'Руны помогут взглянуть на ситуацию под новым углом и заметить то, что раньше ускользало.',
        img: DecisionLink6,
        imgTiny: DecisionLink6Tiny,
        alt: 'Акварельная спиральная галактика в фиолетово-розовых тонах со звёздами',
        url: '/decision',
    },
];
