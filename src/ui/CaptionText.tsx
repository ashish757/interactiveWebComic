import { type ReactNode } from "react";

interface CaptionTextProps {
  children: ReactNode;
  size?:  "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function CaptionText({
  children, 
  size = "sm",
  className 
}: CaptionTextProps) {

  const caption = "font-mono text-white bg-black px-2 py-1 uppercase tracking-tight";

  const sizes = {
    sm: "text-sm",
    md: "text-base md:text-lg",
    lg: "text-2xl md:text-4xl",
    xl: "text-5xl md:text-7xl",
  };

  return (
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-max ${caption} ${sizes[size]} ${className}`}>
          {children}
        </div>
  );
}