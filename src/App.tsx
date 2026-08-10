import LandingPage from './LandingPage';
import ScrollyScene from './comic/ScrollyScene';
import ScrollBubble from './comic/ScrollBubble';
import SpeechBubble from './ui/SpeechBubble';
import ComicText from './ui/ComicText';
import { useStore } from './store/useStore';
import storyDataRaw from './data/storyConfig.json';
import { ASSETS, type BackgroundKey, type CharacterKey } from './data/assets';
import DialoguePop from "./comic/DialougePop.tsx";

export type TimelinePhase = [number, number]; // [start, end] usually 0 to duration

export type AnimationType = 'bottom' | 'top' | 'left' | 'right' | 'fade' | 'pop' | 'none';

export type TimelineConfig = {
    enter?: TimelinePhase;
    stay?: TimelinePhase;
    exit?: TimelinePhase;
};

export type StoryElement = {
    id: string;
    type: string;
    layout: { top?: string; bottom?: string; left?: string; right?: string; transform?: string };
    timeline: TimelineConfig;
    enterFrom?: AnimationType;
    exitTo?: AnimationType;
    
    assetKey?: string;
    widthClass?: string;
    
    text?: string;
    speaker?: string;
    tailPosition?: "bottom-left" | "bottom-right" | 'left' | 'right';
};

export type Scene = {
    sceneId: number;
    duration: number;
    baseBackground: string;
    elements: StoryElement[];
};

const storyData = storyDataRaw as Scene[];

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

                    {/* 3. Map over elements ONLY ONCE per scene */}
                    {scene.elements.map((el) => {

                        // --- RENDER PARALLAX ELEMENTS (Titles, Backgrounds, Characters) ---
                        if (el.type === 'character' || el.type === 'title' || el.type === 'background_element') {
                            return (
                                <ScrollBubble
                                    key={el.id}
                                    id={el.id}
                                    layout={el.layout}
                                    timeline={el.timeline}
                                    enterFrom={el.enterFrom}
                                    exitTo={el.exitTo}
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
                                            className={`${el.widthClass || 'w-80'} h-auto drop-shadow-[var(--shadow-comic)]`}
                                            alt="Character"
                                        />
                                    )}
                                </ScrollBubble>
                            );
                        }

                        // --- RENDER POP-IN ELEMENTS (Dialogues) ---
                        if (el.type === 'dialogue') {
                            return (
                                <DialoguePop
                                    key={el.id}
                                    id={el.id}
                                    layout={el.layout}
                                    timeline={el.timeline}
                                    enterFrom={el.enterFrom}
                                    exitTo={el.exitTo}
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