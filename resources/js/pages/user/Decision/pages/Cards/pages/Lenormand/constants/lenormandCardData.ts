import LenormandKeyManDkTinyWebp from '@/assets/images/cards/lenormand/lenormand-key-man-dk-tiny.webp';
import LenormandKeyManDkWebp from '@/assets/images/cards/lenormand/lenormand-key-man-dk.webp';
import LenormandKeyWomanTinyDkWebp from '@/assets/images/cards/lenormand/lenormand-key-woman-dk-tiny.webp';
import LenormandKeyWomanDkWebp from '@/assets/images/cards/lenormand/lenormand-key-woman-dk.webp';
import { Image, Lenormand } from '@/types/model';

export type LenormandCard =
    | (Pick<Lenormand, 'id' | 'name' | 'body' | 'advice'> & {
          isFlipped: boolean;
          front_image: Pick<Image, 'id' | 'path' | 'tiny_path' | 'alt'>;
      })
    | null;

export const manKey: Omit<LenormandCard, 'isFlipped'> = {
    id: 167,
    name: 'ManKey',
    front_image: {
        id: 257,
        path: LenormandKeyManDkWebp,
        tiny_path: LenormandKeyManDkTinyWebp,
        alt: 'Мужской портрет в викторианском стиле: профиль молодого мужчины в классическом костюме с жилетом и галстуком, окружённого ветвями сирени.',
    },
    body: '',
    advice: '',
};

export const womanKey: Omit<LenormandCard, 'isFlipped'> = {
    id: 147,
    name: 'WomanKey',
    front_image: {
        id: 267,
        path: LenormandKeyWomanDkWebp,
        tiny_path: LenormandKeyWomanTinyDkWebp,
        alt: 'Женский портрет в викторианском стиле: профиль молодой женщины с собранными волосами, украшенными сиренью, в светлом платье с кружевным воротником и букетом сирени.',
    },
    body: '',
    advice: '',
};

export const introText =
    '<p>Формат этого набора отличается от привычных карточных инструментов — вы почувствуете это в процессе. Описания достаточно ясные, но мы рекомендуем не ограничиваться только текстом. Обратите внимание и на изображения: иногда именно детали, образы и общее настроение карты подсказывают больше, чем слова. У каждого откликается что-то своё.</p><p>В центре набора находится Ключ — образ, который вы выбрали на предыдущем шаге. Он символизирует вас и ваше положение в ситуации. В зависимости от выбора это может быть образ Дамы или Джентльмена.</p><p>Если рядом появляется другой образ, противоположный по роли, он может указывать на значимого человека в вашей жизни: партнёра, близкого или того, чьё присутствие сейчас особенно важно. Когда такая карта расположена близко к Ключу, это часто отражает ощущение близости — человека рядом с вами, в вашей реальности или в поле внимания.</p>';
