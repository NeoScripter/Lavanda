import BackgroundDk from '@/assets/images/plans/background-dk.webp';
import BackgroundMb from '@/assets/images/plans/background-mb.webp';
import BackgroundTb from '@/assets/images/plans/background-tb.webp';
import BackgroundTiny from '@/assets/images/plans/background-tiny.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import PlanCard from '@/components/user/ui/PlanCard/PlanCard';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Plan } from '@/types/model';
import { cn } from '@/utils/cn';
import { Link, usePage } from '@inertiajs/react';
import { MoveLeft } from 'lucide-preact';
import css from './Plan.module.scss';

const Plans = () => {
    const { plan } = usePage<{ plan: Plan }>().props;
    return (
        <AppLayout
            extendedFooter={false}
            variation="dark"
            className={css.layout}
        >
            <section>
                <h1 className={css.heading}>Оформление подписки</h1>

                <PlanCard
                    className={css.card}
                    plan={plan}
                >
                    <div>
                        <a
                            href=""
                            className={cn('primary-btn', css.payBtn)}
                        >
                            Оплатить
                        </a>

                        <Link
                            className={css.backLink}
                            href={route('plans')}
                        >
                            <MoveLeft />
                            Назад к выбору тарифа
                        </Link>
                    </div>
                </PlanCard>
            </section>

            <section className={css.notice}>
                <p>
                    Оформляя подписку на сайте lavanda.kim, вы подтверждаете,
                    что:
                </p>

                <ul>
                    <li>
                        приобретаете доступ к цифровому контенту
                        развлекательного и информационного характера;
                    </li>
                    <li>
                        понимаете, что материалы сайта не являются
                        психологической, медицинской, терапевтической или иной
                        профессиональной услугой;
                    </li>
                    <li>
                        соглашаетесь с Пользовательским соглашением и Политикой
                        конфиденциальности сайта;
                    </li>
                    <li>
                        подписка является автоматически продлевающейся, если
                        иное не указано в тарифе;
                    </li>
                    <li>
                        вы можете отменить подписку в любой момент в личном
                        кабинете или обратившись по адресу: [email] — доступ
                        будет сохраняться до окончания оплаченного периода;
                    </li>
                    <li>
                        после активации подписки возврат платежа возможен только
                        в случаях, предусмотренных условиями сервиса.
                    </li>
                </ul>
                <p>
                    Нажимая «Оплатить», вы подтверждаете корректность данных и
                    своё согласие на списание стоимости подписки.
                </p>
            </section>
            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                imgClass={css.bgImage}
                dk={BackgroundDk}
                dkTiny={BackgroundTiny}
                tb={BackgroundTb}
                tbTiny={BackgroundTiny}
                mb={BackgroundMb}
                mbTiny={BackgroundTiny}
            />
        </AppLayout>
    );
};

export default Plans;
