import Star from '@/assets/svgs/star.svg';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { Plan } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router, usePage } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'preact/compat';
import css from './PlanCard.module.scss';

const PlanCard: FC<NodeProps<{ plan: Plan; children?: ComponentChildren }>> = ({
    plan,
    className,
    children,
}) => {
    const { auth } = usePage<{ auth: Auth }>().props;

    const { showLogin } = useAuthModal();

    const handleClick = () => {
        if (!auth?.user) {
            showLogin();
        } else {
            router.visit(route('plan', plan.id));
        }
    };

    return (
        <article class={cn(css.wrapper, className)}>
            <header>
                <h3 class={css.title}>{plan.title}</h3>

                <p class={css.duration}>
                    <span>Доступ на </span>
                    <time dateTime={`P${plan.durationInDays}D`}>
                        {plan.humanDuration}
                    </time>
                </p>

                <p class={css.price}>
                    <data value={plan.price}>{plan.price}₽</data>
                </p>
            </header>

            <button
                onClick={handleClick}
                class={cn('primary-btn', css.button)}
            >
                Оформить подписку
            </button>

            <section aria-labelledby={`perks-${plan.id}`}>
                <h5
                    id={`perks-${plan.id}`}
                    class="sr-only"
                >
                    Преимущества тарифа
                </h5>

                <ul class={css.perks}>
                    {plan.perks.map((perk) => (
                        <li
                            key={perk}
                            class={css.perk}
                        >
                            <span
                                class={css.icon}
                                aria-hidden="true"
                            >
                                <img
                                    src={Star}
                                    alt=""
                                />
                            </span>
                            <span>{perk}</span>
                        </li>
                    ))}
                </ul>
            </section>
            {children}
        </article>
    );
};

export default PlanCard;
