import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import PlanCard from '@/components/user/ui/PlanCard/PlanCard';
import { Plan } from '@/types/model';
import { usePage } from '@inertiajs/react';
import css from './PlanSection.module.scss';
import Crystal from '@/assets/images/home/plans-decor-1.webp';
import CrystalTiny from '@/assets/images/home/plans-decor-1-tiny.webp';
import Butterfly from '@/assets/images/home/plans-decor-2.webp';
import ButterflyTiny from '@/assets/images/home/plans-decor-2-tiny.webp';
import Stone from '@/assets/images/home/hero-decor.webp';
import StoneTiny from '@/assets/images/home/hero-decor-tiny.webp';


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

            <LazyImage
                img={Butterfly}
                tinyImg={ButterflyTiny}
                prtClass={css.decorPlans1}
            />
            <LazyImage
                img={Crystal}
                tinyImg={CrystalTiny}
                prtClass={css.decorPlans2}
            />
            <LazyImage
                img={Stone}
                tinyImg={StoneTiny}
                prtClass={css.decorPlans3}
            />
        </section>
    );
};

export default PlanSection;
