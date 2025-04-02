import { cn } from "@/app/lib/cn";

interface GridButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
}

export function GridButton({ onClick, children, className }: GridButtonProps) {
  return (
    <button
      className={cn(
        "bg-white border border-red-900/30 backdrop-blur-3xl bg-opacity-10 rounded hover:bg-opacity-80 hover:backdrop-blur-0 hover:text-black duration-200",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
