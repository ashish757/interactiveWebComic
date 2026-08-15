import ComicText from "./ui/ComicText";
import ComicButton from "./ui/ComicButton";
import { useStore } from "./store/useStore";

export default function LandingPage() {
  const startGame = useStore((state) => state.start);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 text-center overflow-hidden bg-black">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={"/assets/bg/rainbg.mp4"}
      />


      <div className="absolute inset-0 bg-black  animate-fade-out" />

      <div className="relative z-10 max-w-3xl">


        <ComicText variant="boom" size="xl" className="mb-6 text-amber-500">
          WIZARD
        </ComicText>

        <div className="space-y-6 text-left px-6 rounded-lg">
          <ComicText variant="boom" size="lg" className="text-amber-500 text-justify">
            <strong>Explore</strong> how the world of programming can be a magical adventure! In this interactive comic, 
          </ComicText>
          
          <ComicText variant="boom" size="lg" className="text-justify">
            Where your choices shape the story, and your decision unlock new paths.
          </ComicText>
        </div>

        <ComicButton sound={"fah"} onClick={startGame} className="w-full md:w-auto mt-4 cursor-pointer">
          EXPLORE!
        </ComicButton>

      </div>
    </div>
  );
}