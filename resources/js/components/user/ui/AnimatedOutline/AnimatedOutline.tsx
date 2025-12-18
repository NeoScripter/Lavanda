import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './AnimatedOutline.module.scss';

const AnimatedOutline: FC<NodeProps> = ({ className, children }) => {
    return (
        <span class={cn(css.wrapper, className)}>
            {' '}
            <span class={css.svgWrapper}>
                <svg
                    width="304"
                    height="102"
                    viewBox="0 0 304 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <path
                            id="path-template"
                            pathLength="100"
                            d="M54.5258 26.6493 C137.219 -7.52242 307.375 19.2348 301.768 58.9426 C296.558 95.8364 129.461 116.288 35.6483 83.3516 C-46.7721 54.4151 36.9856 -6.07122 124.326 2.77335"
                            stroke-width="3"
                        />
                    </defs>
                    <use
                        href="#path-template"
                        class={css.background}
                    />
                    <use
                        href="#path-template"
                        class={css.foreground}
                    />
                </svg>
            </span>
            {children}
        </span>
    );
};

export default AnimatedOutline;
