import LanternDkTinyWebp from '@/assets/images/home/lantern-dk-tiny.webp';
import LanternDkAvif from '@/assets/images/home/lantern-dk.avif';
import LanternDkWebp from '@/assets/images/home/lantern-dk.webp';
import LanternDk2xAvif from '@/assets/images/home/lantern-dk2x.avif';
import LanternDk2xWebp from '@/assets/images/home/lantern-dk2x.webp';
import LanternDk3xAvif from '@/assets/images/home/lantern-dk3x.avif';
import LanternDk3xWebp from '@/assets/images/home/lantern-dk3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './HelpSection.module.scss';

const HelpSection = () => {
    const {
        auth: { user },
    } = usePage<{ auth: Auth }>().props;
    const { showSignup } = useAuthModal();

    return (
        <section className={cn(css.wrapper, 'full-bleed')}>
            <div className={css.content}>
                <h2 className={css.heading}>Как могу вам сегодня помочь?</h2>
                <p>
                    Этот сайт создан, чтобы в сложные моменты напомнить вам:
                    ответы уже есть внутри — нужно лишь немного поддержки, чтобы
                    их расслышать.
                </p>
                <p>
                    <strong>
                        От долгожданного ответа вас отделяет всего несколько
                        простых шагов:
                    </strong>
                </p>
                <ol className={css.actions}>
                    <li>Войдите или зарегистрируйтесь</li>
                    <li>Выберете интересущий раздел</li>
                    <li>Сформулируйте ваш вопрос</li>
                    <li>
                        Получите подсказку в виде карты, руны или напутствия
                    </li>
                </ol>

                {!user && (
                    <button
                        type="button"
                        class={cn('primary-btn', css.signupBtn)}
                        onClick={showSignup}
                    >
                        Экспресс-регистрация
                    </button>
                )}
            </div>

            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={LanternDkWebp}
                dk2x={LanternDk2xWebp}
                dk3x={LanternDk3xWebp}
                dkAvif={LanternDkAvif}
                dkAvif2x={LanternDk2xAvif}
                dkAvif3x={LanternDk3xAvif}
                dkTiny={LanternDkTinyWebp}
                tb={LanternDkWebp}
                tb2x={LanternDk2xWebp}
                tb3x={LanternDk3xWebp}
                tbAvif={LanternDkAvif}
                tbAvif2x={LanternDk2xAvif}
                tbAvif3x={LanternDk3xAvif}
                tbTiny={LanternDkTinyWebp}
                mb={LanternDkTinyWebp}
                mb2x={LanternDk2xWebp}
                mb3x={LanternDk3xWebp}
                mbAvif={LanternDkAvif}
                mbAvif2x={LanternDk2xAvif}
                mbAvif3x={LanternDk3xAvif}
                mbTiny={LanternDkTinyWebp}
            />
        </section>
    );
};

export default HelpSection;
