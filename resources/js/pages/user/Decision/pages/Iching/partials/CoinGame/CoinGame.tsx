import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { gameIntro } from '../../pageData';
import css from './CoinGame.module.scss';
import GameBlock from '../GameBlock/GameBlock';

const ANIMATION_DURATION = 400;

const CoinGame = () => {
    // const { cards } = usePage<{ cards: Metaphoric[] }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    return (
        <>
            <Transition show={true}>
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

            <div className={cn(css.gameField, 'full-bleed')}>
                <button class={cn('primary-btn', css.nextMoveBtn)}>
                    Бросить монеты
                </button>
                <ul className={css.gameBlocks}>
                    <GameBlock />
                    <GameBlock />
                    <GameBlock />
                </ul>
            </div>
        </>
    );
};

export default CoinGame;
