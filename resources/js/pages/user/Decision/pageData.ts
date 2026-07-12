import DecisionLink1Tiny from '@/assets/images/decision/decision-link-1-tiny.webp';
import DecisionLink1 from '@/assets/images/decision/decision-link-1.webp';
import DecisionLink2Tiny from '@/assets/images/decision/decision-link-2-tiny.webp';
import DecisionLink2 from '@/assets/images/decision/decision-link-2.webp';
import DecisionLink3Tiny from '@/assets/images/sadness/sadness-link-1-dk-tiny.webp';
import DecisionLink3  from '@/assets/images/sadness/sadness-link-1-dk.webp';
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
    'Самые важные вопросы сопровождают человека тысячи лет. Меняются эпохи, технологии и привычный уклад жизни, но любовь, выбор, сомнения, страх, надежда и поиск своего пути остаются неизменными';

export const introHeading =
    'Правильного решения в реальности не существует - есть только сделанный выбор и его последствия. <br/><small>Эльчин Сафарли</small>';

export const introParts = [
    'В этом разделе собраны символические системы разных культур. Каждая из них предлагает свой взгляд на происходящее: через архетипы, древние тексты, образы, звуки или случайность.',
];

export const assymetricSectionLinks: AssymetricSectionLink[] = [
    {
        id: crypto.randomUUID(),
        title: 'Практика',
        description:
            'Современные техники принятия решений и анализа ситуации помогают навести порядок в мыслях, увидеть новые варианты и сделать следующий шаг более осознанно. Здесь собраны простые упражнения, которые легко применять в жизни и работе. Попробуйте одну из практик - порой решение становится очевиднее уже после нескольких минут спокойного анализа.',
        img: DecisionLink1,
        imgTiny: DecisionLink1Tiny,
        alt: 'Три фиолетовые свечи с кристаллами аметиста у основания',
        url: '/decision/practice',
    },
    // {
    //     id: crypto.randomUUID(),
    //     title: 'опыт автора',
    //     description:
    //         'Автор делится личными историями и находками, которые помогали справляться с выбором. Иногда чужой опыт становится подсказкой и поддержкой.',
    //     img: DecisionLink2,
    //     imgTiny: DecisionLink2Tiny,
    //     alt: 'Рука держит фиолетовый кристалл аметиста, акварельная иллюстрация',
    //     url: '/decision/experience',
    // },
    {
        id: crypto.randomUUID(),
        title: 'РУНЫ',
        description:
            'Задолго до появления современных психологических методик жители Северной Европы вырезали руны на камне, дереве и металле. Для них это был алфавит, память народа и язык символов. Сегодня руны продолжают жить уже в другом качестве - как способ поддержки, поиск предсказаний, как амулет или знак со смыслом. Задай вопрос и узнай, какую руну сегодняшний день приготовил тебе.',
        img: DecisionLink3,
        imgTiny: DecisionLink3Tiny,
        alt: 'Руна Манназ в центре фиолетовых рунических камней',
        url: '/decision/runes',
    },
    {
        id: crypto.randomUUID(),
        title: 'РАСКЛАД КАРТ',
        description:
            'На протяжении веков люди замечали, что символы начинают звучать иначе, когда появляются рядом друг с другом. Так рождается история — со своими вопросами, поворотами и неожиданными деталями. Именно в этих сочетаниях многие находят мысли, которых прежде не замечали. Выбери колоду по душе и посмотри, какая история сложится.',
        img: DecisionLink4,
        imgTiny: DecisionLink4Tiny,
        alt: 'Колода карт Таро с мистическим дизайном в фиолетово-голубых тонах',
        url: '/decision/cards',
    },
    {
        id: crypto.randomUUID(),
        title: 'КНИГА ПЕРЕМЕН (И-Цзин)',
        description:
            'Книга Перемен» сопровождает китайскую философию почти три тысячи лет. Её не читают как обычную книгу — с ней советуются. Каждая гексаграмма предлагает не готовый ответ, а другой взгляд на происходящее, позволяя увидеть ситуацию шире. Бросай три древние монеты и расшифруй свою гексаграмму прямо сейчас',
        img: DecisionLink5,
        imgTiny: DecisionLink5Tiny,
        alt: 'Багуа с символом Инь-Ян в центре и триграммами на фиолетовом фоне',
        url: '/decision/iching',
    },
    {
        id: crypto.randomUUID(),
        title: 'ИГРЫ РАЗУМА',
        description:
            'Этот простой, но невероятно действенный полезный инструмент в виде колоды МАК я получила от члена Профессиональной психотерапевтической лиги. С разрешения автора эти карты используются и у нас.',
        img: DecisionLink6,
        imgTiny: DecisionLink6Tiny,
        alt: 'Акварельная спиральная галактика в фиолетово-розовых тонах со звёздами',
        url: '/decision/mind-games',
    },
];
