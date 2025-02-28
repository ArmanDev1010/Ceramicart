import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageSwiper({ data, activeIndex }) {
  return (
    <div className="aspect-[1/0.7] mt-auto overflow-hidden relative w-[272px] mb-[30px]">
      <div className="relative w-full h-full overflow-hidden">
        {data.map((item, index) => (
          <motion.div
            key={item.src}
            initial={{ y: index === activeIndex ? 0 : "100%" }}
            animate={{ y: index === activeIndex ? 0 : "100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute w-full h-full ${
              index === activeIndex ? "z-10" : "z-0"
            }`}
          >
            <Image
              src={`/assets/swiper_images/${item.src}.jpg`}
              fill={true}
              alt={item.title}
              className="w-full h-full bg-[#E6E0CC] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
