"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const LogoGenerateEffect = ({
  className,
  filter = true,
  duration = 0.5,
}: {
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(
      "div.logo-container",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
      }
    );
  }, [scope.current, animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div ref={scope}>
          <motion.div
            className="logo-container opacity-0 inline-block"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            <Image 
              src="/images/logo-light.svg" 
              alt="Rolet-Mix" 
              width={386} 
              height={100} 
              priority
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            className="opacity-0"
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl mt-4">Precyzja w każdym detalu.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogoGenerateEffect; 