import BackgroundDkTinyWebp from '@/assets/images/affirmations/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/affirmations/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/affirmations/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/affirmations/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/affirmations/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/affirmations/background-mb.webp';
import { BgLoaderImage } from '@/layouts/user/SplitLayout';

export const intro = `
    <p>Здесь вы можете услышать короткое (или не очень) голосовые записи от автора Lavanda.Kim. Каждая запись звучит как доверительный разговор. <strong>Это особенный раздел</strong>, ведь в каждое сообщение в разное время я вложила кусочек своей души и тепла, откровение или личный опыт, а некоторые истории вы услышите первыми...</p>
    <p>Каждым сообщением я искренне хочу помочь и очень желаю, чтоб они помогли Вам преодолеть все трудности.</p>
`;

export const affirmationBg: BgLoaderImage = {
    dk: BackgroundDkWebp,
    dkAvif: BackgroundDkAvif,
    tb: BackgroundDkWebp,
    tbAvif: BackgroundDkAvif,
    mb: BackgroundMbWebp,
    mbAvif: BackgroundMbAvif,
    dkTiny: BackgroundDkTinyWebp,
    tbTiny: BackgroundDkTinyWebp,
    mbTiny: BackgroundMbTinyWebp,
};

export const affirmationCarouselIntro = `
    Короткое напутствие на день, чтобы напомнить себе о важном.
    Одно предложение — но иногда именно оно задаёт настроение всему дню.
    Выбери свою фразу на сегодня — словно сообщение от подруги, которое помогает выдохнуть и улыбнуться.
`;

export const affirmationCategoryIntro = `
    <p>
        Короткое напутствие на день, чтобы напомнить себе о важном.
        Одно предложение — но иногда именно оно задаёт настроение всему дню.
        Выбери свою фразу на сегодня — словно сообщение от подруги, которое помогает выдохнуть и улыбнуться.
    </p>
    <p>Выбери тему из списка</p>
`;
