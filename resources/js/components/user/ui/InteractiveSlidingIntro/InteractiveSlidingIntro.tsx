import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { FC } from 'preact/compat';
import css from './InteractiveSlidingIntro.module.scss';

const InteractiveSlidingIntro: FC<{
    hasStarted: boolean;
    handleClick: () => void;
    text: string;
}> = ({ hasStarted, handleClick, text }) => {
    return (
        <Transition show={!hasStarted}>
            <div className={css.drawer}>
                <div>
                    <div
                        dangerouslySetInnerHTML={{ __html: text }}
                        class={css.intro}
                    />
                    <button
                        onClick={handleClick}
                        class={cn('primary-btn', css.actionBtn)}
                    >
                        Получить ответ
                    </button>
                </div>
            </div>
        </Transition>
    );
};

export default InteractiveSlidingIntro;
