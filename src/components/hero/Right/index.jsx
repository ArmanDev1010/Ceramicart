"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import CircleButton from "./CircleButton";
import ImageSwiper from "./ImageSwiper";
import NavBtns from "./NavBtns";

import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const data = [
  { title: "Tea Mugs", src: "1" },
  { title: "Kitchen Accessories", src: "2" },
  { title: "Flower Mugs", src: "3" },
  { title: "Toys", src: "4" },
];

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayTimer = useRef(null);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
      setProgress(0);
    }, 5000);
  }, []);

  useEffect(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
          return 0;
        }
        return prev + 0.01;
      });
    }, 50);

    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(autoplayTimer.current);
    };
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    setProgress(0);
    resetAutoplay();
  }, [resetAutoplay]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % data.length);
    setProgress(0);
    resetAutoplay();
  }, [resetAutoplay]);

  return (
    <div className="relative bg-[rgb(35,35,35)] text-white h-full _1600:w-[800px] _1280:w-[600px]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-[2] flex justify-between items-center flex-col w-full h-full text-center 
        _1600:p-[70px_72px_20px] _1280:p-[50px_46px_10px]"
      >
        <div className="pb-[40px]">
          <h5 className="opacity-30 pointer-events-none _1600:text-base _1600:mb-[32px] _1280:text-[14px] _1280:mb-[14px]">
            <span>{activeIndex + 1}</span> - <span>{data.length}</span>
          </h5>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`${playfair_display.className} italic pointer-events-none _1600:text-[64px] _1280:text-[54px]`}
              >
                {data[activeIndex].title}
              </motion.h2>
            </AnimatePresence>
          </div>
          <Link href={"./"} className="flex justify-center pointer-events-auto">
            <CircleButton />
          </Link>
        </div>

        <ImageSwiper data={data} activeIndex={activeIndex} />
        <NavBtns
          handlePrev={handlePrev}
          handleNext={handleNext}
          progress={progress}
        />
      </div>
    </div>
  );
}
