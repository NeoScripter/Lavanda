import Email from '@/assets/svgs/email.svg';
import Facebook from '@/assets/svgs/facebook.svg';
import Insta from '@/assets/svgs/instagram.svg';
import Telegram from '@/assets/svgs/telegram.svg';
import Whatsapp from '@/assets/svgs/whatsapp.svg';

export type SocialLinkType = {
    id: string;
    href: string;
    icon: string;
    label: string;
};

export type ContactLinkType = {
    id: string;
    href: string;
    icon: string;
    label: string;
    text: string;
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

export const contactLinks: ContactLinkType[] = [
    {
        id: crypto.randomUUID(),
        href: '/',
        icon: Whatsapp,
        label: 'WhatsApp',
        text: '+7 9876543210',
    },
    {
        id: crypto.randomUUID(),
        href: '/',
        icon: Email,
        label: 'Email',
        text: 'example@email.com',
    },
];
