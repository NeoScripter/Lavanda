import PlanCard from '@/components/user/ui/PlanCard/PlanCard';
import { Plan } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './PlanPicker.module.scss';

const PlanPicker: FC<NodeProps> = ({ children, className }) => {
    const { plans } = usePage<{ plans: Plan[] }>().props;

    return (
        <section class={cn(css.wrapper, className)}>
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

            {children}
        </section>
    );
};

export default PlanPicker;
