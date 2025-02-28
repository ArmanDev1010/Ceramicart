export default function NavBtns({ progress, handlePrev, handleNext }) {
  return (
    <div className="flex items-center justify-between self-stretch _1600:gap-[40px] _1280:gap-[30px]">
      {["before", "line", "next"].map((text, key) =>
        text !== "line" ? (
          <div
            className="flex items-center justify-center overflow-hidden cursor-pointer"
            key={key}
            onClick={text === "before" ? handlePrev : handleNext}
          >
            <svg
              width="43"
              height="8"
              viewBox="0 0 43 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="_1600:h-[96px] _1600:p-[36px] _1600:w-[128px] _1280:h-[70px] _1280:p-[30px] _1280:w-[102px]"
            >
              <path
                d={
                  text === "before"
                    ? "M0.646446 4.35356C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.46447C4.02369 0.269207 4.34027 0.269207 4.53553 0.464469C4.7308 0.659732 4.7308 0.976314 4.53553 1.17158L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34028 4.53553 7.53554C4.34027 7.7308 4.02369 7.7308 3.82843 7.53554L0.646446 4.35356ZM43 4.5L1 4.5L1 3.5L43 3.5L43 4.5Z"
                    : "M42.3536 4.35356C42.5488 4.15829 42.5488 3.84171 42.3536 3.64645L39.1716 0.46447C38.9763 0.269207 38.6597 0.269207 38.4645 0.464469C38.2692 0.659732 38.2692 0.976314 38.4645 1.17158L41.2929 4L38.4645 6.82843C38.2692 7.02369 38.2692 7.34028 38.4645 7.53554C38.6597 7.7308 38.9763 7.7308 39.1716 7.53554L42.3536 4.35356ZM-4.37114e-08 4.5L42 4.5L42 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                }
                style={{ fill: "#E1DCD7" }}
              ></path>
            </svg>
          </div>
        ) : (
          <div
            className="bg-[#e0dbd633] grow h-[1px] min-w-[100px] relative"
            key={key}
          >
            <div
              className="h-full bg-white"
              style={{
                width: `${progress * 100}%`,
                transition: progress === 0 ? "none" : "width 0.05s linear",
              }}
            ></div>
          </div>
        )
      )}
    </div>
  );
}
