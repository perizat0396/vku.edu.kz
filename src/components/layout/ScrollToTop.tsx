import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router doesn't restore scroll position on navigation. Jump to the
 * top on every route change, but leave in-page hash navigation (e.g. a
 * click on the home page's own #stats anchor) to the browser as usual.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
