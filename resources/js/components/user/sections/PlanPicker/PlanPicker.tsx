import Banner from '@/components/shared/ui/Banner/Banner';
import PlanCard from '@/components/user/ui/PlanCard/PlanCard';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Plan } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './PlanPicker.module.scss';

const PlanPicker: FC<NodeProps> = ({ children, className }) => {
    const { plans, activeUsers } = usePage<{
        plans: Plan[];
        activeUsers: number;
    }>().props;

    const { showSignup } = useAuthModal();

    return (
        <section class={cn(css.wrapper, className)}>
            <div class={css.textWrapper}>
                <h2 class={css.heading}>Тарифы</h2>
                <p class={css.description}>
                    Иногда одной подсказки достаточно, чтобы стало спокойнее.
                    Возможно, сейчас именно тот момент.
                </p>
                {activeUsers > 10 && (
                    <p class={css.activeUsersNote}>
                        Уже более {activeUsers} пользователей оформили подписку
                    </p>
                )}
            </div>

            <Banner className={css.infoBanner}>
                <p>
                    Важно: после{' '}
                    <button
                        onClick={showSignup}
                        type="button"
                        className={css.inlineBtn}
                    >
                        экспресс-регистрации
                    </button>{' '}
                    у вас уже есть{' '}
                    <strong>24 часа полного доступа бесплатно.</strong>
                </p>
                <p>
                    <strong>
                        Никаких автоматический продлений или списаний,
                    </strong>{' '}
                    вы управляете доступом самостоятельно.
                </p>
            </Banner>

            <ul class={css.plans}>
                {plans.map((plan, idx) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        isHighlighted={idx === 1}
                    />
                ))}
            </ul>

            {children}

            <p className={css.footnote}>
                Вы можете оплатить картой любой страны (РФ, СНГ, ЕС и др.).
                <br />
                Сумма автоматически конвертируется банком в вашу валюту по
                актуальному курсу.
            </p>
        </section>
    );
};

export default PlanPicker;
