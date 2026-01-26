import BackgroundDkTinyWebp from '@/assets/images/splitlayout/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/splitlayout/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/splitlayout/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/splitlayout/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/splitlayout/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/splitlayout/background-mb.webp';
import { BgLoaderImage } from '@/layouts/user/SplitLayout';

export const intro =
    '<p>Здесь вы можете услышать короткие (или не очень) голосовые записи от автора <span class="decorative-title">Lavanda <sup>Kim</sup></span>. Каждая запись звучит как доверительный разговор. Это особенный раздел, ведь в каждое сообщение в разное время автор вложила кусочек своей души и тепла, откровение или личный опыт, а некоторые истории вы услышите первыми.</p><p>Состав аудиозаписей постоянно обновляется. Некоторые размещаются на ограниченное время. Не пропустите именно Ваше послание!</p>';

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
