import { LucideIcon, Mail, Newspaper, ScrollText } from 'lucide-preact';

export type ContactLinkType = {
    id: string;
    href: string;
    icon: LucideIcon;
    label: string;
    text: string;
};

export const contactLinks: ContactLinkType[] = [
    {
        id: crypto.randomUUID(),
        href: 'mailto:info@lavanda.kim',
        icon: Mail,
        label: 'Email',
        text: 'info@lavanda.kim',
    },
    {
        id: crypto.randomUUID(),
        href: '/legal/consent',
        icon: Newspaper,
        label: 'WhatsApp',
        text: 'Пользовательское соглашение',
    },
    {
        id: crypto.randomUUID(),
        href: '/legal/policy',
        icon: ScrollText,
        label: 'WhatsApp',
        text: 'Политика конфинденциальности',
    },
];
