import ComicText from "./ui/ComicText";
import ComicButton from "./ui/ComicButton";
import { useStore } from "./store/useStore";
import {useState} from "react";

export default function LandingPage() {
  const startGame = useStore((state) => state.start)
    const [modalActive, setModalActive] = useState(false);

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


        <ComicText variant="boom" size={"xl"} className="mb-6 text-amber-500 " >
          WIZARD and THE PROPHECY
        </ComicText>

        <div className="space-y-14 text-left px-6 rounded-lg">
          <ComicText variant="boom" size="lg" className="text-amber-500 text-center">
            <strong>Explore</strong> The wizarding world suffering the wrath of a dark mighty wizard vs the boy who lived.
          </ComicText>
          

        </div>

        <ComicButton sound={"fah"} onClick={() => setModalActive(true)} className="w-full md:w-auto mt-4 cursor-pointer">
          START!
        </ComicButton>





          {modalActive && <div className="absolute space-y-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-fit flex-col items-center justify-center bg-amber-900 p-4 shadow-comic text-shadow-comic">


              <ComicText variant="boom" size="lg" className="text-amber-500">
                  This Comic features Scroll Based animation, please sroll down slowly to enjoy the experience.
              </ComicText>


              <ComicText variant="boom" size="lg" className="text-justify">
                  Where your choices shape the story, and your decision unlock new paths.
              </ComicText>



              <ComicButton onClick={startGame} className="w-full md:w-auto mt-4 cursor-pointer">
                  EXPLORE!
              </ComicButton>


              <div>
                  <a href={"https://github.com/ashish757"} className={"text-blue-100 underline"}>
                  Creator
              </a>

              </div>

          </div>

          }


      </div>
    </div>
  );
}