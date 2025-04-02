import { cn } from "@/app/lib/cn";

interface Gradient {
  className?: string;
}

export function Gradient({ className = "" }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0  from-transparent to-black opacity-95  z-[2]",
        className
      )}
    ></div>
  );
}
