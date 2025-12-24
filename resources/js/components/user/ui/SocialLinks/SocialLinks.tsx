import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './SocialLinks.module.scss';
import SocialLink from './partials/SocialLink/SocialLink';
import { socialLinks } from './socialLinks';

const SocialLinks: FC<NodeProps> = ({ className }) => {
    return (
        <ul class={cn(css.socialLinks, className)}>
            {socialLinks.map((link) => (
                <SocialLink
                    key={link.id}
                    item={link}
                />
            ))}
        </ul>
    );
};

export default SocialLinks;
