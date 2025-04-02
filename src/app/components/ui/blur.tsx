import { cn } from "@/app/lib/cn";

interface BlurProps {
  className?: string;
  top: number;
  left: number;
}

export function Blur({ className, top, left }: BlurProps) {
  return (
    <div className={cn("relative w-10 h-10", className)}>
      <div
        style={{ top: top, left: left }}
        className="z-[-1] absolute w-[180px] h-[180px]  md:h-[250px] md:w-[250px] bg-primary native-blur blur-[120px] md:blur-[250px] "
      />
      <div className="z-[-1] absolute top-50 left-0 h-full w-full " />
    </div>
  );
}
