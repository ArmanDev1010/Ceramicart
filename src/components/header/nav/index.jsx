"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "1.jpg",
  },
  {
    title: "Shop",
    href: "/shop",
    src: "2.jpg",
  },
  {
    title: "About Us",
    href: "/about",
    src: "3.jpg",
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "4.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "5.jpg",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex gap-[50px] mb-[80px] _1080:mb-0 _1080:justify-between">
        <div className="flex flex-col justify-between">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
