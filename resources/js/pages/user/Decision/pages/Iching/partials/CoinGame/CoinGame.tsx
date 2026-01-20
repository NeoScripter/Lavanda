import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';
import { Transition } from '@headlessui/react';
import useCoinGameLogic from '../../hooks/useCoinGameLogic';
import { gameIntro } from '../../pageData';
import GameBlock from '../GameBlock/GameBlock';
import css from './CoinGame.module.scss';

const ANIMATION_DURATION = 400;

const CoinGame = () => {
    // const { cards } = usePage<{ cards: Metaphoric[] }>().props;

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

    const hasEnded = result.every((res) => res !== -1);

    const handleNextMoveClick = () => {
        if (hasEnded) {
            reset();
        } else {
            startSpinning();
        }
    };

    return (
        <>
            <Transition show={!hasStarted}>
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

            <div
                className={cn(
                    css.gameField,
                    'full-bleed',
                    hasStarted && !hasEnded && css.gameFieldInProgress,
                )}
            >
                <button
                    disabled={isSpinning}
                    onClick={handleNextMoveClick}
                    class={cn('primary-btn', css.nextMoveBtn)}
                >
                    {hasEnded ? 'Попробовать снова' : 'Бросить монеты'}
                </button>
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
        </>
    );
};

export default CoinGame;
