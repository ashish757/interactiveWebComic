import { type ReactNode } from "react";
import { cn } from "../util/cn";

interface ScrollySceneProps {
  height?: string; 
  backgroundClass?: string; 
  children: ReactNode;
}

export default function ScrollyScene({ 
  height = "300vh", 
  backgroundClass = "bg-slate-900",
  children 
}: ScrollySceneProps) {
  return (
    <div className="relative w-full" style={{ height }}>
      
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <div className={cn("absolute inset-0 w-full h-full transition-colors duration-1000", backgroundClass)}>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {children}
      </div>
      
    </div>
  );
}