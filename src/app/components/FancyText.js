"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function FancyText() {
  const fancyTextRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {
      const split = new SplitText(fancyTextRef.current, {
        type: "chars",
      });

      gsap.fromTo(
        split.chars,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          stagger: 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: fancyTextRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }, fancyTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={fancyTextRef} className="white">
      A technically strong, globally capable and reliable precision
      engineering and manufacturing partner for OEMs and industrial
      customers.
    </div>
  );
}