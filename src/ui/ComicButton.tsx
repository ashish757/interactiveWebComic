import { type ReactNode } from "react";
import { cn } from "../util/cn";

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function ComicButton({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}: ComicButtonProps) {
  return (
    <button 
      className={cn(
        "font-boom text-2xl tracking-wide px-8 py-4 border-4 border-black rounded-xl transition-all active:translate-y-1 active:translate-x-1",
        variant === "primary" ? "bg-red-500 text-white shadow-[var(--shadow-comic)] hover:shadow-[var(--shadow-comic-hover)] hover:translate-y-1 hover:translate-x-1" : "bg-white text-black shadow-[var(--shadow-comic)] hover:shadow-[var(--shadow-comic-hover)] hover:translate-y-1 hover:translate-x-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}