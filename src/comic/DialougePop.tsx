import { motion, useMotionValueEvent } from 'framer-motion';
import { type ReactNode, useContext, useState } from 'react';
import { useStore } from '../store/useStore';
import { SceneContext } from './ScrollyScene';
import type { TimelineConfig, AnimationType } from '../data/storyConfig';

interface DialoguePopProps {
    id: string;
    children: ReactNode;
    layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string; width?: string; height?: string };
    timeline?: TimelineConfig;
    enterFrom?: AnimationType;
    exitTo?: AnimationType;
    animation?: 'pulse' | 'rocking' | 'scale-up-scale-down' | 'none';
    className?: string;
}

export default function DialoguePop({ id, children, layout, timeline, enterFrom = 'pop', exitTo = 'fade', animation = 'none', className }: DialoguePopProps) {
    const setActiveElement = useStore((state) => state.setActiveElement);
    const activeElementId = useStore((state) => state.activeElementId);

    const sceneContext = useContext(SceneContext);
    if (!sceneContext) throw new Error("DialoguePop must be used within ScrollyScene");
    const { scrollYProgress, duration } = sceneContext;

    const isActive = activeElementId === id;

    const [animState, setAnimState] = useState<'hidden' | 'visible' | 'exit'>('hidden');

    // The original timeline mapped val/duration to the ["start start", "end end"] window.
    // In our new ["start end", "end end"] offset, "start start" occurs at progress = 100 / duration.
    // We perfectly preserve the old mapping for positive values and extrapolate for negative values.
    const toProgress = (val: number) => {
        const startStartProgress = 100 / duration;
        const scrollableWindow = 1 - startStartProgress;
        const oldProgress = val / duration;
        return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
    };

    const enterStart = timeline?.enter ? toProgress(timeline.enter[0]) : toProgress(0);
    const stayEnd = timeline?.stay ? toProgress(timeline.stay[1]) : 1;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (enterStart === 0 && latest === 0 && stayEnd > 0) {
            setAnimState('visible');
            return;
        }

        if (latest >= enterStart && latest < stayEnd) {
            if (animState !== 'visible') setAnimState('visible');
        } else if (latest >= stayEnd) {
            if (animState !== 'exit') setAnimState('exit');
        } else {
            if (animState !== 'hidden') setAnimState('hidden');
        }
    });

    const getHiddenState = () => {
        if (enterFrom === 'none') return { x: 0, y: 0, scale: 1, opacity: 1 };
        switch(enterFrom) {
            case 'left': return { x: '-50vw', opacity: 0 };
            case 'right': return { x: '50vw', opacity: 0 };
            case 'top': return { y: '-50vh', opacity: 0 };
            case 'bottom': return { y: '50vh', opacity: 0 };
            case 'pop': return { scale: 0.5, opacity: 0 };
            case 'fade': return { opacity: 0 };
            default: return { scale: 0.5, opacity: 0 };
        }
    };

    const getExitState = () => {
        if (exitTo === 'none') return { x: 0, y: 0, scale: 1, opacity: 1 };
        switch(exitTo) {
            case 'left': return { x: '-50vw', opacity: 0 };
            case 'right': return { x: '50vw', opacity: 0 };
            case 'top': return { y: '-50vh', opacity: 0 };
            case 'bottom': return { y: '50vh', opacity: 0 };
            case 'pop': return { scale: 0.5, opacity: 0 };
            case 'fade': return { opacity: 0 };
            default: return { scale: 0.5, opacity: 0 };
        }
    };

    const variants = {
        hidden: getHiddenState(),
        visible: { 
            x: 0, 
            y: 0, 
            scale: 1, 
            opacity: 1, 
            transition: { type: "spring" as const, stiffness: 250, damping: 15 } 
        },
        exit: {
            ...getExitState(),
            transition: { duration: 0.3, ease: "easeOut" as const }
        }
    };

    const getAnimationClass = () => {
        if (animation === 'pulse') return 'animate-pulse';
        if (animation === 'rocking') return 'animate-rocking';
        if (animation === 'scale-up-scale-down') return 'animate-scale-up-scale-down';
        return '';
    };

    return (
        <div className={`absolute z-30 ${className || ''}`} style={layout}>
            <motion.div
                className="origin-bottom-left w-full h-full flex justify-center"
                variants={variants}
                initial="hidden"
                animate={animState}
            >
                <div 
                    className={`transition-all duration-300 w-full h-full ${getAnimationClass()} ${isActive ? 'pointer-events-auto scale-105' : 'pointer-events-none scale-100'}`}
                    onPointerEnter={() => setActiveElement(id)}
                >
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

