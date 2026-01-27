import { router } from '@inertiajs/react';
import { useEffect, useReducer, useRef } from 'preact/hooks';
import convertArrayToBinary from '../utils/convertArrayToBinary';

const INITIAL_DELAY = 40;

type CoinGameState = {
    hasStarted: boolean;
    isSpinning: boolean;
    delays: number[];
    coins: boolean[];
    result: number[];
};

type CoinGameAction =
    | { type: 'FLIP_COIN'; payload: { newDelay: number; idx: number } }
    | { type: 'SET_RESULT'; payload: number }
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | {
          type: 'RESET';
      };

function coinGameReducer(
    state: CoinGameState,
    action: CoinGameAction,
): CoinGameState {
    switch (action.type) {
        case 'START_SPINNING':
            return {
                ...state,
                isSpinning: true,
                hasStarted: true,
            };
        case 'STOP_SPINNING':
            return {
                ...state,
                isSpinning: false,
            };
        case 'FLIP_COIN':
            const newDelays = [...state.delays];
            newDelays[action.payload.idx] = action.payload.newDelay;

            const newCoins = [...state.coins];
            newCoins[action.payload.idx] = !newCoins[action.payload.idx];
            return {
                ...state,
                coins: newCoins,
                delays: newDelays,
            };

        case 'SET_RESULT':
            const newResult = [...state.result];
            const lastUnmarked = newResult.findIndex((num) => num === -1);

            if (lastUnmarked === -1) {
                return state;
            }
            newResult[lastUnmarked] = action.payload;

            return {
                ...state,
                result: newResult,
            };
        case 'RESET':
            return {
                hasStarted: false,
                isSpinning: false,
                result: [-1, -1, -1, -1, -1, -1],
                coins: [false, false, false],
                delays: [INITIAL_DELAY, INITIAL_DELAY, INITIAL_DELAY],
            };
        default:
            return state;
    }
}

export function useCoinGameLogic(
    interactiveItems: any,
    prevInteractiveItems: any,
    isMotionEnabled: boolean,
) {
    const [state, dispatch] = useReducer(coinGameReducer, {
        hasStarted: false,
        isSpinning: false,
        result: [-1, -1, -1, -1, -1, -1],
        coins: [false, false, false],
        delays: [INITIAL_DELAY, INITIAL_DELAY, INITIAL_DELAY],
    });

    const intervalRef = useRef<number | undefined>(undefined);
    const scrollContainerRef = useRef<HTMLUListElement>(null);

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });

        setTimeout(() => {
            scrollContainerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 500);

        if (isMotionEnabled) {
            let stoppedCount = 0;
            // Track final states locally to avoid state staleness
            const finalCoinStates = [false, false, false];

            const flipCoin = (coinIdx: number, currentDelay: number) => {
                // Toggle local state
                finalCoinStates[coinIdx] = !finalCoinStates[coinIdx];

                // Dispatch flip action
                dispatch({
                    type: 'FLIP_COIN',
                    payload: {
                        idx: coinIdx,
                        newDelay: currentDelay,
                    },
                });

                // Check if we should continue flipping
                if (currentDelay < 120) {
                    // Increase delay by random amount between 200-350ms
                    const increase = Math.floor(Math.random() * 5) + 2;
                    const nextDelay = currentDelay + increase;

                    // Schedule next flip at current delay interval
                    setTimeout(() => {
                        flipCoin(coinIdx, nextDelay);
                    }, currentDelay);
                } else {
                    // This coin has stopped
                    stoppedCount++;

                    // If all coins stopped, set results and trigger end
                    if (stoppedCount === 3) {
                        setTimeout(() => {
                            document.dispatchEvent(new Event('spinningEnd'));
                        }, 500);
                    }
                }
            };

            // Start all three coins flipping simultaneously
            [0, 1, 2].forEach((idx) => {
                flipCoin(idx, INITIAL_DELAY);
            });
        } else {
            // Reduced motion: flip each coin 1-2 times immediately
            const finalCoinStates = [false, false, false];

            [0, 1, 2].forEach((idx) => {
                const flips = Math.floor(Math.random() * 2) + 1; // Random 1 or 2 flips

                for (let i = 0; i < flips; i++) {
                    finalCoinStates[idx] = !finalCoinStates[idx];
                    dispatch({
                        type: 'FLIP_COIN',
                        payload: {
                            idx: idx,
                            newDelay: INITIAL_DELAY,
                        },
                    });
                }
            });

            setTimeout(() => {
                document.dispatchEvent(new Event('spinningEnd'));
            }, 200);
        }
    };

    const reset = () => {
        clearTimeout(intervalRef.current);
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];

        router.visit(route('decision.iching'), {
            only: ['iching'],
            data: {},
            preserveScroll: true,
            preserveState: true,
        });
        dispatch({
            type: 'RESET',
        });
    };

    useEffect(() => {
        const handleSpinEnd = () => {
            clearInterval(intervalRef.current);
            dispatch({ type: 'STOP_SPINNING' });

            const tails = state.coins.reduce(
                (acc, coin) => Number(coin) + acc,
                0,
            );
            const res = tails > 1 ? 0 : 1;

            dispatch({ type: 'SET_RESULT', payload: res });

            const reachedEnd =
                state.result.findIndex((side) => side === -1) === 5;

            if (reachedEnd) {
                scrollContainerRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });

                const result = [...state.result];
                result[5] = res;
                const bitmask = convertArrayToBinary(result);

                router.visit(route('decision.iching'), {
                    only: ['iching'],
                    data: {
                        bitmask: bitmask,
                    },
                    preserveScroll: true,
                    preserveState: true,
                });
            }
        };

        document.addEventListener('spinningEnd', handleSpinEnd);
        return () => document.removeEventListener('spinningEnd', handleSpinEnd);
    }, [state.coins.join(','), state.result.join(',')]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
        };
    }, []);

    return {
        ...state,
        reset,
        startSpinning,
        scrollRef: scrollContainerRef,
    };
}

export default useCoinGameLogic;
