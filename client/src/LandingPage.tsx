import ComicText from "./ui/ComicText";
import ComicButton from "./ui/ComicButton";
import { useStore } from "./store/useStore";

export default function LandingPage() {
  const startGame = useStore((state) => state.start);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-yellow-400">
      <div className="max-w-3xl bg-white border-4 border-black rounded-3xl p-10 shadow-[var(--shadow-comic)]">
        
        <ComicText variant="caption" className="mb-4 inline-block">
          Interactive Web Comic
        </ComicText>

        <ComicText variant="title" size="xl" className="mb-6">
          [ PROJECT CODENAME ]
        </ComicText>

        <div className="space-y-6 text-left border-t-4 border-b-4 border-black py-6 my-6 bg-gray-50 px-6 rounded-lg">
          <ComicText variant="dialogue" size="md">
            <strong>The Story:</strong> You are [Protagonist Name], a developer trapped in a system of their own creation. To escape, you must navigate through fragmented memories and broken code.
          </ComicText>
          
          <ComicText variant="dialogue" size="md">
            <strong>What to expect:</strong> 
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Solve interactive logic puzzles to unlock the next panel.</li>
              <li>Make choices that permanently alter the story's ending.</li>
              <li>Discover hidden secrets in the terminal.</li>
            </ul>
          </ComicText>
        </div>

        <ComicButton onClick={startGame} className="w-full md:w-auto mt-4">
          START YOUR JOURNEY!
        </ComicButton>

      </div>
    </div>
  );
}