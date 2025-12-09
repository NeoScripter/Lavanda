import { ContactLinkType } from '@/lib/data/footerLinks';
import { FC } from 'preact/compat';
import css from './ContactLink.module.scss';

const ContactLink: FC<{ item: ContactLinkType }> = ({ item }) => {
    return (
        <li>
            <a
                href={item.href}
                class={css.contactLink}
                target="_blank"
            >
                <img
                    src={item.icon}
                    alt={item.label}
                />
                {item.text}
            </a>
        </li>
    );
};

export default ContactLink;
