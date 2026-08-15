import { useContext, useEffect, useRef, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';
import { SceneContext } from './ScrollyScene';
import { ASSETS, type AudioKey } from '../data/assets';
import type { TimelineConfig } from '../types/storyConfig.type';

interface AudioPlayerProps {
    id: string;
    assetKey: string;
    timeline?: TimelineConfig;
}

export default function AudioPlayer({ assetKey, timeline }: AudioPlayerProps) {
    const sceneContext = useContext(SceneContext);
    if (!sceneContext) throw new Error("AudioPlayer must be used within ScrollyScene");
    
    const { scrollYProgress, duration } = sceneContext;
    const [hasPlayed, setHasPlayed] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audioSrc = ASSETS.audio[assetKey as AudioKey];
        if (audioSrc) {
            audioRef.current = new Audio(audioSrc);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [assetKey]);

    const toProgress = (val: number) => {
        const startStartProgress = 100 / duration;
        const scrollableWindow = 1 - startStartProgress;
        const oldProgress = val / duration;
        return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
    };

    const enterVal = typeof timeline?.enter === 'number' ? timeline.enter : (timeline?.enter?.[0] ?? 0);
    const enterStart = toProgress(enterVal);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!audioRef.current) return;

        if (latest >= enterStart && !hasPlayed) {
            setHasPlayed(true);
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Audio play blocked by browser:", e));
        } 
        else if (latest < enterStart && hasPlayed) {
            setHasPlayed(false);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    });

    return null;
}
