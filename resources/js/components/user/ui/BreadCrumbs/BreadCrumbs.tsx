import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link, usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './BreadCrumbs.module.scss';
import { routeLabels } from './routeLabels';

const BreadCrumbs: FC<NodeProps> = ({ className }) => {
    let { url } = usePage();

    const labels: string[] = ['Главная'];
    const urls: string[] = ['/'];

    if (url.includes('?')) {
        url = url.split('?')[0];
    }

    const parts = url.split('/').filter(Boolean);

    for (const part of parts) {
        if (!(part in routeLabels)) {
            throw new Error("The route labels don't contain the specified url");
        }

        const lastUrl = urls[urls.length - 1];
        const newUrl = `${lastUrl}/${part}`.replace('//', '/');

        urls.push(newUrl);
        labels.push(routeLabels[part]);
    }

    return (
        <nav
            aria-label="навигация"
            class={cn(css.wrapper, className)}
        >
            <ol class={css.menu}>
                {urls.map((url, idx) => {
                    const isCurrent = idx === urls.length - 1;
                    return (
                        <li
                            aria-current={isCurrent ? 'page' : undefined}
                            key={idx}
                        >
                            <Link
                                className={cn(
                                    css.pageLink,
                                    isCurrent ? css.currentPageLink : '',
                                )}
                                href={url}
                            >
                                {labels[idx]}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;
