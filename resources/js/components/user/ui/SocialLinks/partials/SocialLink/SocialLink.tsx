import { SocialLinkType } from '@/lib/data/footerLinks';
import { NodeProps } from '@/types/nodeProps';
import { FC } from 'preact/compat';
import css from './SocialLink.module.scss';

const SocialLink: FC<NodeProps<{ item: SocialLinkType }>> = ({ item }) => {
    return (
        <li>
            <a
                href={item.href}
                class={css.socialLink}
            >
                <img
                    src={item.icon}
                    alt={item.label}
                />
            </a>
        </li>
    );
};

export default SocialLink;
