"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const spores = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: `${(index % 8) * 0.45}s`,
  duration: `${8 + (index % 7)}s`
}));

export default function LivingWorldBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 16;
      setOffset({ x, y });
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="living-world-bg"
      style={{ "--world-x": `${offset.x}px`, "--world-y": `${offset.y}px` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="living-world-bg__pulse" />
      <div className="living-world-bg__roots" />
      <div className="living-world-bg__fog living-world-bg__fog--one" />
      <div className="living-world-bg__fog living-world-bg__fog--two" />
      <div className="living-world-bg__vignette" />
      {spores.map((spore) => (
        <span
          key={spore.id}
          className="floating-spore"
          style={{
            left: spore.left,
            top: spore.top,
            width: spore.size,
            height: spore.size,
            animationDelay: spore.delay,
            animationDuration: spore.duration
          }}
        />
      ))}
    </div>
  );
}
