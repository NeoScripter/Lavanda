import Facebook from '@/assets/svgs/facebook.svg';
import Insta from '@/assets/svgs/instagram.svg';
import Telegram from '@/assets/svgs/telegram.svg';

export type SocialLinkType = {
    id: string;
    href: string;
    icon: string;
    label: string;
};

export const socialLinks: SocialLinkType[] = [
    {
        id: crypto.randomUUID(),
        href: '/',
        icon: Facebook,
        label: 'Facebook',
    },
    {
        id: crypto.randomUUID(),
        href: '/',
        icon: Insta,
        label: 'Instagram',
    },
    {
        id: crypto.randomUUID(),
        href: '/',
        icon: Telegram,
        label: 'Telegram',
    },
];
