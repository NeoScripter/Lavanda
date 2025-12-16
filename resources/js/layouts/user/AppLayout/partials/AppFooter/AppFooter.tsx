import Logo from '@/components/user/ui/Logo/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';
import { contactLinks, socialLinks } from '@/lib/data/footerLinks';
import { cn } from '@/utils/cn';
import { FC } from 'react-dom/src';
import css from './AppFooter.module.scss';
import ContactLink from './partials/ContactLink/ContactLink';
import FooterMenu from './partials/FooterMenu/FooterMenu';
import SocialLink from './partials/SocialLink/SocialLink';

const AppFooter: FC<{ hasMenu?: boolean }> = ({ hasMenu = true }) => {
    const isDesktop = useMediaQuery('(min-width: 1110px)');

    return (
        <footer
            class={cn(css.footer, 'full-bleed', hasMenu && css.footerWithMenu)}
        >
            {hasMenu && <FooterMenu />}

            <div class={css.logoWrapper}>
                <Logo
                    variation="white"
                    className={css.logo}
                    isLink={false}
                />

                {!isDesktop && <Links />}

                <p class={css.copyright}>
                    Lavanda.Space 2025 © Все права защищены
                </p>
            </div>
            {isDesktop && <Links />}
        </footer>
    );
};

export default AppFooter;

export const Links = () => (
    <nav class={css.linkWrapper}>
        <ul class={css.socialLinks}>
            {socialLinks.map((link) => (
                <SocialLink
                    key={link.id}
                    item={link}
                />
            ))}
        </ul>

        <ul class={css.contacts}>
            {contactLinks.map((link) => (
                <ContactLink
                    key={link.id}
                    item={link}
                />
            ))}
        </ul>
    </nav>
);
