import { footerNavLinks, FooterNavLinkType } from '@/lib/data/footerNavLinks';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './FooterMenu.module.scss';
import { Link } from '@inertiajs/react';

const FooterMenu: FC<NodeProps> = ({ className }) => {
    return (
        <nav class={cn(css.wrapper, className)}>
            <ul class={css.links}>
                {footerNavLinks.map((link) => (
                    <FooterNavLink
                        key={link.id}
                        link={link}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default FooterMenu;

const FooterNavLink: FC<{ link: FooterNavLinkType }> = ({ link }) => {
    return <li>

        <Link prefetch href={link.url} class={css.footerLink}>
            {link.title}
        </Link>
        <p class={css.linkDescription}>{link.description}</p>
    </li>;

};
