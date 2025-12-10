import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Narrative.module.scss';

const Narrative: FC<NodeProps<{ heading: string; prgs: string[] }>> = ({
    className,
    children,
    heading,
    prgs,
}) => {
    return (
        <section class={cn(css.wrapper, className)}>
            <h2 class={css.heading}>{heading}</h2>

            <div class={css.prgsParent}>
                {prgs.map((prg, idx) => (
                    <p
                        class={css.paragraph}
                        key={idx}
                    >
                        {prg}
                    </p>
                ))}
            </div>

            {children}
        </section>
    );
};

export default Narrative;
