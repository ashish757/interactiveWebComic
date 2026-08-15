import { type ReactNode } from "react";
import { cn } from "../util/cn";

interface SpeechBubbleProps {
  children: ReactNode;
  tailPosition?: "bottom-left" | "bottom-right" | "left" | "right";
  className?: string;
}

export default function SpeechBubble({ 
  children, 
  tailPosition = "bottom-left",
  className 
}: SpeechBubbleProps) {
  const getTailClasses = () => {
    switch (tailPosition) {
      case "bottom-left":
        return "bottom-[-16px] left-8 border-b-4 border-r-4";
      case "bottom-right":
        return "bottom-[-16px] right-8 border-b-4 border-r-4";
      case "left":
        return "left-[-16px] top-1/2 -translate-y-1/2 border-b-4 border-l-4";
      case "right":
        return "right-[-16px] top-1/2 -translate-y-1/2 border-t-4 border-r-4";
      default:
        return "bottom-[-16px] left-8 border-b-4 border-r-4";
    }
  };

  return (
    <div className={cn("relative max-w-md", className)}>
      <div className="relative z-10 bg-white border-4 border-black rounded-2xl p-3 shadow-(--shadow-comic)">
        {children}
      </div>
      
      <div className={cn(
        "absolute z-0 w-8 h-8 bg-white border-black rotate-45",
        getTailClasses()
      )} />
    </div>
  );
}