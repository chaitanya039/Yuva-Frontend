import React from "react";

const PATHS = {
  wave: "M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z",
  diagonal: "M0,100 L1440,0 L1440,100 L0,100 Z",
  mountain: "M0,100 L720,0 L1440,100 L1440,0 L0,0 Z",
};

const SectionDivider = ({
  type = "wave",
  direction = "vertical", // or "horizontal" or "bottom-right"
  fromColor = "#111111",
  viaColor = "#333333",
  toColor = "#000000",
  solidFill = "#000000",
  flipX = false,
  flipY = false,
}) => {
  const gradientId = `sectionGradient-${type}-${direction}`;
  const isGradient = direction !== "vertical";

  const gradientVector =
    direction === "horizontal"
      ? { x1: "0%", y1: "0%", x2: "100%", y2: "0%" }
      : direction === "bottom-right"
      ? { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }
      : {};

  return (
    <div
      className={`w-full h-[80px] overflow-hidden transform ${flipX ? "scale-x-[-1]" : ""} ${flipY ? "scale-y-[-1]" : ""}`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isGradient && (
          <defs>
            <linearGradient id={gradientId} {...gradientVector}>
              <stop offset="0%" stopColor={fromColor} />
              <stop offset="50%" stopColor={viaColor} />
              <stop offset="100%" stopColor={toColor} />
            </linearGradient>
          </defs>
        )}
        <path
          d={PATHS[type] || PATHS.wave}
          fill={isGradient ? `url(#${gradientId})` : solidFill}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
