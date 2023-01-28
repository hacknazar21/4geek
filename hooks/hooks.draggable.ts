import { useEffect, useRef, useState } from "react";

export const useDraggableScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let position = {
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  };
  useEffect(() => {
    if (!!containerRef.current) {
      containerRef.current.addEventListener("mousedown", mouseDownHandler);
      containerRef.current.addEventListener("mouseleave", mouseLeaveHandler);
    }
  }, [containerRef]);
  const mouseDownHandler = function (e) {
    position = {
      left: containerRef.current.scrollLeft,
      top: containerRef.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
    // Change the cursor and prevent user from selecting the text
    containerRef.current.classList.add("grabbing");
    containerRef.current.addEventListener("mousemove", mouseMoveHandler);
    containerRef.current.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - position.x;
    const dy = e.clientY - position.y;
    // Scroll the element
    containerRef.current.scrollTop = position.top - dy;
    containerRef.current.scrollLeft = position.left - dx;
  };
  const mouseUpHandler = function () {
    containerRef.current.removeEventListener("mousemove", mouseMoveHandler);
    containerRef.current.removeEventListener("mouseup", mouseUpHandler);
    containerRef.current.classList.remove("grabbing");
  };
  const mouseLeaveHandler = function () {
    containerRef.current.removeEventListener("mousemove", mouseMoveHandler);
    containerRef.current.removeEventListener("mouseup", mouseUpHandler);
    containerRef.current.classList.remove("grabbing");
  };
  return {
    containerRef,
  };
};
