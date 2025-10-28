"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center font-[Poppins]">
      {/* Top Accent Box */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#ff7b00bb] opacity-[0.9] rounded-md flex items-center"
      >
        <SparklesIcon className="text-[#ffb84d] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] text-gray-200 font-light tracking-wide">
          blending web and machine learning.
        </h1>
      </motion.div>

      {/* Main Title */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-semibold mt-[10px] text-center mb-[15px] leading-tight"
      >
        Dream it. Code it. Ship it.
      </motion.div>

      {/* Subtext */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-300 mb-10 mt-[10px] text-center font-[Inter] tracking-wide"
      >
        Never miss a task, deadline or idea.
      </motion.div>
    </div>
  );
};
