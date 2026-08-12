import React, { type ReactNode, useRef } from "react";
import { cn } from "../util/cn";
import { useStore } from '../store/useStore';
import { useScroll, MotionValue } from 'framer-motion';

export interface ScrollySceneProps {
  duration?: number;
  backgroundClass?: string;
  children: ReactNode;
}

export type SceneContextType = {
  scrollYProgress: MotionValue<number>;
  duration: number;
};

export const SceneContext = React.createContext<SceneContextType | null>(null);

export default function ScrollyScene({ 
  duration = 300, 
  backgroundClass = "bg-black",
  children 
}: ScrollySceneProps) {
  const activeElementId = useStore((state) => state.activeElementId);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <SceneContext.Provider value={{ scrollYProgress, duration }}>
      <div 
        ref={containerRef} 
        className="relative w-full" 
        style={{ height: `${duration}vh` }}
      >
        <div className="absolute top-0 w-full h-[1px] snap-start pointer-events-none" />

        <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
          <div className={cn("absolute inset-0 w-full h-full", backgroundClass)}>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
            {React.Children.map(children, (child) => {
              if (React.isValidElement<{ id: string; className?: string }>(child)) {
                const id = child.props.id;
                const isActive = activeElementId === id;
                return React.cloneElement(child, {
                  className: cn(child.props.className, isActive ? "z-20" : "z-10"),
                });
              }
              return child;
            })}
          </div>
        </div>
      </div>
    </SceneContext.Provider>
  );
}