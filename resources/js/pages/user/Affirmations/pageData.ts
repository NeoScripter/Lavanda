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

export const affirmationCarouselIntro =
    'Карточки на каждый день, чтобы вернуть опору, спокойствие и веру в себя. Подходят, когда нужно настроиться на лучшее и укрепить внутренний ресурс.';

export const affirmationCategoryIntro =
    '<p>Короткое напутствие на день, чтобы напомнить себе о важном или воодушевиться. Короткие предложения - но иногда именно они задают настроение всему дню. </p><p>Получите свою фразу на сегодня — словно сообщение от наставника, близкого друга или внутреннего голоса.</p><p>Выберите тему из списка.</p>';
