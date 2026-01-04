import { Tarot } from '@/types/model';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import css from './RandomCards.module.scss';
import CardDeck from '@/components/user/ui/CardDeck/CardDeck';
import Card from '@/components/user/ui/Card';

const RandomCards = () => {
    const { cards } = usePage<{ cards: Tarot[] }>().props;
    const hasStarted = false;

    return (
        <>
            <Transition show={!hasStarted}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p class={css.intro}>
                            Карта открывается сама — как знак, который приходит
                            вовремя. Иногда именно случай отражает то, что мы
                            уже чувствуем, но не осознаём.
                        </p>
                        <button class={cn('primary-btn', css.actionBtn)}>
                            Получить ответ
                        </button>
                    </div>
                </div>
            </Transition>

            <div className={css.rowWrapper}>
                <CardDeck size={cards.length}>
                    {cards.map((card, idx) => (
                        <Card
                            key={card.id}
                            card={card}
                        />
                    ))}
                </CardDeck>
            </div>
        </>
    );
};

export default RandomCards;
