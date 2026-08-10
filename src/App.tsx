import LandingPage from './LandingPage';
import ScrollyScene from './comic/ScrollyScene';
import ScrollBubble from './comic/ScrollBubble';
import SpeechBubble from './ui/SpeechBubble';
import ComicText from './ui/ComicText';
import { useStore } from './store/useStore';

export default function App() {
  const hasStarted = useStore((state) => state.hasStarted);

  if (!hasStarted) {
    return <LandingPage />;
  }

  return (
    <div className="bg-black text-white">
      <ScrollyScene height="300vh" backgroundClass="bg-gradient-to-b from-blue-900 to-black">
        
      <ScrollBubble id="bubble-1" top="10%" left="10%">
        <SpeechBubble tailPosition="bottom-left">
          <ComicText variant="dialogue">A distant memory...</ComicText>
        </SpeechBubble>
      </ScrollBubble>

      <ScrollBubble id="puzzle-1" top="40%" left="50%">
        <div className="bg-red-500 border-4 border-black p-8">
          <ComicText variant="boom">FAST ACTION!</ComicText>
        </div>
      </ScrollBubble>

        <ScrollBubble id="puzzle-1" top="70%" left="30%">
          <div className="bg-red-500 border-4 border-black p-8 shadow-[var(--shadow-comic)] rotate-3">
            <ComicText variant="boom" size="lg" className="text-white">
              INTERACTIVE PUZZLE!
            </ComicText>
            <button className="mt-4 bg-black text-white px-4 py-2 font-bold w-full active:scale-95 cursor-pointer">
              Click Me
            </button>
          </div>
        </ScrollBubble>

      </ScrollyScene>
    </div>
  );
}