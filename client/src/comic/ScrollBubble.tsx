import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useStore } from '../store/useStore';

interface ScrollBubbleProps {
  id: string; 
  children: ReactNode;
  top: string; 
  left: string; 
}

export default function ScrollBubble({ id, children, top, left }: ScrollBubbleProps) {
  const setActiveElement = useStore((state) => state.setActiveElement);
  const activeElementId = useStore((state) => state.activeElementId);

  const isActive = activeElementId === id;

  return (
    <motion.div
      className={`absolute transition-all duration-1000 ease-in-out ${
        isActive ? 'pointer-events-auto z-20 opacity-100' : 'pointer-events-none z-10 opacity-30'
      }`}
      style={{ top, left }}
      onViewportEnter={() => setActiveElement(id)}
      viewport={{ margin: "-30% 0px -30% 0px" }} 
    >
      {children}
    </motion.div>
  );
}