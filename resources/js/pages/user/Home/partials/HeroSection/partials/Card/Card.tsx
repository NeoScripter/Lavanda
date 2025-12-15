import { HeroCard } from '@/lib/data/heroCards';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Card.module.scss';

const Card: FC<NodeProps<{ card: HeroCard }>> = ({ className, card }) => {
    return (
        <li class={cn(css.wrapper, className)}>
            <blockquote
                class={css.content}
                dangerouslySetInnerHTML={{ __html: card.content }}
            />
            <footer class={css.authorData}>
                <figure class={css.avatar}>
                    <img
                        src={card.img}
                        alt="Аватар женщины"
                    />
                </figure>
                <cite>
                    <span>{card.author}</span>
                    <br />
                    <span>{card.job}</span>
                </cite>
            </footer>
        </li>
    );
};

export default Card;
