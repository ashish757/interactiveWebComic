import { type ReactNode } from "react";
import { cn } from "../util/cn";

interface SpeechBubbleProps {
  children: ReactNode;
  tailPosition?: "bottom-left" | "bottom-right";
  className?: string;
}

export default function SpeechBubble({ 
  children, 
  tailPosition = "bottom-left",
  className 
}: SpeechBubbleProps) {
  return (
    <div className={cn("relative flex flex-col max-w-md", className)}>
      <div className="relative z-10 bg-white border-4 border-black rounded-2xl p-5 shadow-[var(--shadow-comic)]">
        {children}
      </div>
      
      <div className={cn(
        "relative z-0 w-8 h-8 bg-white border-b-4 border-r-4 border-black translate-y-[-18px]",
        tailPosition === "bottom-left" ? "self-start ml-8 rotate-45" : "self-end mr-8 rotate-45"
      )} />
    </div>
  );
}