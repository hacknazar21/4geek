import { useEffect, useState } from "react";

export const useMobile = () => {
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 834);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 834);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile,
    width,
  };
};
