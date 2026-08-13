import ScrollBubble from './ScrollBubble';
import { useStore } from '../store/useStore';
import { cn } from '../util/cn';
import type { TimelineConfig } from '../types/storyConfig.type';

interface ComicActionButtonProps {
    id: string;
    layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string; width?: string; height?: string };
    timeline?: TimelineConfig;
    enterFrom?: 'bottom' | 'top' | 'left' | 'right' | 'fade' | 'pop' | 'none';
    exitTo?: 'bottom' | 'top' | 'left' | 'right' | 'fade' | 'pop' | 'none';
    animation?: 'pulse' | 'rocking' | 'scale-up-scale-down' | 'none';
    className?: string;
    text: string;
    gameTarget?: string;
}

export default function ComicActionButton({
    id,
    layout,
    timeline,
    enterFrom,
    exitTo,
    animation,
    className,
    text,
    gameTarget
}: ComicActionButtonProps) {
    const setActiveGame = useStore((state) => state.setActiveGame);

    const handleClick = () => {
        if (gameTarget) {
            setActiveGame(gameTarget);
            
            setTimeout(() => {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <ScrollBubble
            id={id}
            layout={layout}
            timeline={timeline}
            enterFrom={enterFrom}
            exitTo={exitTo}
            animation={animation}
            className={cn("pointer-events-auto", className)}
        >
            <button
                onClick={handleClick}
                className="pointer-events-auto bg-red-600 hover:bg-red-500 text-white font-boom text-4xl uppercase px-8 py-4 border-4 border-black shadow-[var(--shadow-comic)] transform transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
                {text}
            </button>
        </ScrollBubble>
    );
}
