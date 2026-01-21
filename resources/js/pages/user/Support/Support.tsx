import SplitLayout from '@/layouts/user/SplitLayout';
import { cn } from '@/utils/cn';
import css from './Support.module.scss';
// import HeartDkTinyWebp from "@/assets/images/support/heart-dk-tiny.webp";
// import HeartDkAvif from "@/assets/images/support/heart-dk.avif";
// import HeartDkWebp from "@/assets/images/support/heart-dk.webp";

const Support = () => {
    return (
        <SplitLayout
            leftClassName={css.leftLayout}
            left={
                <>
                    <h1 className={css.mainHeading}>
                        Послание поддержки от автора
                    </h1>
                    <div className={css.intro}>
                        <p>
                            Здесь вы можете услышать короткое (или не очень)
                            голосовые записи от автора Lavanda.Kim. Каждая
                            запись звучит как доверительный разговор.{' '}
                            <strong>Это особенный раздел </strong>, ведь в
                            каждое сообщение в разное время я вложила кусочек
                            своей души и тепла, откровение или личный опыт, а
                            некоторые истории вы услышите первыми...
                        </p>

                        <p>
                            Каждым сообщением я искренне хочу помочь и очень
                            желаю, чтоб они помогли Вам преодолеть все
                            трудности.
                        </p>
                    </div>
                    <button class={cn('primary-btn', css.repeatBtn)}>
                        Повторить
                    </button>
                </>
            }
            right={
                <>
                    <h2 className={css.songQuote}>
                        {' '}
                        Сделайте паузу, включите одну из записей и внимательно
                        послушайте — возможно, в этих словах вы услышите те
                        самые идеи и ответы, которые искали.{' '}
                    </h2>
                </>
            }
        />
    );
};

export default Support;
