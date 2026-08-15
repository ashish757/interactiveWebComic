import LandingPage from './LandingPage';
import ScrollyScene from './comic/ScrollyScene';
import ScrollBubble from './comic/ScrollBubble';
import SpeechBubble from './ui/SpeechBubble';
import ComicText from './ui/ComicText';
import ComicActionButton from './comic/ComicActionButton';
import SnakeGame from './comic/SnakeGame';
import SimonGame from './comic/SimonGame';
import AudioPlayer from './comic/AudioPlayer';
import { useStore } from './store/useStore';
import { storyData } from './data/storyConfig';
import type {Scene} from './types/storyConfig.type';
import { ASSETS, type BackgroundKey, type CharacterKey } from './data/assets';
import DialoguePop from "./comic/DialougePop.tsx";
import CaptionText from "./ui/CaptionText.tsx";

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

                        else if (el.type === 'character' || el.type === 'background_element') {
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

                        else if (el.type === 'dialogue' || el.type === 'boom' || el.type === 'title') {
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
                                    { el.type === "title" &&  <ComicText variant="title" size={el.size}>{el.text}</ComicText> }
                                    {
                                        el.type === "dialogue" && (<SpeechBubble tailPosition={el.tailPosition || "bottom-left"}>
                                            <ComicText variant="dialogue">{el.text}</ComicText>
                                        </SpeechBubble>)
                                     }
                                </DialoguePop>
                            );
                        } else if (el.type === 'caption') {
                            return <CaptionText size={el.size}>{el.text}</CaptionText>


                        } else if (el.type === 'audio' && el.assetKey) {
                            return (
                                <AudioPlayer
                                    key={el.id}
                                    id={el.id}
                                    assetKey={el.assetKey}
                                    timeline={el.timeline}
                                />
                            );
                        }

                        return null;
                    })}
                </ScrollyScene>
            ))}
        </div>
    );
}