import { type ReactNode } from "react";
import { cn } from "../util/cn";
import { audioEngine } from "../util/audioEngine";

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  sound?: import("../data/assets").AudioKey | "none";
}


export default function ComicButton({ 
  children, 
  variant = "primary",
  sound = "click",
  className,
  onClick,
  ...props 
}: ComicButtonProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (sound !== "none") {
      audioEngine.play(sound);
    }
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={cn(
        "font-boom text-2xl tracking-wide px-8 py-4 border-4 border-black rounded-xl transition-all active:translate-y-1 active:translate-x-1",
        variant === "primary" ? "bg-red-500 text-white shadow-(--shadow-comic) hover:shadow-(--shadow-comic-hover) hover:translate-y-1 hover:translate-x-1" : "bg-white text-black shadow-(--shadow-comic) hover:shadow-(--shadow-comic-hover) hover:translate-y-1 hover:translate-x-1",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}