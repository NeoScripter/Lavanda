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
    'Пространство, где можно остановиться, вдохнуть, почувствовать себя, услышать что-то важное.';

export const introParts = [
    'Бывают дни, когда всё кажется слишком тяжёлым. Мы устаём от людей, от обязанностей, от бесконечных мыслей. Иногда не хочется искать смысл — хочется просто немного тишины и тепла.',
    'В этом разделе можно найти маленькие опоры — слова, символы, знаки, которые напоминают: всё проходит, и внутри тебя всё ещё есть свет.',
    'Здесь нет правильных ответов и советов «как нужно». Есть пространство, где можно остановиться, вдохнуть, почувствовать себя, услышать что-то важное.',
    'Попробуй выбрать то, что откликается именно тебе — руну, карту, гексаграмму или просто включи аудио. Возможно, именно сейчас ты услышишь то, что поможет отпустить боль и сделать первый шаг к спокойствию.',
];

export const assymetricSectionLinks: AssymetricSectionLink[] = [
    {
        id: crypto.randomUUID(),
        title: 'РУНЫ',
        description:
            'Каждая руна — древний символ с глубоким смыслом. Случайно выпавшие руны складываются в своеобразное «послание» — при расшифровке этого символического «текста» могут открыться новые грани ситуации. ',
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
            'Карты осознания, саморефлексии. Они помогают заглянуть вглубь себя и увидеть, что скрывается за тревогой или усталостью.',
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
            'Древний китайский трактат «Книга Перемен» содержит 64 символических узора, каждый отражает определённый жизненный сценарий. Случайно выбранная гексаграмма становится метафорическим ключом: она помогает находить неожиданные варианты развития событий.',
        img: SadnessLink5,
        imgTiny: SadnessLink5Tiny,
        alt: 'Багуа с символом Инь-Ян в центре и триграммами на фиолетовом фоне',
        url: '/decision/iching',
    },
    {
        id: crypto.randomUUID(),
        title: 'Послание поддержки от автора',
        description:
            'Здесь вы можете услышать короткие голосовые записи от автора <span class="decorative-title">Lavanda <sup>Kim</sup></span>. Каждая запись звучит как доверительный рассказ другу. Это особенный раздел. Раздел личных историй и опыта.',
        img: SadnessLink6,
        imgTiny: SadnessLink6Tiny,
        alt: 'Акварельная спиральная галактика в фиолетово-розовых тонах со звёздами',
        url: '/sadness/audios',
    },
];
