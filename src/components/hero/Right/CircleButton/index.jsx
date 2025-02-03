"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function CircleButton() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const circumference = 2 * Math.PI * 45;
    // Initial animation when component mounts
    controls.start({
      strokeDashoffset: isHovered ? circumference : 0,
      transition: { duration: 0.7, ease: "linear" },
    });
  }, [controls, isHovered]);

  return (
    <div
      className="relative _1600:w-[232px] _1600:h-[232px] _1280:w-[212px] _1280:h-[212px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="0.3"
          strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
          animate={controls}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <span className="uppercase _1600:text-base _1280:text-[12px]">
          View All
        </span>
      </div>
    </div>
  );
}
