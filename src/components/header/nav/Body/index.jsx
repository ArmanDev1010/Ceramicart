import { motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "../../anim";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="flex flex-wrap mt-[40px] _1080:max-w-[1280px] _1080:mt-[80px]">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            key={`l_${index}`}
            href={href}
            className="text-black text-none uppercase"
          >
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              className="m-0 flex overflow-hidden text-[32px] pr-[30px] pt-[10px] font-[300] _1080:text-[5vw] _1080:pr-[2vw]"
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
