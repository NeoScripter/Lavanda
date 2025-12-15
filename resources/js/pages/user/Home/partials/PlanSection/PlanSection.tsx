import PlanCard from '@/components/user/ui/PlanCard/PlanCard';
import { Plan } from '@/types/model';
import { usePage } from '@inertiajs/react';
import css from './PlanSection.module.scss';

const PlanSection = () => {
    const { plans } = usePage<{ plans: Plan[] }>().props;

    return (
        <section class={css.wrapper}>
            <div class={css.textWrapper}>
                <h2 class={css.heading}>Тарифы</h2>
                <p class={css.description}>
                    Сделайте шаг к себе — выберите подписку и получайте
                    поддержку тогда, когда она особенно нужна.
                </p>
                <p class={css.activeUsersNote}>
                    Уже более 1000 пользователей оформили подписку
                </p>
            </div>

            <ul class={css.plans}>
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                    />
                ))}
            </ul>
        </section>
    );
};

export default PlanSection;
