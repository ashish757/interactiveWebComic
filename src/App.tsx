import LandingPage from './LandingPage';
import ScrollyScene from './comic/ScrollyScene';
import ScrollBubble from './comic/ScrollBubble';
import SpeechBubble from './ui/SpeechBubble';
import ComicText from './ui/ComicText';
import ComicActionButton from './comic/ComicActionButton';
import SnakeGame from './comic/SnakeGame';
import SimonGame from './comic/SimonGame';
import { useStore } from './store/useStore';
import { storyData, type Scene } from './data/storyConfig';
import { ASSETS, type BackgroundKey, type CharacterKey } from './data/assets';
import DialoguePop from "./comic/DialougePop.tsx";

export default function App() {
    const hasStarted = useStore((state) => state.hasStarted);
    const activeGame = useStore((state) => state.activeGame);
    const gameOutcomes = useStore((state) => state.gameOutcomes);

    if (!hasStarted) {
        return <LandingPage />;
    }

    const visibleScenes: Scene[] = [];
    
    for (const scene of storyData) {
        if (scene.branch) {
            const outcome = gameOutcomes[scene.branch.game];
            if (outcome !== scene.branch.outcome) {
                continue;
            }
        }

        visibleScenes.push(scene);

        const gameTriggerElement = scene.elements?.find(el => el.type === 'button' && el.gameTarget);
        if (gameTriggerElement && gameTriggerElement.gameTarget) {
            const target = gameTriggerElement.gameTarget;
            if (activeGame !== target && !gameOutcomes[target]) {
                break;
            }
        }

        if (scene.isMinigame) {
            if (!gameOutcomes[scene.isMinigame]) {
                break;
            }
        }
    }

    return (
        <div className="bg-black text-white w-full">
            {visibleScenes.map((scene) => (
                <ScrollyScene
                    key={scene.sceneId}
                    duration={scene.duration}
                    backgroundClass={scene.baseBackground !== 'none' ? `bg-[url('${ASSETS.backgrounds[scene.baseBackground as BackgroundKey]}')] bg-cover bg-center` : scene.minigameBackground ? 'bg-zinc-800' : 'bg-black'}
                >
                    {scene.isMinigame === 'snake' && (
                        <SnakeGame gameId="snake" />
                    )}
                    {scene.isMinigame === 'simon' && (
                        <SimonGame gameId="simon" />
                    )}

                    {scene.elements?.map((el) => {
                        if (el.type === 'button') {
                            return (
                                <ComicActionButton
                                    key={el.id}
                                    id={el.id}
                                    text={el.text || 'CLICK ME'}
                                    gameTarget={el.gameTarget}
                                    layout={el.layout}
                                    timeline={el.timeline}
                                    enterFrom={el.enterFrom}
                                    exitTo={el.exitTo}
                                    animation={el.animation}
                                    className={el.className}
                                />
                            );
                        }

                        if (el.type === 'character' || el.type === 'title' || el.type === 'background_element') {
                            return (
                                <ScrollBubble
                                    key={el.id}
                                    id={el.id}
                                    layout={el.layout}
                                    timeline={el.timeline}
                                    enterFrom={el.enterFrom}
                                    exitTo={el.exitTo}
                                    animation={el.animation}
                                    className={el.className}
                                >
                                    {el.type === 'title' && (
                                        <div className="bg-white text-black border-4 border-black p-4 font-boom text-4xl uppercase shadow-[var(--shadow-comic)]">
                                            {el.text}
                                        </div>
                                    )}

                                    {el.type === 'background_element' && (
                                        ASSETS.backgrounds[el.assetKey as BackgroundKey]?.endsWith(".mp4") ? (
                                            <video
                                                src={ASSETS.backgrounds[el.assetKey as BackgroundKey]}
                                                autoPlay
                                                loop
                                                muted
                                                className="w-full h-screen object-cover absolute inset-0 z-0"
                                            />
                                        ) : (
                                        <img
                                            src={ASSETS.backgrounds[el.assetKey as BackgroundKey]}
                                            className="w-full h-screen object-cover absolute inset-0 z-0"
                                            alt="Background"
                                        />
                            )
                                    )}

                                    {el.type === 'character' && (
                                        <img
                                            src={ASSETS.characters[el.assetKey as CharacterKey]}
                                            className={`${el.classNameImg || ((el.layout?.width || el.layout?.height) ? 'object-contain' : 'w-80 h-auto')} drop-shadow-[var(--shadow-comic)]`}
                                            style={{
                                                width: el.layout?.width ? '100%' : undefined,
                                                height: el.layout?.height ? '100%' : undefined,
                                            }}
                                            alt="Character"
                                        />
                                    )}
                                </ScrollBubble>
                            );
                        }

                        if (el.type === 'dialogue') {
                            return (
                                <DialoguePop
                                    key={el.id}
                                    id={el.id}
                                    layout={el.layout}
                                    timeline={el.timeline}
                                    enterFrom={el.enterFrom}
                                    exitTo={el.exitTo}
                                    animation={el.animation}
                                    className={el.className}
                                >
                                    <SpeechBubble tailPosition={el.tailPosition || "bottom-left"}>
                                        <ComicText variant="dialogue">{el.text}</ComicText>
                                    </SpeechBubble>
                                </DialoguePop>
                            );
                        }

                        return null;
                    })}
                </ScrollyScene>
            ))}
        </div>
    );
}