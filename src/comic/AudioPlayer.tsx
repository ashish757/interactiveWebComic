import { useContext, useEffect, useRef } from 'react';
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

    const hasPlayedRef = useRef(false);

    const toProgress = (val: number) => {
        const startStartProgress = 100 / duration;
        const scrollableWindow = 1 - startStartProgress;
        const oldProgress = val / duration;
        return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
    };

    const enterVal = typeof timeline?.enter === 'number' ? timeline.enter : (timeline?.enter?.[0] ?? 0);
    const enterStart = toProgress(enterVal);

    const exitVal = typeof timeline?.exit === 'number' ? timeline.exit : (timeline?.exit?.[0] ?? undefined);
    const exitEnd = exitVal !== undefined ? toProgress(exitVal) : undefined;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const isPastEnter = latest >= enterStart;
        const isBeforeExit = exitEnd === undefined || latest < exitEnd;
        const isInRange = isPastEnter && isBeforeExit;

        if (isInRange && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            audioEngine.play(assetKey as AudioKey, false, volume, true);
        } else if (!isInRange && hasPlayedRef.current) {
            hasPlayedRef.current = false;
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