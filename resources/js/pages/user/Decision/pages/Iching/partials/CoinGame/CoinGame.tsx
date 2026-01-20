import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { Iching } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import useCoinGameLogic from '../../hooks/useCoinGameLogic';
import { gameIntro } from '../../pageData';
import GameBlock from '../GameBlock/GameBlock';
import Interpretation from '../Interpretation/Interpretation';
import css from './CoinGame.module.scss';

const CoinGame = () => {
    const { iching } = usePage<{ iching: Iching | null }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const {
        hasStarted,
        isSpinning,
        result,
        coins,
        delays,
        reset,
        startSpinning,
        scrollRef,
    } = useCoinGameLogic(
        interactiveItems,
        prevInteractiveItems,
        isMotionEnabled,
    );

    const hasEnded = iching != null;

    const handleNextMoveClick = () => {
        if (hasEnded) {
            reset();
        } else {
            startSpinning();
        }
    };

    return (
        <>
            <Transition show={!hasStarted && iching == null}>
                <div className={css.drawer}>
                    <div>
                        <h3 className={css.introTitle}>Правила</h3>
                        <div
                            class={css.intro}
                            dangerouslySetInnerHTML={{ __html: gameIntro }}
                        />
                    </div>
                </div>
            </Transition>

            <Transition show={hasEnded}>
                <div className={css.drawer}>
                    <Interpretation />
                </div>
            </Transition>

            {hasEnded && (
                <NextMoveBtn
                    hasEnded={hasEnded}
                    handleClick={handleNextMoveClick}
                    isSpinning={isSpinning}
                />
            )}
            {iching == null && (
                <div
                    className={cn(
                        css.gameField,
                        'full-bleed',
                        hasStarted && !hasEnded && css.gameFieldInProgress,
                    )}
                >
                    <NextMoveBtn
                        hasEnded={hasEnded}
                        handleClick={handleNextMoveClick}
                        isSpinning={isSpinning}
                    />
                    <ul
                        ref={scrollRef}
                        className={css.gameBlocks}
                    >
                        {range(0, 2).map((idx) => (
                            <GameBlock
                                key={idx}
                                isFlipped={!coins[idx]}
                                leftPattern={result[idx]}
                                rightPattern={result[idx + 3]}
                                coinDelay={delays[idx]}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default CoinGame;

const NextMoveBtn: FC<{
    handleClick: () => void;
    isSpinning: boolean;
    hasEnded: boolean;
}> = ({ handleClick, isSpinning, hasEnded }) => {
    return (
        <button
            disabled={isSpinning}
            onClick={handleClick}
            class={cn('primary-btn', css.nextMoveBtn)}
        >
            {hasEnded ? 'Попробовать снова' : 'Бросить монеты'}
        </button>
    );
};
