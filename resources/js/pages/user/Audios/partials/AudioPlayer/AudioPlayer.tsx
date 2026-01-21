import PlayBtn from '@/assets/svgs/play.svg';
import PauseBtn from '@/assets/svgs/pаuse.svg';
import { cn } from '@/lib/utils';
import type { Audio } from '@/types/model';
import { useEffect, useRef, useState } from 'react';
import css from './AudioPlayer.module.scss';
import { convertSecondsToTime } from './convertSecondsToTime';

type AudioPlayerProps = {
    className?: string;
    audio: Audio;
};

export default function AudioPlayer({ className, audio }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (!audioElement) return;

        const updateTime = () => setProgress(audioElement.currentTime);
        const setMeta = () => setDuration(audioElement.duration);

        audioElement.addEventListener('timeupdate', updateTime);
        audioElement.addEventListener('loadedmetadata', setMeta);

        return () => {
            audioElement.removeEventListener('timeupdate', updateTime);
            audioElement.removeEventListener('loadedmetadata', setMeta);
        };
    }, []);

    const handlePlay = () => {
        const audioElement = audioRef.current;
        if (!audioElement) return;
        audioElement.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        const audioElement = audioRef.current;
        if (!audioElement) return;
        audioElement.pause();
        setIsPlaying(false);
    };

    const handleSeek = (value: string) => {
        const audioElement = audioRef.current;
        if (!audioElement) return;
        audioElement.currentTime = Number(value);
        setProgress(Number(value));
    };

    return (
        <div className={cn(css.controlsContainer, className)}>
            {/* Progress bar */}
            <div className={css.progressBarWrapper}>
                <div className={css.timeDisplayStart}>
                    {convertSecondsToTime(progress)}
                </div>
                <input
                    type="range"
                    value={progress}
                    step="1"
                    min="0"
                    max={duration || 0}
                    className={css.progressSlider}
                    onChange={(e) => handleSeek(e.target.value)}
                />
                <div className={css.timeDisplayEnd}>
                    {!isNaN(duration) && convertSecondsToTime(duration)}
                </div>
            </div>

            {/* Hidden audio */}
            <audio
                ref={audioRef}
                src={audio.url}
                className={css.audioElement}
            />

            {/* Controls */}
            <div className={css.controlButtonsWrapper}>
                {isPlaying ? (
                    <PlayerBtn
                        alt="Pause"
                        image={PauseBtn}
                        ariaLabel="pause"
                        event={handlePause}
                    />
                ) : (
                    <PlayerBtn
                        alt="Play"
                        image={PlayBtn}
                        ariaLabel="play"
                        event={handlePlay}
                    />
                )}
            </div>
        </div>
    );
}

type PlayerBtnProps = {
    alt: string;
    event: () => void;
    image: string;
    ariaLabel: string;
    className?: string;
};

function PlayerBtn({
    alt,
    event,
    image,
    ariaLabel,
    className,
}: PlayerBtnProps) {
    return (
        <button
            type="button"
            className={cn(css.playerButton, className)}
            aria-label={ariaLabel}
            onClick={event}
        >
            <img
                src={image}
                alt={alt}
                className={css.playerButtonImage}
            />
        </button>
    );
}
