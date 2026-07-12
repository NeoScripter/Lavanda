import FgDkTiny from '@/assets/images/sadness/hero-fg-dk-tiny.webp';
import FgDk from '@/assets/images/sadness/hero-fg-dk.webp';
import FgMbTiny from '@/assets/images/sadness/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/sadness/hero-fg-mb.webp';
import FgTbTiny from '@/assets/images/sadness/hero-fg-tb-tiny.webp';
import FgTb from '@/assets/images/sadness/hero-fg-tb.webp';
import SadnessLink1Tiny from '@/assets/images/sadness/sadness-link-1-dk-tiny.webp';
import SadnessLink1 from '@/assets/images/sadness/sadness-link-1-dk.webp';
import SadnessLink2Tiny from '@/assets/images/sadness/sadness-link-2-tiny.webp';
import SadnessLink2 from '@/assets/images/sadness/sadness-link-2.webp';
import SadnessLink3Tiny from '@/assets/images/sadness/sadness-link-3-tiny.webp';
import SadnessLink3 from '@/assets/images/sadness/sadness-link-3.webp';
import SadnessLink4Tiny from '@/assets/images/sadness/sadness-link-4-tiny.webp';
import SadnessLink4 from '@/assets/images/sadness/sadness-link-4.webp';
import SadnessLink5Tiny from '@/assets/images/sadness/sadness-link-5-tiny.webp';
import SadnessLink5 from '@/assets/images/sadness/sadness-link-5.webp';
import SadnessLink6Tiny from '@/assets/images/sadness/sadness-link-6-tiny.webp';
import SadnessLink6 from '@/assets/images/sadness/sadness-link-6.webp';
import { AssymetricSectionLink } from '@/layouts/user/AssymetricLayout/partials/LinkSection/LinkSection';

export const foregroundImage = {
    dk: FgDk,
    dkTiny: FgDkTiny,
    tb: FgTb,
    tbTiny: FgTbTiny,
    mb: FgMb,
    mbTiny: FgMbTiny,
};

export const heroHeading = 'Мне грустно';

export const heroDescription =
    'Иногда всё, что нужно — немного поддержки и знак, что вы не одна. В этом разделе собраны разные способы найти опору, понять свои чувства и чуть-чуть отпустить тяжесть. <br/>Карты, руны, гексаграммы, аудио послания - здесь все о чувствах, нежности и принятии. Они напоминают, что грусть — не враг, а часть пути к свету.';

export const introHeading =
    'Пространство, где можно немного помолчать вместе с собой.';

export const introParts = [
    'Не каждая грусть просит, чтобы её прогоняли. Иногда она приходит лишь затем, чтобы вы ненадолго остановились.',
    'Здесь не нужно искать правильные слова или правильные решения. Достаточно выбрать то, что откликается именно сегодня: карту, руну, гексаграмму, историю или голос.',
    'Порой одно случайное совпадение, один образ или одна фраза становятся тем самым маленьким огоньком, которого так не хватало внутри.',
];

export const assymetricSectionLinks: AssymetricSectionLink[] = [
    {
        id: crypto.randomUUID(),
        title: 'РУНЫ',
        description:
            'Задолго до появления современных психологических методик жители Северной Европы вырезали руны на камне, дереве и металле. Для них это был алфавит, память народа и язык символов. Сегодня руны продолжают жить уже в другом качестве - как способ поддержки, поиск предсказаний, как амулет или знак со смыслом. Задай вопрос и узнай, какую руну сегодняшний день приготовил тебе.',
        img: SadnessLink1,
        imgTiny: SadnessLink1Tiny,
        alt: 'Полотно бледно-фиолетового цвета с несколькими рунами на нем',
        url: '/decision/runes',
    },
    {
        id: crypto.randomUUID(),
        title: 'Старинное гадание госпожи ленорман',
        description:
            'Миниатюрные сцены, символы и повседневные образы, собранные в особую колоду. В каждом сочетании карт — свой сценарий, который может подсказать неочевидное направление или подсветить скрытую деталь ситуации.',
        img: SadnessLink2,
        imgTiny: SadnessLink2Tiny,
        alt: 'Рука держит фиолетовый кристалл аметиста, акварельная иллюстрация',
        url: '/decision/cards/lenormand',
    },
    {
        id: crypto.randomUUID(),
        title: 'Метафорические карты',
        description:
            'Каждая карта здесь - это образ, который раскрывается по-разному для каждого человека. Иногда одна случайно выбранная карта оказывается удивительно созвучной тому, что происходит внутри. Именно с таких совпадений часто начинается разговор с собой. Вместе с каждой картой вас сопровождают вопросы и размышления, созданные профессиональным психотерапевтом в гештальт-подходе. Это направляет внимание, помогает увидеть ситуацию с новой стороны и услышать ответы, которые уже есть внутри вас.',
        img: SadnessLink4,
        imgTiny: SadnessLink4Tiny,
        alt: 'Руна Манназ в центре фиолетовых рунических камней',
        url: '/decision/cards/metaphoric',
    },
    {
        id: crypto.randomUUID(),
        title: 'РАСКЛАД ТАРО',
        description:
            'Карты Таро - это  язык вечных сюжетов. Колода из 78 архетипов — от Силы до Дурака. Каждая карта отражает какой-то этап пути, эмоцию или выбор. Позвольте этим образам стать зеркалом для ваших вопросов и размышлений.',
        img: SadnessLink3,
        imgTiny: SadnessLink3Tiny,
        alt: 'Колода карт Таро с мистическим дизайном в фиолетово-голубых тонах',
        url: '/decision/cards/tarot',
    },
    {
        id: crypto.randomUUID(),
        title: 'ГАДАНИЕ ПО КНИГЕ ПЕРЕМЕН (И-Цзин)',
        description:
            'Книга Перемен» сопровождает китайскую философию почти три тысячи лет. Её не читают как обычную книгу — с ней советуются. Каждая гексаграмма предлагает не готовый ответ, а другой взгляд на происходящее, позволяя увидеть ситуацию шире. Бросай три древние монеты и расшифруй свою гексаграмму прямо сейчас',
        img: SadnessLink5,
        imgTiny: SadnessLink5Tiny,
        alt: 'Багуа с символом Инь-Ян в центре и триграммами на фиолетовом фоне',
        url: '/decision/iching',
    },
    {
        id: crypto.randomUUID(),
        title: 'Послание поддержки от автора',
        description:
            'Короткие аудио, записанные автором <span class="decorative-title">Lavanda <sup>Kim</sup></span>. Слова, которые звучат как спокойный разговор с человеком, которому можно доверять. Случайный выбор аудио - как рулетка судьбы',
        img: SadnessLink6,
        imgTiny: SadnessLink6Tiny,
        alt: 'Акварельная спиральная галактика в фиолетово-розовых тонах со звёздами',
        url: '/sadness/audios',
    },
];
