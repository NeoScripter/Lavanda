import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { PracticeItem } from '@/types/model';
import { usePage } from '@inertiajs/react';
import css from './CardContent.module.scss';
import Accordion from './partials/Accordion';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';

const CardContent = () => {
    const { items } = usePage<{ items: PracticeItem[] }>().props;
    const { currentSlideId } = useCurrentSlideId();

    const item = items.find((i) => i.id === currentSlideId.value);

    if (item == null) return null;

    return (
        <div class={css.wrapper}>
            {item.image && (
                <LazyImage
                    prtClass={css.foregroundWrapper}
                    imgClass={css.foreground}
                    img={item.image.path}
                    tinyImg={item.image.tiny_path}
                    alt={item.image.alt}
                />
            )}

            <div class={css.contentWrapper}>
                <h3 class={css.heading}>{item.heading}</h3>

                <p class={css.cardDescription}>{item.body}</p>

                {item.faqs && <Accordion items={item.faqs} />}
            </div>
        </div>
    );
};

export default CardContent;
