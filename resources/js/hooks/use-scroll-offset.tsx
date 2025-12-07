import { useEffect, useState } from 'preact/compat';

export default function useScrollOffset(offset = 600) {
    const [isBelow, setIsBelow] = useState(window.scrollY > offset);

    useEffect(() => {
        const handleScroll = () => {
            setIsBelow(window.scrollY > offset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isBelow };
}
