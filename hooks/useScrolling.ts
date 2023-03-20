import { useEffect, useState } from "react";

const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset;
      if (currentPosition !== scrollTop) setIsScrolling(true);
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return {
    isScrolling,
    setIsScrolling,
    scrollTop,
    setScrollTop,
  };
};
export default useScrolling;
