"use client";
import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const SplitText = ({
  children,
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
}) => {
  /* ---------------------------------------
   * Normalize children (support <br />)
   * ------------------------------------- */
  const nodes = Array.isArray(children) ? children : [children];

  const lines = [];
  nodes.forEach((node) => {
    if (typeof node === "string") {
      lines.push(node);
    } else if (node?.type === "br") {
      lines.push(null); // represents line break
    }
  });

  /* ---------------------------------------
   * Convert text to words → letters
   * ------------------------------------- */
  const wordsByLine = lines.map((line) =>
    typeof line === "string"
      ? line.split(" ").map((word) => word.split(""))
      : null
  );

  const letters = wordsByLine
    .filter(Boolean)
    .flat()
    .flat();

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  /* ---------------------------------------
   * Intersection Observer
   * ------------------------------------- */
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  /* ---------------------------------------
   * Animations
   * ------------------------------------- */
  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  /* ---------------------------------------
   * Render
   * ------------------------------------- */
  let globalIndex = 0;

  return (
    <span
      ref={ref}
      className={`split-parent title split-text ${className}`}
      style={{
        textAlign,
        lineHeight: "1.1", // 👈 prevents large vertical gaps
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
      }}
    >
      {wordsByLine.map((words, lineIndex) => {
        // Render <br /> ONLY when it exists in original text
        if (!words) {
          return <br key={lineIndex} />;
        }

        return (
          <span key={lineIndex}>
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {word.map((letter) => {
                  const style = springs[globalIndex];
                  globalIndex += 1;

                  return (
                    <animated.span
                      key={globalIndex}
                      style={{
                        ...style,
                        display: "inline-block",
                        willChange: "transform, opacity",
                      }}
                    >
                      {letter}
                    </animated.span>
                  );
                })}
                {/* space between words */}
                <span style={{ display: "inline-block", width: "0.3em" }}>
                  &nbsp;
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
