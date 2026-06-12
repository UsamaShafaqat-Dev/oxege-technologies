import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi route (URL) change hoga, yeh window ko top par scroll kar dega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
