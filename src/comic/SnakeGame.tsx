import { useState, useEffect, useCallback, useRef } from 'react';
import { useStore } from '../store/useStore';
import { ASSETS } from '../data/assets';

const GRID_SIZE = 40;
const INITIAL_SNAKE = [{ x: 12, y: 12 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const WIN_SCORE = 100;

export default function SnakeGame({ gameId = 'snake' }: { gameId?: string }) {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const setGameOutcome = useStore((state) => state.setGameOutcome);
    const gameAreaRef = useRef<HTMLDivElement>(null);

    const generateFood = useCallback((currentSnake = snake) => {
        let newFood: { x: number, y: number };
        while (true) {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE)
            };
            if (!currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
                break;
            }
        }
        setFood(newFood);
    }, [snake]);

    const startGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
        generateFood(INITIAL_SNAKE);
        gameAreaRef.current?.focus();
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isPlaying || gameOver) return;

        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                e.preventDefault();
                if (direction.y !== 1) setDirection({ x: 0, y: -1 });
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                e.preventDefault();
                if (direction.y !== -1) setDirection({ x: 0, y: 1 });
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                e.preventDefault();
                if (direction.x !== 1) setDirection({ x: -1, y: 0 });
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                e.preventDefault();
                if (direction.x !== -1) setDirection({ x: 1, y: 0 });
                break;
        }
    }, [direction, isPlaying, gameOver]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const preventScroll = (e: Event) => {
            if (isPlaying && !gameOver) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isPlaying, gameOver]);

    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const moveSnake = () => {
            const head = snake[0];
            const newHead = { x: head.x + direction.x, y: head.y + direction.y };

            if (
                newHead.x < 0 ||
                newHead.x >= GRID_SIZE ||
                newHead.y < 0 ||
                newHead.y >= GRID_SIZE ||
                snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
            ) {
                setGameOver(true);
                return;
            }

            const newSnake = [newHead, ...snake];

            if (newHead.x === food.x && newHead.y === food.y) {
                const newScore = score + 10;
                setScore(newScore);
                generateFood(newSnake);

                if (newScore >= WIN_SCORE) {
                    setIsPlaying(false);
                    setTimeout(() => {
                        setGameOutcome(gameId, 'win');
                        setTimeout(() => {
                            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                        }, 100);
                    }, 3000);
                }
            } else {
                newSnake.pop();
            }

            setSnake(newSnake);
        };

        const intervalId = setInterval(moveSnake, 120);
        return () => clearInterval(intervalId);
    }, [direction, food, isPlaying, gameOver, score, gameId, snake, setGameOutcome, generateFood]);

    useEffect(() => {
        if (gameOver) {
            setTimeout(() => {
                setGameOutcome(gameId, 'lose');
                setTimeout(() => {
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }, 100);
            }, 3000);
        }
    }, [gameOver, gameId, setGameOutcome]);

    const getHeadDirection = () => {
        if (snake.length > 1) {
            return { x: snake[0].x - snake[1].x, y: snake[0].y - snake[1].y };
        }
        return direction;
    };

    const getSegmentClasses = (index: number, segment: {x: number, y: number}) => {
        let baseClass = "z-0 relative flex items-center justify-center w-full h-full ";

        if (index === 0) {
            baseClass += "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)] z-20 scale-[1.15] ";
            const headDir = getHeadDirection();

            if (headDir.x === 1) baseClass += "rounded-r-full rounded-l-sm";
            else if (headDir.x === -1) baseClass += "rounded-l-full rounded-r-sm";
            else if (headDir.y === 1) baseClass += "rounded-b-full rounded-t-sm";
            else if (headDir.y === -1) baseClass += "rounded-t-full rounded-b-sm";
            else baseClass += "rounded-full";

        } else if (index === snake.length - 1 && snake.length > 1) {
            baseClass += "bg-green-600 z-0 scale-[0.85] ";
            const prev = snake[index - 1];
            const dx = segment.x - prev.x;
            const dy = segment.y - prev.y;

            if (dx === 1) baseClass += "rounded-r-full rounded-l-md";
            else if (dx === -1) baseClass += "rounded-l-full rounded-r-md";
            else if (dy === 1) baseClass += "rounded-b-full rounded-t-md";
            else if (dy === -1) baseClass += "rounded-t-full rounded-b-md";
            else baseClass += "rounded-full";

        } else {
            baseClass += "bg-green-500 z-10 scale-[1.1] rounded-[4px]";
        }

        return baseClass;
    };

    const renderEyes = () => {
        const headDir = getHeadDirection();
        const eyeBase = "absolute bg-black rounded-full w-[25%] h-[25%] shadow-[0_0_2px_white]";

        if (headDir.x === 1) return (
            <><div className={`${eyeBase} top-[15%] right-[20%]`} /><div className={`${eyeBase} bottom-[15%] right-[20%]`} /></>
        );
        if (headDir.x === -1) return (
            <><div className={`${eyeBase} top-[15%] left-[20%]`} /><div className={`${eyeBase} bottom-[15%] left-[20%]`} /></>
        );
        if (headDir.y === 1) return (
            <><div className={`${eyeBase} bottom-[20%] left-[15%]`} /><div className={`${eyeBase} bottom-[20%] right-[15%]`} /></>
        );
        return (
            <><div className={`${eyeBase} top-[20%] left-[15%]`} /><div className={`${eyeBase} top-[20%] right-[15%]`} /></>
        );
    };

    return (
        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center bg-black/80 z-50 p-2 md:p-4" style={{backgroundImage: `url(${ASSETS.backgrounds.snakebg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <div className="w-full h-full flex flex-col items-center justify-center">

                <div className="flex justify-between w-full max-w-[min(95vw,75vh)] mb-4 text-green-400 font-boom text-xl md:text-3xl uppercase tracking-wider drop-shadow-md">
                    <span className="text-shadow-md text-shadow-amber-500">Score: <span className="text-white ">{score}</span></span>
                    <span className="text-shadow-md text-shadow-amber-500">Target: <span className="text-white">{WIN_SCORE}</span></span>
                </div>

                <div
                    ref={gameAreaRef}
                    className="relative rounded-lg overflow-hidden shadow-2xl aspect-square w-full max-w-[min(95vw,75vh)] shrink-0  backdrop-blur-xs bg-black/10"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                    }}
                    tabIndex={0}
                >
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                    {!isPlaying && score < WIN_SCORE   && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 z-40">
                            <h2 className="text-4xl md:text-6xl text-green-400 font-boom uppercase mb-6 tracking-widest drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] text-center">FIGHT THE SNAKE</h2>
                            <p className="text-white text-base md:text-xl mb-8 font-mono text-center">Use W,A,S,D or Arrow Keys.<br/>Get {WIN_SCORE} points!</p>
                            <button
                                onClick={startGame}
                                className="bg-green-600 hover:bg-green-500 text-white font-boom text-2xl md:text-3xl uppercase px-8 py-4 border-4 border-black/20 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform transition-transform hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-2"
                            >
                                START BATTLE
                            </button>
                        </div>
                    )}

                    {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/20 z-40">
                            <h2 className="text-5xl md:text-7xl text-red-500 font-boom uppercase mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">YOU DIED</h2>
                            <p className="text-white text-xl md:text-2xl font-mono">The snake consumed you...</p>
                        </div>
                    )}

                    {score >= WIN_SCORE && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-950/20 z-40">
                            <h2 className="text-5xl md:text-7xl text-green-400 font-boom uppercase mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">VICTORY</h2>
                            <p className="text-white text-xl md:text-2xl font-mono">You survived the encounter!</p>
                        </div>
                    )}

                    {snake.map((segment, i) => (
                        <div
                            key={`snake-${i}`}
                            className={getSegmentClasses(i, segment)}
                            style={{
                                gridColumnStart: segment.x + 1,
                                gridRowStart: segment.y + 1,
                            }}
                        >
                            {i === 0 && renderEyes()}
                        </div>
                    ))}

                    <div
                        className="w-full h-full rounded-full z-10 relative shadow-[0_0_15px_rgba(239,68,68,1)] transform scale-[1.2] animate-scale-up-scale-down flex items-center justify-center bg-linear-to-br from-red-400 to-red-700 border border-red-900"
                        style={{
                            gridColumnStart: food.x + 1,
                            gridRowStart: food.y + 1,
                        }}
                    >
                        <div className="absolute top-[15%] left-[20%] w-[35%] h-[35%] bg-white/40 rounded-full" />
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 md:hidden w-full max-w-62.5 shrink-0">
                    <div />
                    <button className="bg-zinc-700/80 p-4 rounded-xl text-white text-xl  border-b-4 border-zinc-900" onClick={() => { if (direction.y !== 1) setDirection({ x: 0, y: -1 })}}>↑</button>
                    <div />
                    <button className="bg-zinc-700/80 p-4 rounded-xl text-white text-xl border-b-4 border-zinc-900" onClick={() => { if (direction.x !== 1) setDirection({ x: -1, y: 0 })}}>←</button>
                    <button className="bg-zinc-700/80 p-4 rounded-xl text-white text-xl border-b-4 border-zinc-900" onClick={() => { if (direction.y !== -1) setDirection({ x: 0, y: 1 })}}>↓</button>
                    <button className="bg-zinc-700/80 p-4 rounded-xl text-white text-xl border-b-4 border-zinc-900" onClick={() => { if (direction.x !== -1) setDirection({ x: 1, y: 0 })}}>→</button>
                </div>
            </div>
        </div>
    );
}