import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/metaPixel";

export default function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    // fire on every route change
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
