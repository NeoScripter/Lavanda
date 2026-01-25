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
import LegalNotice from './partials/LegalNotice';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import ButterflyDkTinyWebp from "@/assets/images/plan/butterfly-dk-tiny.webp";
import ButterflyDkWebp from "@/assets/images/plan/butterfly-dk.webp";
import FlowerDkTinyWebp from "@/assets/images/plan/flower-dk-tiny.webp";
import FlowerDkWebp from "@/assets/images/plan/flower-dk.webp";

const Plans = () => {
    const { plan } = usePage<{ plan: Plan }>().props;
    return (
        <AppLayout
            extendedFooter={true}
            variation="dark"
            className={css.layout}
        >
            <LazyImage
                img={ButterflyDkWebp}
                tinyImg={ButterflyDkTinyWebp}
                prtClass={css.decorPlans1}
            />
            <LazyImage
                img={FlowerDkWebp}
                tinyImg={FlowerDkTinyWebp}
                prtClass={css.decorPlans2}
            />

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

            <LegalNotice />

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
