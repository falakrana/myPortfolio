import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  const cursorOutlineClasses = `cursor-dot-outline ${hidden ? "opacity-0" : "opacity-100"} ${
    clicked ? "scale-75" : ""
  } ${linkHovered ? "scale-150" : ""}`;

  const cursorDotClasses = `cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${
    clicked ? "scale-75" : ""
  } ${linkHovered ? "scale-0" : ""}`;

  return (
    <>
      <div
        className={cursorOutlineClasses}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out",
          backgroundColor: linkHovered ? "rgba(79, 70, 229, 0.4)" : "rgba(79, 70, 229, 0.2)"
        }}
      />
      <div
        className={cursorDotClasses}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${clicked ? 0.5 : linkHovered ? 0 : 1})`,
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out"
        }}
      />
    </>
  );
}

export default CustomCursor; 