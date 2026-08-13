import { motion, useMotionValueEvent, useTransform } from 'framer-motion';
import { type ReactNode, useContext, useState } from 'react';
import { useStore } from '../store/useStore';
import { SceneContext } from './ScrollyScene';
import type { TimelineConfig, AnimationType } from '../types/storyConfig.type';

interface ScrollBubbleProps {
  id: string;
  children: ReactNode;
  layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string; width?: string; height?: string };
  timeline?: TimelineConfig;
  enterFrom?: AnimationType;
  exitTo?: AnimationType;
  animation?: 'pulse' | 'rocking' | 'scale-up-scale-down' | 'none';
  className?: string;
}

export default function ScrollBubble(props: ScrollBubbleProps) {
  const { timeline } = props;
  const isScrubbable = Array.isArray(timeline?.enter) || Array.isArray(timeline?.exit) || Array.isArray(timeline?.stay);

  if (isScrubbable) {
      return <ScrubbableEngine {...props} />;
  } else {
      return <DiscreteEngine {...props} />;
  }
}

function DiscreteEngine({ id, children, layout, timeline, enterFrom = 'bottom', exitTo = 'top', animation = 'none', className }: ScrollBubbleProps) {
  const setActiveElement = useStore((state) => state.setActiveElement);
  const activeElementId = useStore((state) => state.activeElementId);
  const sceneContext = useContext(SceneContext);
  if (!sceneContext) throw new Error("ScrollBubble must be used within ScrollyScene");

  const { scrollYProgress, duration } = sceneContext;
  const isActive = activeElementId === id;

  const toProgress = (val: number) => {
      const startStartProgress = 100 / duration;
      const scrollableWindow = 1 - startStartProgress;
      const oldProgress = val / duration;
      return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
  };

  const enterVal = typeof timeline?.enter === 'number' ? timeline.enter : (timeline?.enter?.[0] ?? 0);
  const exitVal = typeof timeline?.exit === 'number' ? timeline.exit : (Array.isArray(timeline?.stay) ? timeline.stay[1] : (Array.isArray(timeline?.exit) ? timeline.exit[0] : 999999));

  const enterStart = toProgress(enterVal);
  const stayEnd = toProgress(exitVal);

  const [animState, setAnimState] = useState<'hidden' | 'visible' | 'exit'>('hidden');

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

  const variants: any = {
    hidden: getHiddenState(),
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
    exit: { ...getExitState(), transition: { duration: 0.3, ease: "easeOut" } }
  };

  const getAnimationClass = () => {
    if (animation === 'pulse') return 'animate-pulse';
    if (animation === 'rocking') return 'animate-rocking';
    if (animation === 'scale-up-scale-down') return 'animate-scale-up-scale-down';
    return '';
  };

  const isFullScreen = !layout;
  const outerWrapperClass = `${isFullScreen ? "absolute inset-0 w-full h-full z-10" : "absolute z-10"} ${className || ''}`;
  const innerWrapperClass = isFullScreen ? "w-full h-full" : "w-full h-full flex justify-center";

  return (
    <div className={outerWrapperClass} style={layout}>
      <motion.div className={innerWrapperClass} variants={variants} initial="hidden" animate={animState}>
        <div className={`transition-all duration-300 w-full h-full ${getAnimationClass()} ${isActive ? 'pointer-events-auto scale-105' : 'pointer-events-none scale-100'}`} onPointerEnter={() => setActiveElement(id)}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function ScrubbableEngine({ id, children, layout, timeline, enterFrom = 'bottom', exitTo = 'top', animation = 'none', className }: ScrollBubbleProps) {
  const setActiveElement = useStore((state) => state.setActiveElement);
  const activeElementId = useStore((state) => state.activeElementId);
  const sceneContext = useContext(SceneContext);
  if (!sceneContext) throw new Error("ScrollBubble must be used within ScrollyScene");

  const { scrollYProgress, duration } = sceneContext;
  const isActive = activeElementId === id;

  const toProgress = (val: number) => {
      const startStartProgress = 100 / duration;
      const scrollableWindow = 1 - startStartProgress;
      const oldProgress = val / duration;
      return Math.min(Math.max(startStartProgress + (oldProgress * scrollableWindow), 0), 1);
  };

  const enterPhase = Array.isArray(timeline?.enter) ? timeline.enter : [timeline?.enter ?? 0, timeline?.enter ?? 0];
  const exitPhase = Array.isArray(timeline?.exit) ? timeline.exit : (
      Array.isArray(timeline?.stay) ? [timeline.stay[1], timeline.stay[1]] : [99999, 99999]
  );

  const pEStart = toProgress(enterPhase[0]);
  const pEEnd = toProgress(enterPhase[1]);
  const pXStart = toProgress(exitPhase[0]);
  const pXEnd = toProgress(exitPhase[1]);

  const getEnterVal = (prop: string) => {
    switch(enterFrom) {
      case 'left': return prop === 'x' ? '-50vw' : undefined;
      case 'right': return prop === 'x' ? '50vw' : undefined;
      case 'top': return prop === 'y' ? '-50vh' : undefined;
      case 'bottom': return prop === 'y' ? '50vh' : undefined;
      case 'pop': return prop === 'scale' ? 0.5 : undefined;
      default: return undefined;
    }
  };

  const getExitVal = (prop: string) => {
    switch(exitTo) {
      case 'left': return prop === 'x' ? '-50vw' : undefined;
      case 'right': return prop === 'x' ? '50vw' : undefined;
      case 'top': return prop === 'y' ? '-50vh' : undefined;
      case 'bottom': return prop === 'y' ? '50vh' : undefined;
      case 'pop': return prop === 'scale' ? 0.5 : undefined;
      default: return undefined;
    }
  };

  const buildTransform = (startVal: any, neutralVal: any, endVal: any) => {
      if (startVal === undefined && endVal === undefined) return neutralVal;

      const inputs = [0];
      const outputs = [startVal ?? neutralVal];

      if (pEStart > inputs[inputs.length-1]) { inputs.push(pEStart); outputs.push(startVal ?? neutralVal); }
      if (pEEnd > inputs[inputs.length-1]) { inputs.push(pEEnd); outputs.push(neutralVal); }
      if (pXStart > inputs[inputs.length-1]) { inputs.push(pXStart); outputs.push(neutralVal); }
      if (pXEnd > inputs[inputs.length-1]) { inputs.push(pXEnd); outputs.push(endVal ?? neutralVal); }
      if (1 > inputs[inputs.length-1]) { inputs.push(1); outputs.push(endVal ?? neutralVal); }

      return useTransform(scrollYProgress, inputs, outputs);
  };

  const opacityStart = enterFrom === 'none' ? 1 : 0;
  const opacityEnd = exitTo === 'none' ? 1 : 0;

  const opacity = buildTransform(opacityStart, 1, opacityEnd);
  const x = buildTransform(getEnterVal('x') ?? '0vw', '0vw', getExitVal('x') ?? '0vw');
  const y = buildTransform(getEnterVal('y') ?? '0vh', '0vh', getExitVal('y') ?? '0vh');
  const scale = buildTransform(getEnterVal('scale') ?? 1, 1, getExitVal('scale') ?? 1);

  const getAnimationClass = () => {
    if (animation === 'pulse') return 'animate-pulse';
    if (animation === 'rocking') return 'animate-rocking';
    if (animation === 'scale-up-scale-down') return 'animate-scale-up-scale-down';
    return '';
  };

  const isFullScreen = !layout;
  const outerWrapperClass = `${isFullScreen ? "absolute inset-0 w-full h-full z-10" : "absolute z-10"} ${className || ''}`;
  const innerWrapperClass = isFullScreen ? "w-full h-full" : "w-full h-full flex justify-center";

  return (
    <div className={outerWrapperClass} style={layout}>
      <motion.div className={innerWrapperClass} style={{ opacity, x, y, scale }}>
        <div className={`transition-all duration-300 w-full h-full ${getAnimationClass()} ${isActive ? 'pointer-events-auto scale-105' : 'pointer-events-none scale-100'}`} onPointerEnter={() => setActiveElement(id)}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}