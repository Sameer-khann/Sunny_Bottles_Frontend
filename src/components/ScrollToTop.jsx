import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;
      setProgress(percent);
      setShow(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      {show && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
        >
          {/* SVG Progress Ring */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="-rotate-90"
          >
            {/* Background ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
            />

            {/* Progress ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#DCE9A5"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
              className="transition-all duration-300"
            />
          </svg>

          {/* Button (on top) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#FDF2D2] w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
              {/* ▲ */}
              <KeyboardArrowUpIcon className="text-black text-3xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
