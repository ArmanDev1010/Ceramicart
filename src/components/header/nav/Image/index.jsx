import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "../../anim";

export default function Index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className="hidden _1080:block _1080:w-[500px] _1080:h-[450px] _1080:relative"
    >
      <Image
        src={`/assets/images/${src}`}
        fill={true}
        alt="image"
        className="object-cover"
      />
    </motion.div>
  );
}
