import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-preact';
import { FC } from 'preact/compat';
import LazyImage from '../LazyImage/LazyImage';
import css from './Notification.module.scss';

type ImageType = {
    src: string;
    tinySrc: string;
};

type BtnGroupType = {
    leftBtn: BtnType;
    rightBtn: BtnType;
};

type BtnType = {
    href: string;
    label: string;
};

const Notification: FC<
    NodeProps<{ image?: ImageType; buttons?: BtnGroupType }>
> = ({ className, children, buttons, image }) => {

    return (
        <div
            id="notification"
            className={cn(css.wrapper, className)}
        >
            {image && (
                <LazyImage
                    prtClass={css.imageFrame}
                    img={image.src}
                    tinyImg={image.tinySrc}
                />
            )}
            <div className={css.content}>{children}</div>

            {buttons && (
                <div className={css.btnWrapper}>
                    <Link
                        href={buttons.leftBtn.href}
                        className={cn('secondary-btn', css.signupBtn)}
                    >
                        {buttons.leftBtn.label}
                    </Link>
                    <Link
                        href={buttons.rightBtn.href}
                        className={cn('primary-btn', css.actionBtn)}
                    >
                        {buttons.rightBtn.label}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Notification;
