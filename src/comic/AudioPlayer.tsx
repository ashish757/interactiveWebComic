import { useContext, useEffect, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';
import { SceneContext } from './ScrollyScene';
import type { AudioKey } from '../data/assets';
import type { TimelineConfig } from '../types/storyConfig.type';
import { audioEngine } from '../util/audioEngine';

interface AudioPlayerProps {
    id: string;
    assetKey: string;
    timeline?: TimelineConfig;
    volume?: number;
}

export default function AudioPlayer({ assetKey, timeline, volume = 0.7 }: AudioPlayerProps) {
    const sceneContext = useContext(SceneContext);
    if (!sceneContext) throw new Error("AudioPlayer must be used within ScrollyScene");

    const { scrollYProgress, duration } = sceneContext;
    const [hasPlayed, setHasPlayed] = useState(false);

    const toProgress = (val: number) => {
        const startStartProgress = 100 / duration;
        const scrollableWindow = 1 - startStartProgress;
        const oldProgress = val / duration;
        return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
    };

    const enterVal = typeof timeline?.enter === 'number' ? timeline.enter : (timeline?.enter?.[0] ?? 0);
    const enterStart = toProgress(enterVal);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest >= enterStart && !hasPlayed) {
            setHasPlayed(true);
            audioEngine.play(assetKey as AudioKey, false, volume, true);
        }
        else if (latest < enterStart && hasPlayed) {
            setHasPlayed(false);
            audioEngine.pause(assetKey as AudioKey);
        }
    });

    useEffect(() => {
        return () => {
            audioEngine.pause(assetKey as AudioKey);
        };
    }, [assetKey]);

    return null;
}