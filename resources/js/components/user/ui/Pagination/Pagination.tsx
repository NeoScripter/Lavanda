import { PaginationLink, PaginationMeta } from '@/types/pagination';
import { Link } from '@inertiajs/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-preact';
import css from './Pagination.module.scss';

type PaginationProps = {
    meta: Omit<PaginationMeta<unknown>, 'data'>;
    className?: string;
    shouldScroll?: boolean;
    scrollElementId?: string;
};

export default function Pagination({
    meta,
    className,
    shouldScroll = true,
    scrollElementId,
}: PaginationProps) {
    const links = meta.links;

    const isFirstLink = (index: number) => index === 0;
    const isLastLink = (index: number) => index === links.length - 1;

    const renderLinkContent = (link: PaginationLink, index: number) => {
        if (isFirstLink(index)) {
            return <ChevronLeftIcon className={css.chevronIcon} />;
        }
        if (isLastLink(index)) {
            return <ChevronRightIcon className={css.chevronIcon} />;
        }
        return link.label;
    };

    const isNavigationButton = (index: number) =>
        isFirstLink(index) || isLastLink(index);

    return (
        <div className={`${css.wrapper} ${className || ''}`}>
            <nav aria-label="Pagination">
                <ol className={css.nav}>
                    {links.map((link, index) => (
                        <PaginationBtn
                            key={index}
                            link={link}
                            isNavigationButton={isNavigationButton(index)}
                            shouldScroll={shouldScroll}
                            scrollElementId={scrollElementId}
                        >
                            {renderLinkContent(link, index)}
                        </PaginationBtn>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

type PaginationBtnProps = {
    link: PaginationLink;
    isNavigationButton: boolean;
    children: React.ReactNode;
    shouldScroll: boolean;
    scrollElementId?: string;
};

function PaginationBtn({
    link,
    isNavigationButton,
    children,
    shouldScroll,
    scrollElementId,
}: PaginationBtnProps) {
    const getButtonClasses = () => {
        const classes = [css.paginationBtn];

        if (link.active) {
            classes.push(css.active);
        } else if (link.url) {
            classes.push(css.inactive);
        }

        if (isNavigationButton) {
            classes.push(css.navigationBtn);
        }

        if (!link.url) {
            classes.push(css.disabled);
        }

        return classes.join(' ');
    };

    // Disabled link
    if (!link.url) {
        return <span className={getButtonClasses()}>{children}</span>;
    }

    // Active link with HTML content (for "..." etc.)
    const shouldUseDangerousHtml =
        !isNavigationButton &&
        typeof children === 'string' &&
        children.includes('&');

    return (
        <li class={css.listItem}>
            <Link
                href={link.url}
                className={getButtonClasses()}
                preserveState
                onSuccess={() => {
                    if (!scrollElementId) return;
                    const el = document.getElementById(scrollElementId);
                    if (!el) return;

                    el.scrollIntoView({
                        behavior: 'instant',
                        block: 'end',
                    });
                }}
                {...(shouldScroll === false ? { preserveScroll: true } : {})}
                {...(shouldUseDangerousHtml && {
                    dangerouslySetInnerHTML: { __html: children as string },
                })}
            >
                {!shouldUseDangerousHtml && children}
            </Link>
        </li>
    );
}
