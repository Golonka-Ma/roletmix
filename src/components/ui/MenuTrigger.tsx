"use client";

import { motion } from "framer-motion";

interface MenuTriggerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuTrigger = ({ isOpen, setIsOpen }: MenuTriggerProps) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    open: (custom: number) => ({
      rotate: custom === 2 ? 0 : custom === 1 ? 45 : -45,
      y: custom === 2 ? 0 : custom === 1 ? 6 : -10,
      opacity: custom === 2 ? 0 : 1,
    }),
  };

  return (
    <motion.button
      className="fixed top-4 right-4 z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full bg-card border border-border shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Menu"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-0.5 bg-foreground mb-1.5"
        variants={lineVariants}
        custom={1}
      />
      <motion.div
        className="w-6 h-0.5 bg-foreground mb-1.5"
        variants={lineVariants}
        custom={2}
      />
      <motion.div
        className="w-6 h-0.5 bg-foreground"
        variants={lineVariants}
        custom={3}
      />
    </motion.button>
  );
};

export default MenuTrigger; 