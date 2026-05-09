import React from "react";

interface ArcDialProps {
  lightHours?: number;
  darkHours?: number;
  progress?: number; // 0–1
  size?: number;
}

export function ArcDial({ lightHours = 15, darkHours = 9, progress = 0.62, size = 140 }: ArcDialProps) {
  const cx = size / 2;
  const cy = size / 2 + 10;
  const r = size * 0.38;
  const strokeW = size * 0.055;

  // Arc from -210deg to 30deg (240deg sweep)
  const startAngle = -210;
  const endAngle = 30;
  const totalAngle = endAngle - startAngle; // 240deg

  function polarToCartesian(angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function describeArc(start: number, end: number) {
    const s = polarToCartesian(start);
    const e = polarToCartesian(end);
    const largeArc = end - start > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  }

  const filledEnd = startAngle + totalAngle * progress;
  const dotPos = polarToCartesian(filledEnd);

  return (
    <svg width={size} height={size * 0.82} viewBox={`0 0 ${size} ${size * 0.82}`} fill="none">
      {/* Track */}
      <path
        d={describeArc(startAngle, endAngle)}
        stroke="#1E2620"
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
      />
      {/* Progress arc */}
      <path
        d={describeArc(startAngle, filledEnd)}
        stroke="#4A583D"
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
      />
      {/* Dot */}
      <circle cx={dotPos.x} cy={dotPos.y} r={strokeW * 0.75} fill="#A4B494" />
      {/* Center text */}
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fill="#E8EDE4"
        fontSize={size * 0.13}
        fontFamily="'Geist Mono', monospace"
        fontWeight={600}
      >
        {lightHours}h / {darkHours}h
      </text>
      <text
        x={cx}
        y={cy + size * 0.12}
        textAnchor="middle"
        fill="#6A7E5A"
        fontSize={size * 0.07}
        fontFamily="Inter, sans-serif"
      >
        Light Schedule
      </text>
    </svg>
  );
}
