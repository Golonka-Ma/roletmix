"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiAlertCircle } from "react-icons/fi";
import MagicButton from "@/components/ui/MagicButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const NotFoundPage = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-0" />
      
      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Error icon with animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FiAlertCircle className="w-24 h-24 text-primary" />
          </motion.div>
        </motion.div>

        {/* 404 heading */}
        <motion.h1
          variants={itemVariants}
          className="text-8xl font-bold tracking-tight text-foreground mb-4 sm:text-9xl"
        >
          404
        </motion.h1>

        {/* Error message */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-foreground mb-4 sm:text-3xl"
        >
          Strona nie została znaleziona
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base text-gray-400 mb-8 max-w-md sm:text-lg"
        >
          Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
        </motion.p>

        {/* Back to home button */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <MagicButton href="/">
              <div className="flex items-center gap-2">
                <FiHome className="w-5 h-5" />
                <span>Powrót do strony głównej</span>
              </div>
            </MagicButton>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-sm text-gray-500"
        >
          <p>
            Możesz również skontaktować się z nami, jeśli potrzebujesz pomocy.
          </p>
        </motion.div>
      </motion.div>

      {/* Animated background dots */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-2 h-2 bg-secondary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-40 w-2 h-2 bg-amber-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
    </div>
  );
};

export default NotFoundPage;

