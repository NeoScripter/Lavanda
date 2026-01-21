import { Affirmation } from '@/types/model';
import { usePage } from '@inertiajs/react';
import AffirmationCarousel from './partials/AffirmationCarousel';
import AffirmationCategory from './partials/AffirmationCategory';

const Affimations = () => {
    const { affirmations } = usePage<{ affirmations: Affirmation[] | null }>()
        .props;

    return affirmations ? (
        <AffirmationCarousel key="carousel" />
    ) : (
        <AffirmationCategory key="category" />
    );
};

export default Affimations;
