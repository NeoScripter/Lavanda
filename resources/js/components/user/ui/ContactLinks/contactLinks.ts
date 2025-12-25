import { ComponentType } from 'preact';
import Whatsapp from '../../svgs/Whatsapp';
import Email from '../../svgs/Email';

export type ContactLinkType = {
    id: string;
    href: string;
    icon: ComponentType<{ class?: string }>;
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
