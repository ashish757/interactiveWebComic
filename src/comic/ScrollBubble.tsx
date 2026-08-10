import { motion, useMotionValueEvent } from 'framer-motion';
import { type ReactNode, useContext, useState } from 'react';
import { useStore } from '../store/useStore';
import { SceneContext } from './ScrollyScene';
import type { TimelineConfig, AnimationType } from '../App';

interface ScrollBubbleProps {
  id: string; 
  children: ReactNode;
  layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string };
  timeline?: TimelineConfig;
  enterFrom?: AnimationType;
  exitTo?: AnimationType;
}

export default function ScrollBubble({ id, children, layout, timeline, enterFrom = 'bottom', exitTo = 'top' }: ScrollBubbleProps) {
  const setActiveElement = useStore((state) => state.setActiveElement);
  const activeElementId = useStore((state) => state.activeElementId);
  
  const sceneContext = useContext(SceneContext);
  if (!sceneContext) throw new Error("ScrollBubble must be used within ScrollyScene");
  const { scrollYProgress, duration } = sceneContext;

  const isActive = activeElementId === id;

  const [animState, setAnimState] = useState<'hidden' | 'visible' | 'exit'>('hidden');

  const toProgress = (val: number) => Math.min(Math.max(val / duration, 0), 1);

  const enterStart = timeline?.enter ? toProgress(timeline.enter[0]) : 0;
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
      default: return { opacity: 0 };
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
      default: return { opacity: 0 };
    }
  };

  const variants = {
    hidden: getHiddenState(),
    visible: { 
        x: 0, 
        y: 0, 
        scale: 1, 
        opacity: 1, 
        transition: { type: "spring" as const, stiffness: 200, damping: 20 } 
    },
    exit: {
        ...getExitState(),
        transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  const isFullScreen = !layout;
  const outerWrapperClass = isFullScreen ? "absolute inset-0 w-full h-full z-10" : "absolute z-10";
  const innerWrapperClass = isFullScreen ? "w-full h-full" : "w-full h-full flex justify-center";

  return (
    <div className={outerWrapperClass} style={layout}>
      <motion.div
        className={innerWrapperClass}
        variants={variants}
        initial="hidden"
        animate={animState}
      >
        <div 
          className={`transition-all duration-300 w-full h-full ${isActive ? 'pointer-events-auto scale-105' : 'pointer-events-none scale-100'}`}
          onPointerEnter={() => setActiveElement(id)}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}