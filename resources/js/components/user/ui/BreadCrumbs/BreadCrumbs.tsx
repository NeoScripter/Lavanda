import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link, usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './BreadCrumbs.module.scss';

const BreadCrumbs: FC<NodeProps<{ linkLabels?: string[] }>> = ({
    linkLabels = [],
    className,
}) => {
    const { url } = usePage();

    const labels = ['Главная', ...linkLabels];
    const urls = ['/'];

    for (const part of url.split('/').filter((p) => p !== '')) {
        let newUrl = urls.at(-1) + '/' + part;
        newUrl = newUrl.replace('//', '/');
        urls.push(newUrl);
    }

    console.log(urls);

    return (
        <nav
            aria-label="навигация"
            class={cn(css.wrapper, className)}
        >
            <ol class={css.menu}>
                {urls.map((url, idx) => (
                    <li key={idx}>
                        <Link href={url}>
                            {labels[idx]}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;
