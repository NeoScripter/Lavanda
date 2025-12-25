import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { ExperienceItem } from '@/types/model';
import { usePage } from '@inertiajs/react';
import css from './CardContent.module.scss';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';

const CardContent = () => {
    const { items } = usePage<{ items: ExperienceItem[] }>().props;
    const { currentSlideId } = useCurrentSlideId();

    const item = items.find((i) => i.id === currentSlideId.value);

    if (item == null) return null;

    return (
        <div class={css.wrapper}>
            <h3 class={css.heading}>{item.heading}</h3>

            {item.image && (
                <LazyImage
                    prtClass={css.foregroundWrapper}
                    imgClass={css.foreground}
                    img={item.image.path}
                    tinyImg={item.image.tiny_path}
                    alt={item.image.alt}
                />
            )}

            <div
                class={css.content}
                dangerouslySetInnerHTML={{ __html: item.html }}
            />
        </div>
    );
};

export default CardContent;
