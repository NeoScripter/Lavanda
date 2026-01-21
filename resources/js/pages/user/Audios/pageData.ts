import BackgroundDkTinyWebp from '@/assets/images/splitlayout/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/splitlayout/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/splitlayout/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/splitlayout/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/splitlayout/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/splitlayout/background-mb.webp';
import { BgLoaderImage } from '@/layouts/user/SplitLayout';

export const intro =
    '<p>Здесь вы можете услышать короткое (или не очень) голосовые записи от автора Lavanda.Kim. Каждая запись звучит как доверительный разговор. <strong>Это особенный раздел </strong>, ведь в каждое сообщение в разное время я вложила кусочек своей души и тепла, откровение или личный опыт, а некоторые истории вы услышите первыми...</p>  <p>Каждым сообщением я искренне хочу помочь и очень желаю, чтоб они помогли Вам преодолеть все трудности.</p>';

export const audioBg: BgLoaderImage = {
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
