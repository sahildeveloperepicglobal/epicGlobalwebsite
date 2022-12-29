import React from "react";
/**
 * Custom Hook for sticky elements
 * @returns `[sticky, ref]`;
 */
const useSticky = <T extends HTMLDivElement>(
  options?: IntersectionObserverInit | undefined
) => {
  const ref = React.useRef<T>(null);
  const [sticky, setSticky] = React.useState(false);

  // mount
  React.useEffect(() => {
    const cachedRef = ref.current as Element;
    const observer = new IntersectionObserver(
      ([e]) => setSticky(e.intersectionRatio < 1),
      {
        threshold: [0.6],
        ...options,
        // rootMargin: "-2px 0px 0px 0px", // alternativly, use this and set `top:0` in the CSS
      }
    );
    observer.observe(cachedRef);
    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, [options]);

  return [sticky, ref] as const;
};

export default useSticky;
