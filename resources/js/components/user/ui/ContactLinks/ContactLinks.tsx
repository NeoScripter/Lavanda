import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import { contactLinks } from './contactLinks';
import css from './ContactLinks.module.scss';
import ContactLink from './partials/ContactLink/ContactLink';

const ContactLinks: FC<NodeProps> = ({ className }) => {
    return (
        <ul class={cn(css.contacts, className)}>
            {contactLinks.map((link) => (
                <ContactLink
                    key={link.id}
                    item={link}
                />
            ))}
        </ul>
    );
};

export default ContactLinks;
