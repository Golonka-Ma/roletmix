"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface MagicButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const MagicButton = ({
  children,
  href,
  className,
}: MagicButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} passHref>
      <motion.div
        className={cn(
          "relative inline-flex h-12 overflow-hidden rounded-full p-[1px]",
          "bg-gradient-to-r from-primary via-secondary to-primary",
          "bg-[size:400%_100%]",
          className
        )}
        animate={{
          backgroundPosition: hovered ? ["0% 0%", "100% 0%"] : "0% 0%",
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className={cn(
            "flex h-full w-full items-center justify-center rounded-full px-6 font-medium",
            "bg-card text-foreground transition-all duration-300",
            "hover:bg-opacity-80"
          )}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default MagicButton; 