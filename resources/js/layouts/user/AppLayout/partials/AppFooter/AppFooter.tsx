import ContactLinks from '@/components/user/ui/ContactLinks/ContactLinks';
import Logo from '@/components/user/ui/Logo/Logo';
import SocialLinks from '@/components/user/ui/SocialLinks/SocialLinks';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { FC } from 'react-dom/src';
import css from './AppFooter.module.scss';
import FooterMenu from './partials/FooterMenu/FooterMenu';

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
                    Lavanda.Kim 2025 © Все права защищены
                </p>
            </div>
            {isDesktop && <Links />}
        </footer>
    );
};

export default AppFooter;

export const Links = () => (
    <nav class={css.linkWrapper}>
        <SocialLinks className={css.socialLinks} />

        <ContactLinks className={css.contacts} />
    </nav>
);
