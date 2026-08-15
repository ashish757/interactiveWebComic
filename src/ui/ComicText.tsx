import { type ReactNode } from "react";
import { cn } from "../util/cn";

interface ComicTextProps {
  children: ReactNode;
  variant?: "dialogue" | "boom" | "caption" | "title";
  size?:  "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function ComicText({ 
  children, 
  variant = "dialogue", 
  size,
  className 
}: ComicTextProps) {

  if(variant === "dialogue") {
    size = size || "md"
  }
  if(variant === "title") {
    size = size || "lg"
  } else {
    size = size || "md"
  }
  const variants = {
    dialogue: "font-dialogue text-gray-900 leading-snug font-semibold p-0 ",
    boom: "font-boom text-red-500 uppercase tracking-widest text-shadow-comic",
    caption: "font-mono text-white bg-black px-2 py-1 uppercase tracking-tight",
    title: "bg-white text-black border-4 border-black p-4 font-boom uppercase shadow-[var(--shadow-comic)]",
  }

  const sizes = {
    sm: "text-sm",
    md: "text-base md:text-lg",
    lg: "text-2xl md:text-4xl",
    xl: "text-5xl md:text-7xl",
  };

  return (
    <div className={cn(
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </div>
  );
}