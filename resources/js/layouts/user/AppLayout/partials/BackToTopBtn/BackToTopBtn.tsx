import { useEffect, useState } from 'react';
import css from './BackToTopBtn.module.scss';
import { ArrowUp } from 'lucide-preact';

type BackToTopBtnProps = {
    className?: string;
};

export default function BackToTopBtn({ className }: BackToTopBtnProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldShow = window.scrollY > 600;
            setShow(shouldShow);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    if (!show) return null;

    return (
        <button
            onClick={handleClick}
            className={`${css.backToTopBtn} ${className || ''}`}
        >
            <ArrowUp className={css.icon} />
        </button>
    );
}
