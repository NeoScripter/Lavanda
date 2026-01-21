import HeartDkTinyWebp from '@/assets/images/support/heart-dk-tiny.webp';
import HeartDkWebp from '@/assets/images/support/heart-dk.webp';
import SplitLayout from '@/layouts/user/SplitLayout';
import CarouselFrame, {
    CarouselImage,
} from '@/layouts/user/SplitLayout/partials/CarouselFrame';
import { useCarouselLogic } from '@/layouts/user/SplitLayout/partials/CarouselFrame/useCarouselLogic';
import { Audio } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './Audios.module.scss';
import { audioBg, intro } from './pageData';
import AudioPlayer from './partials/AudioPlayer/AudioPlayer';

const itemImage: CarouselImage = {
    path: HeartDkWebp,
    tiny_path: HeartDkTinyWebp,
    alt: 'Пурпурное сердце, собранное из осколков стекла',
};

const ANIMATION_DURATION = 750;

const Audios = () => {
    const { audios } = usePage<{ audios: Audio[] }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;

    const { selectedIndex, startSpinning, isSpinning } = useCarouselLogic(
        audios.length,
        adjustedAnimationDuration,
        isMotionEnabled,
    );

    const currentAudio = audios[selectedIndex % audios.length];

    return (
        <SplitLayout
            bgImage={audioBg}
            leftClassName={css.leftLayout}
            left={{
                heading: 'Послание поддержки от автора',
                intro: intro,
                btns: (
                    <button
                        onClick={startSpinning}
                        disabled={isSpinning}
                        class={cn('primary-btn', css.repeatBtn)}
                    >
                        Другая запись
                    </button>
                ),
            }}
            rightClassName={css.rightLayout}
            right={
                <div>
                    <h2
                        className={cn(
                            css.songQuote,
                            isSpinning && css.songQuoteClosed,
                        )}
                    >
                        {currentAudio?.intro}
                    </h2>

                    <CarouselFrame
                        img={itemImage}
                        numItems={audios.length}
                        selectedIndex={selectedIndex}
                        animationDuration={adjustedAnimationDuration}
                    />

                    {currentAudio?.path && !isSpinning && (
                        <AudioPlayer
                            className={css.player}
                            audio={currentAudio}
                        />
                    )}
                </div>
            }
        />
    );
};

export default Audios;
