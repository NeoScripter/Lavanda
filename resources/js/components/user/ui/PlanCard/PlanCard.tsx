import Star from '@/assets/svgs/star.svg';
import { Plan } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './PlanCard.module.scss';

const PlanCard: FC<NodeProps<{ plan: Plan }>> = ({ plan, className }) => {
    return (
        <article class={cn(css.wrapper, className)}>
            <header>
                <h3 class={css.title}>{plan.title}</h3>

                <p class={css.duration}>
                    <span>Доступ на </span>
                    <time dateTime={`P${plan.durationInDays}D`}>
                        {plan.human_duration}
                    </time>
                </p>

                <p class={css.price}>
                    <data value={plan.price}>{plan.price}₽</data>
                </p>
            </header>

            <button class={cn('primary-btn', css.button)}>
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
        </article>
    );
};

export default PlanCard;
