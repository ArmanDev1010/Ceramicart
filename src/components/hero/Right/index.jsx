import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import CircleButton from "./CircleButton";
import Image from "next/image";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function index() {
  return (
    <div className="relative bg-[rgb(35,35,35)] text-white h-full _1600:w-[800px] _1280:w-[600px]">
      <div
        className="flex items-center flex-col h-full text-center 
      _1600:p-[50px_72px_20px] _1280:p-[50px_56px_10px]"
      >
        <h5 className="opacity-30 mb-[24px] text-[13px] pointer-events-none">
          01-03
        </h5>
        <h2
          className={`${playfair_display.className} text-[64px] italic pointer-events-none`}
        >
          Tea Mugs
        </h2>
        <Link href={"./"} className="flex justify-center pointer-events-auto">
          <CircleButton />
        </Link>
        <div className="aspect-[1/0.7] mt-auto overflow-hidden relative w-[272px] mb-[30px]">
          <Image
            src={`/assets/images/4.jpg`}
            fill={true}
            alt="Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between self-stretch _1600:gap-[40px] _1280:gap-[30px]">
          {["before", "line", "next"].map((text, key) =>
            text !== "line" ? (
              <div
                className="flex items-center justify-center overflow-hidden cursor-pointer"
                key={key}
              >
                <svg
                  width="43"
                  height="8"
                  viewBox="0 0 43 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[96px] p-[36px] w-[128px]"
                  data-v-c993bb50=""
                >
                  <path
                    d={
                      text == "before"
                        ? "M0.646446 4.35356C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.46447C4.02369 0.269207 4.34027 0.269207 4.53553 0.464469C4.7308 0.659732 4.7308 0.976314 4.53553 1.17158L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34028 4.53553 7.53554C4.34027 7.7308 4.02369 7.7308 3.82843 7.53554L0.646446 4.35356ZM43 4.5L1 4.5L1 3.5L43 3.5L43 4.5Z"
                        : "M42.3536 4.35356C42.5488 4.15829 42.5488 3.84171 42.3536 3.64645L39.1716 0.46447C38.9763 0.269207 38.6597 0.269207 38.4645 0.464469C38.2692 0.659732 38.2692 0.976314 38.4645 1.17158L41.2929 4L38.4645 6.82843C38.2692 7.02369 38.2692 7.34028 38.4645 7.53554C38.6597 7.7308 38.9763 7.7308 39.1716 7.53554L42.3536 4.35356ZM-4.37114e-08 4.5L42 4.5L42 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    }
                    style={{ fill: "#E1DCD7" }}
                    data-v-c993bb50=""
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bg-[#e0dbd633] grow h-[1px] min-w-[100px] relative _1600:max-w-[328px] _1280:max-w-[244px]"
                key={key}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
