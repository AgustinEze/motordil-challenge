"use client";
import { useEffect, useState } from "react";

export const useCardCountByBreakpoint = () => {
  const [count, setCount] = useState(2);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCount(3);
      else setCount(2);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
};
