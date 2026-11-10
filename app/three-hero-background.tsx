"use client";

import { DotMatrixBackground } from "@designcodeio/threeui/components/DotMatrixBackground";
import { useEffect, useState } from "react";

type ThreeHeroBackgroundProps = {
  active: boolean;
};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export default function ThreeHeroBackground({
  active,
}: ThreeHeroBackgroundProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktop = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setEnabled(
        active &&
          desktop.matches &&
          !reducedMotion.matches &&
          supportsWebGL(),
      );
    };

    update();
    reducedMotion.addEventListener("change", update);
    desktop.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, [active]);

  return (
    <div className="three-hero-background" aria-hidden="true">
      {enabled ? (
        <DotMatrixBackground
          speed={0.32}
          gridScale={32}
          mouseAmount={0.015}
          pulseSpeed={0.18}
          radius={0.08}
          opacity={0.32}
          hue={300}
        />
      ) : (
        <span className="three-hero-static" />
      )}
    </div>
  );
}
