import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { Plan } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router, usePage } from '@inertiajs/react';
import { Heart } from 'lucide-preact';
import { ComponentChildren } from 'preact';
import { FC } from 'preact/compat';
import css from './PlanCard.module.scss';

const PlanCard: FC<
    NodeProps<{
        plan: Plan;
        isHighlighted?: boolean;
        children?: ComponentChildren;
    }>
> = ({ plan, className, children, isHighlighted = false }) => {
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
        <article
            class={cn(
                css.wrapper,
                isHighlighted && css.wrapperHighlighted,
                className,
            )}
        >
            {isHighlighted && (
                <div className={css.heartIcon}>
                    <Heart fill="white" />
                </div>
            )}
            <header>
                <h3 class={css.title}>{plan.title}</h3>

                <p className={css.overview}>{plan.overview}</p>

                <p class={css.price}>
                    <data value={plan.price}>{plan.price}₽</data>
                </p>
            </header>

            <button
                onClick={handleClick}
                class={cn('primary-btn', css.button)}
            >
                Открыть доступ
            </button>

            <section aria-labelledby={`perks-${plan.id}`}>
                <h5
                    id={`perks-${plan.id}`}
                    class="sr-only"
                >
                    Преимущества тарифа
                </h5>

                <p class={css.perks}>{plan.perks}</p>
            </section>
            {children}
        </article>
    );
};

export default PlanCard;
