import useThrottle from '@/hooks/use-throttle';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useEffect, useMemo, useReducer } from 'preact/hooks';

// Types
type CarouselGeometryState = {
    elementSize: number;
};

type CarouselGeometryAction = {
    type: 'SET_ELEMENT_SIZE';
    payload: number;
};

type CarouselConfig = {
    baseSize: number;
    refWidth: number;
    itemGap: number;
};

function carouselGeometryReducer(
    state: CarouselGeometryState,
    action: CarouselGeometryAction,
): CarouselGeometryState {
    switch (action.type) {
        case 'SET_ELEMENT_SIZE':
            return { ...state, elementSize: action.payload };
        default:
            return state;
    }
}

export function useCarouselGeometry(
    carouselRef: React.RefObject<HTMLDivElement>,
    cellCount: number,
    selectedIndex: number,
) {
    const [state, dispatch] = useReducer(carouselGeometryReducer, {
        elementSize: 107,
    });

    const isTablet = useMediaQuery('(min-width: 550px)');
    const isLaptop = useMediaQuery('(min-width: 1110px)');
    const isDesktop = useMediaQuery('(min-width: 1650px)');

    const config: CarouselConfig = useMemo(() => {
        if (isDesktop) return { baseSize: 145, refWidth: 825, itemGap: 1.55 };
        if (isLaptop) return { baseSize: 107, refWidth: 652, itemGap: 1.5 };
        if (isTablet) return { baseSize: 107, refWidth: 713, itemGap: 1.3 };
        return { baseSize: 50, refWidth: 334, itemGap: 1.35 };
    }, [isDesktop, isLaptop, isTablet]);

    const calculateSize = () => {
        if (carouselRef.current == null) return;
        const actualWidth = carouselRef.current.offsetWidth;
        const scaledSize = (actualWidth / config.refWidth) * config.baseSize;
        dispatch({ type: 'SET_ELEMENT_SIZE', payload: scaledSize });
    };

    const throttledCalculatedSize = useThrottle(calculateSize, 75);

    useEffect(() => {
        calculateSize();
        window.addEventListener('resize', throttledCalculatedSize);
        return () =>
            window.removeEventListener('resize', throttledCalculatedSize);
    }, [config]);

    const theta = 360 / cellCount;
    const radius = Math.round(
        state.elementSize / config.itemGap / Math.tan(Math.PI / cellCount),
    );

    const getCarouselStyle = () => {
        const angle = theta * selectedIndex * -1;
        return {
            transform: `translateZ(${-radius}px) rotateY(${angle}deg)`,
        };
    };

    const getCellStyle = (index: number) => {
        if (index >= cellCount) {
            return {
                transform: 'none',
                opacity: 0,
            };
        }
        const cellAngle = theta * index;
        return {
            width: `${state.elementSize}px`,
            transform: `rotateY(${cellAngle}deg) translateZ(${radius}px)`,
            opacity: 1,
        };
    };

    const isCellActive = (index: number) => ({
        isCurrentSlide: selectedIndex % cellCount === index,
        isSecondSlide:
            (selectedIndex + 1) % cellCount === index ||
            (selectedIndex - 1 + cellCount) % cellCount === index,
    });

    return {
        elementSize: state.elementSize,
        getCarouselStyle,
        getCellStyle,
        isCellActive,
    };
}
