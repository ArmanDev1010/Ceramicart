import React from "react";

import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function index() {
  return (
    <div className="relative grow bg-white text-white">
      <div
        className={`${playfair_display.className} absolute bottom-0 left-0 z-[2] pointer-events-none 
      _1600:p-[44px_72px] _1280:p-[32px_56px] _900:p-[32px_48px]`}
      >
        <h1 className="leading-[1] font-[400] mb-[40px] _1600:text-[96px] _1280:text-[72px] _900:text-[64px]">
          Old Armenian <br></br> ornaments on clay
        </h1>
        <p className="text-[22px]">
          <i>
            <span>Where beauty </span>
          </i>
          <span>is Limitless</span>
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/assets/video/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 bg-black/20 w-full h-full z-[1]"></div>
    </div>
  );
}
