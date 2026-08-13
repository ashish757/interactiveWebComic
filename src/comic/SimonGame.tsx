import { useState, useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { ASSETS } from '../data/assets';

const COLORS = [
    { name: 'Red', hex: '#ef4444', glow: 'rgba(239, 68, 68, 0.8)' },
    { name: 'Blue', hex: '#3b82f6', glow: 'rgba(59, 130, 246, 0.8)' },
    { name: 'Green', hex: '#22c55e', glow: 'rgba(34, 197, 94, 0.8)' },
    { name: 'Yellow', hex: '#eab308', glow: 'rgba(234, 179, 8, 0.8)' },
    { name: 'Purple', hex: '#a855f7', glow: 'rgba(168, 85, 247, 0.8)' },
    { name: 'Orange', hex: '#f97316', glow: 'rgba(249, 115, 22, 0.8)' },
    { name: 'Cyan', hex: '#06b6d4', glow: 'rgba(6, 182, 212, 0.8)' },
    { name: 'Pink', hex: '#ec4899', glow: 'rgba(236, 72, 153, 0.8)' },
    { name: 'White', hex: '#f8fafc', glow: 'rgba(248, 250, 252, 0.8)' },
];

const START_SEQUENCE_LENGTH = 3;
const MAX_LEVELS = 5;

const getRandomColorIndex = () => {
    return Math.floor(Math.random() * COLORS.length);
};

const generateInitialSequence = (len: number) => {
    const newSeq = [];
    for (let i = 0; i < len; i++) {
        newSeq.push(getRandomColorIndex());
    }
    return newSeq;
};

export default function SimonGame({ gameId = 'simon' }: { gameId?: string }) {
    const [level, setLevel] = useState(1);
    const [sequence, setSequence] = useState<number[]>([]);
    const [playerSequence, setPlayerSequence] = useState<number[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShowingSequence, setIsShowingSequence] = useState(false);
    const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [hasWon, setHasWon] = useState(false);

    const setGameOutcome = useStore((state) => state.setGameOutcome);
    const timeoutRef = useRef<number | null>(null);

    const startGame = () => {
        setLevel(1);
        setPlayerSequence([]);
        setGameOver(false);
        setHasWon(false);
        setIsPlaying(true);
        const newSeq = generateInitialSequence(START_SEQUENCE_LENGTH);
        setSequence(newSeq);
        playSequence(newSeq);
    };

    const nextLevel = () => {
        if (level >= MAX_LEVELS) {
            setHasWon(true);
            setIsPlaying(false);
            setTimeout(() => {
                setGameOutcome(gameId, 'win');
                setTimeout(() => {
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }, 100);
            }, 3000);
            return;
        }

        const nextLvl = level + 1;
        setLevel(nextLvl);
        setPlayerSequence([]);

        const nextColor = getRandomColorIndex();
        const newSeq = [...sequence, nextColor];

        setSequence(newSeq);
        setTimeout(() => playSequence(newSeq), 1000);
    };

    const playSequence = (seq: number[]) => {
        setIsShowingSequence(true);
        let i = 0;

        const speed = Math.max(350, 800 - (seq.length * 60));

        const interval = setInterval(() => {
            if (i >= seq.length) {
                clearInterval(interval);
                setActiveColorIndex(null);
                setIsShowingSequence(false);
                return;
            }

            setActiveColorIndex(seq[i]);

            setTimeout(() => {
                setActiveColorIndex(null);
            }, speed * 0.6);

            i++;
        }, speed);
    };

    const handleColorClick = (index: number) => {
        if (!isPlaying || isShowingSequence || gameOver || hasWon) return;

        setActiveColorIndex(index);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setActiveColorIndex(null), 250);

        const newPlayerSeq = [...playerSequence, index];
        setPlayerSequence(newPlayerSeq);

        const currentIndex = newPlayerSeq.length - 1;

        if (newPlayerSeq[currentIndex] !== sequence[currentIndex]) {
            setGameOver(true);
            setIsPlaying(false);
            return;
        }

        if (newPlayerSeq.length === sequence.length) {
            setIsShowingSequence(true);
            setTimeout(nextLevel, 500);
        }
    };

    useEffect(() => {
        const preventScroll = (e: Event) => {
            if (isPlaying && !gameOver && !hasWon) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isPlaying, gameOver, hasWon]);

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50 p-2 md:p-4" style={{
            backgroundImage: `url(${ASSETS.backgrounds.simonbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="w-[95vw] h-[95vh] flex flex-col items-center">

                <div className="flex justify-between w-full max-w-[min(95vw,75vh)] mb-4 text-cyan-400 font-boom text-xl md:text-3xl uppercase tracking-wider drop-shadow-md z-10">
                    <span className="text-shadow-md text-shadow-cyan-900">Level: <span className="text-white">{isPlaying ? level : 1}</span> / {MAX_LEVELS}</span>
                    <span className="text-shadow-md text-shadow-cyan-900">Sequence: <span className="text-white">{isPlaying ? sequence.length : START_SEQUENCE_LENGTH}</span></span>
                </div>

                {isShowingSequence && !hasWon && !gameOver && (
                    <div className="mt-6 text-xl text-yellow-300 font-mono text-shadow-lg text-shadow-amber-900">
                        Memorize the sequence...
                    </div>
                )}

                {!isShowingSequence && isPlaying && !gameOver && !hasWon && (
                    <div className="mt-6 text-xl text-yellow-300 font-mono text-shadow-lg text-shadow-amber-900">
                        Your turn! Repeat the pattern.
                    </div>
                )}

                <div
                    className="relative rounded-lg overflow-hidden shadow-2xl aspect-square w-full max-w-[min(95vw,75vh)] shrink-0 "

                >
                    <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

                    {!isPlaying && !gameOver && !hasWon && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 z-40">
                            <h2 className="text-4xl md:text-6xl text-cyan-400 font-boom uppercase mb-6 tracking-widest drop-shadow-[0_0_15px_rgba(34,211,153,0.8)] text-center">MEMORY!!</h2>
                            <p className="text-white text-base md:text-xl mb-8 font-mono text-center px-4">Watch the books light up.<br/>Mimic the exact sequences.</p>
                            <button
                                onClick={startGame}
                                className="pointer-events-auto  bg-cyan-600 hover:bg-cyan-500 text-white font-boom text-2xl md:text-3xl uppercase px-8 py-4 border-4 border-black/20 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform transition-transform hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none"
                            >
                                BEGIN INCANTATION
                            </button>
                        </div>
                    )}

                    {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/80 z-40">
                            <h2 className="text-5xl md:text-7xl text-red-500 font-boom uppercase mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] text-center">Bad Memory</h2>
                            <p className="text-white text-xl md:text-2xl font-mono mb-8">The magic fizzled out...</p>
                            <button
                                onClick={startGame}
                                className="pointer-events-auto  bg-red-600 hover:bg-red-500 text-white font-boom text-2xl md:text-3xl uppercase px-8 py-4 border-4 border-black/20 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform transition-transform hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none"
                            >
                                TRY AGAIN
                            </button>
                        </div>
                    )}

                    {hasWon && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyan-950/80 z-40">
                            <h2 className="text-5xl md:text-7xl text-cyan-400 font-boom uppercase mb-4 drop-shadow-[0_0_20px_rgba(34,211,153,0.8)] text-center">Prove Your Memory!</h2>
                            <p className="text-white text-xl md:text-2xl font-mono">The gateway unlocks!</p>
                        </div>
                    )}

                    <div className="absolute inset-0 z-10 grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 p-4 md:p-8">
                        {COLORS.map((color, idx) => (
                            <div
                                key={color.name}
                                onClick={() => handleColorClick(idx)}
                                className={`
                                     opacity-90
                                    relative rounded-xl border-4 transition-all duration-200 cursor-pointer flex items-center justify-center
                                    ${activeColorIndex === idx
                                    ? 'border-white scale-105 z-20 brightness-150'
                                    : 'border-white/20 hover:border-white/50 brightness-75 hover:brightness-100'}
                                    ${isShowingSequence ? 'pointer-events-none' : 'pointer-events-auto '}
                                `}
                                style={{
                                    backgroundColor: color.hex,
                                    boxShadow: activeColorIndex === idx ? `0 0 40px 10px ${color.glow}, inset 0 0 20px rgba(255,255,255,0.8)` : 'inset 0 0 10px rgba(0,0,0,0.5)'
                                }}
                            >
                                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIiAvPjwvc3ZnPg==')] pointer-events-none mix-blend-overlay"></div>
                                <div className="w-full h-1/4 absolute top-[10%] border-y-2 border-black/10 mix-blend-overlay"></div>
                                <div className="w-full h-1/4 absolute bottom-[10%] border-y-2 border-black/10 mix-blend-overlay"></div>
                                <span className="font-boom text-2xl md:text-4xl text-black/30 mix-blend-overlay tracking-widest select-none">{color.name[0]}</span>
                            </div>
                        ))}
                    </div>

                </div>



            </div>
        </div>
    );
}