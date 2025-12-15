import { cn } from '@/utils/cn';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { X } from 'lucide-preact';
import css from './DialogLayout.module.scss';

type DialogLayoutProps = {
    children: React.ReactNode;
    show: boolean;
    onClose: () => void;
    className?: string;
    showBtn?: boolean;
};

export default function DialogLayout({
    show,
    children,
    onClose,
    className,
    showBtn = true,
}: DialogLayoutProps) {
    return (
        <Dialog
            open={show}
            onClose={onClose}
            className={cn(css.wrapper, className)}
        >
            <DialogBackdrop
                transition
                className={css.backdrop}
            />
            <DialogPanel
                transition
                className={css.panel}
            >
                {showBtn && (
                    <button
                        onClick={onClose}
                        className={css.closeBtn}
                    >
                        <X stroke-width={2.5} className={css.closeIcon} />
                    </button>
                )}
                {children}
            </DialogPanel>
        </Dialog>
    );
}
