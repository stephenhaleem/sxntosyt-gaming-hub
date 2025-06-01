import React, { useEffect, useRef, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isTouchDevice()) {
      setShowCursor(false);
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      if (followerRef.current) {
        followerRef.current.style.left = `${clientX}px`;
        followerRef.current.style.top = `${clientY}px`;
      }
    };

    const onMouseEnter = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        typeof target.closest === "function" &&
        target.closest('button, a, [role="button"], .clickable')
      ) {
        cursorRef.current?.classList.add("cursor-hover");
        followerRef.current?.classList.add("follower-hover");
      }
    };

    const onMouseLeave = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        typeof target.closest === "function" &&
        target.closest('button, a, [role="button"], .clickable')
      ) {
        cursorRef.current?.classList.remove("cursor-hover");
        followerRef.current?.classList.remove("follower-hover");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 bg-gaming-purple rounded-full mix-blend-difference transition-transform duration-150"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 border border-gaming-purple rounded-full mix-blend-difference transition-transform duration-300"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
