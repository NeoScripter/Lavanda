import { NodeProps } from '@/types/nodeProps';
import { FC } from 'preact/compat';
import { SocialLinkType } from '../../socialLinks';
import css from './SocialLink.module.scss';

const SocialLink: FC<NodeProps<{ item: SocialLinkType; bgColor?: string }>> = ({
    item,
    bgColor,
}) => {
    return (
        <li>
            <a
                href={item.href}
                class={css.socialLink}
                style={bgColor && { '--bg-color': bgColor }}
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
