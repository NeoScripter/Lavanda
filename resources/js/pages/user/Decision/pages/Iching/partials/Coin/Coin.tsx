import CoinBackTiny from '@/assets/images/decision/iching/coin-back-dk-tiny.webp';
import CoinBack from '@/assets/images/decision/iching/coin-back-dk.webp';
import CoinFrontTiny from '@/assets/images/decision/iching/coin-front-dk-tiny.webp';
import CoinFront from '@/assets/images/decision/iching/coin-front-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Coin.module.scss';

type ImageType = 'front' | 'back';

const Coin: FC<
    NodeProps<{
        isFlipped?: boolean;
    }>
> = ({ className, isFlipped = false }) => {
    return (
        <li className={cn(css.wrapper, className)}>
            <CoinImage
                type="back"
                path={CoinBack}
                tinyPath={CoinBackTiny}
                alt="Задняя сторона монеты"
                isFlipped={isFlipped}
            />
            <CoinImage
                isFlipped={isFlipped}
                type="front"
                path={CoinFront}
                tinyPath={CoinFrontTiny}
                alt="Передняя сторона монеты"
                className={css.imageFrameFloating}
            />
        </li>
    );
};

export default Coin;

const CoinImage: FC<{
    type: ImageType;
    path: string;
    tinyPath: string;
    alt: string;
    className?: string;
    isFlipped: boolean;
}> = ({ type, path, tinyPath, alt, isFlipped, className }) => {
    return (
        <LazyImage
            prtClass={cn(
                css.imageFrame,
                {
                    [css.frontImageFrame]: type === 'front',
                    [css.backImageFrame]: type === 'back',
                    [css.frontImageFrameFlipped]: type === 'front' && isFlipped,
                    [css.backImageFrameFlipped]: type === 'back' && isFlipped,
                },
                className,
            )}
            img={path}
            tinyImg={tinyPath}
            alt={alt}
        />
    );
};
