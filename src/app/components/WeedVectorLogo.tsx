import React from "react";
import svgPaths from "../../imports/Vector-1/svg-n6htavimu2";

interface WeedVectorLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export function WeedVectorLogo({ size = 32, color = "#f0f0f0", className = "" }: WeedVectorLogoProps) {
  // Original viewBox: 0 0 50.8215 54.6177
  // We scale height proportionally to the size (width-based)
  const aspectRatio = 54.6177 / 50.8215;
  const height = Math.round(size * aspectRatio);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 50.8215 54.6177"
      fill="none"
      className={className}
      style={{ display: "block" }}
    >
      <path
        d={svgPaths.p107b2a00}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
