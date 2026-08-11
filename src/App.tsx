import LandingPage from './LandingPage';
import ScrollyScene from './comic/ScrollyScene';
import ScrollBubble from './comic/ScrollBubble';
import SpeechBubble from './ui/SpeechBubble';
import ComicText from './ui/ComicText';
import { useStore } from './store/useStore';
import {storyData} from './data/storyConfig';
import { ASSETS, type BackgroundKey, type CharacterKey } from './data/assets';
import DialoguePop from "./comic/DialougePop.tsx";


export default function App() {
    const hasStarted = useStore((state) => state.hasStarted);

    if (!hasStarted) {
        return <LandingPage />;
    }

    return (
        <div className="bg-black text-white w-full">
            {storyData.map((scene) => (
                <ScrollyScene
                    key={scene.sceneId}
                    duration={scene.duration}
                    backgroundClass={scene.baseBackground !== 'none' ? `bg-[url('${ASSETS.backgrounds[scene.baseBackground as BackgroundKey]}')] bg-cover bg-center` : 'bg-black'}
                >

                    {scene.elements.map((el) => {

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
                                        <img
                                            src={ASSETS.backgrounds[el.assetKey as BackgroundKey]}
                                            className="w-full h-screen object-cover absolute inset-0 z-0"
                                            alt="Background"
                                        />
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