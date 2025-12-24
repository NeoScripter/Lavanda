import StoneTiny from '@/assets/images/home/hero-decor-tiny.webp';
import Stone from '@/assets/images/home/hero-decor.webp';
import CrystalTiny from '@/assets/images/home/plans-decor-1-tiny.webp';
import Crystal from '@/assets/images/home/plans-decor-1.webp';
import ButterflyTiny from '@/assets/images/home/plans-decor-2-tiny.webp';
import Butterfly from '@/assets/images/home/plans-decor-2.webp';
import PlanPicker from '@/components/user/sections/PlanPicker/PlanPicker';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import css from './PlanSection.module.scss';

const PlanSection = () => {
    return (
        <PlanPicker>
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
        </PlanPicker>
    );
};

export default PlanSection;
