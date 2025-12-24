import Email from '@/assets/svgs/email.svg';
import Whatsapp from '@/assets/svgs/whatsapp.svg';

export type ContactLinkType = {
    id: string;
    href: string;
    icon: string;
    label: string;
    text: string;
};

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
