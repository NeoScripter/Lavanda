import { FC } from 'preact/compat';
import { ContactLinkType } from '../../contactLinks';
import css from './ContactLink.module.scss';

const ContactLink: FC<{ item: ContactLinkType }> = ({ item }) => {
    const Icon = item.icon;

    return (
        <li>
            <a
                href={item.href}
                class={css.contactLink}
                target="_blank"
            >
                <Icon />
                {item.text}
            </a>
        </li>
    );
};

export default ContactLink;
