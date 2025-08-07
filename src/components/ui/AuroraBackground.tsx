"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  containerClassName?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  containerClassName,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground",
        containerClassName
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#FF1818 5%,#ff5e5e 15%,#0085FF 25%,#66b5ff 35%,#FF1818 45%)",
            "--aurora-2":
              "repeating-linear-gradient(200deg,#0085FF 10%,#66b5ff 20%,#FF1818 30%,#ff5e5e 40%,#0085FF 50%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#0A0A0A 0%,#0A0A0A 5%,transparent 10%,transparent 15%,#0A0A0A 20%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#F5F5F5 0%,#F5F5F5 5%,transparent 10%,transparent 15%,#F5F5F5 20%)",
          } as React.CSSProperties
        }
      >
        {/* Primary Aurora Layer */}
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] 
            [background-image:var(--dark-gradient),var(--aurora)] 
            [background-size:200%,_200%] 
            [background-position:50%_50%,50%_50%] 
            opacity-60 
            blur-[8px] 
            filter 
            will-change-transform 
            after:absolute 
            after:inset-0 
            after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:[background-attachment:fixed] 
            after:mix-blend-difference 
            after:animate-aurora
            after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,transparent_70%)]`,
            className
          )}
        ></div>

        {/* Secondary Aurora Layer with different direction */}
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] 
            [background-image:var(--dark-gradient),var(--aurora-2)] 
            [background-size:200%,_200%] 
            [background-position:50%_50%,50%_50%] 
            opacity-40 
            blur-[12px] 
            filter 
            will-change-transform 
            animate-aurora
            mix-blend-overlay`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_0%_100%,black_20%,transparent_70%)]`
          )}
          style={{ animationDelay: "-5s", animationDuration: "25s" }}
        ></div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default AuroraBackground; 