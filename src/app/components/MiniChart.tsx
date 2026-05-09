import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const temperatureData = [
  { t: "00:00", 'C°': 21.2 },
  { t: "02:00", 'C°': 20.8 },
  { t: "04:00", 'C°': 20.3 },
  { t: "06:00", 'C°': 21.1 },
  { t: "08:00", 'C°': 22.4 },
  { t: "10:00", 'C°': 23.1 },
  { t: "12:00", 'C°': 23.8 },
  { t: "14:00", 'C°': 24.2 },
  { t: "16:00", 'C°': 23.5 },
  { t: "18:00", 'C°': 22.9 },
  { t: "20:00", 'C°': 22.1 },
  { t: "22:00", 'C°': 21.6 },
];

const humidityData = [
  { t: "00:00", 'C°': 62 },
  { t: "02:00", 'C°': 64 },
  { t: "04:00", 'C°': 65 },
  { t: "06:00", 'C°': 63 },
  { t: "08:00", 'C°': 60 },
  { t: "10:00", 'C°': 58 },
  { t: "12:00", 'C°': 57 },
  { t: "14:00", 'C°': 56 },
  { t: "16:00", 'C°': 58 },
  { t: "18:00", 'C°': 61 },
  { t: "20:00", 'C°': 63 },
  { t: "22:00", 'C°': 64 },
];

interface MiniChartProps {
  type?: "temperature" | "humidity";
  height?: number;
  color?: string;
}

export function MiniChart({ type = "temperature", height = 80, color }: MiniChartProps) {
  const data = type === "temperature" ? temperatureData : humidityData;
  const strokeColor = color || (type === "temperature" ? "#73885F" : "#4A583D");
  const fillId = `fill-${type}-${Math.random().toString(36).slice(2)}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={strokeColor} stopOpacity={0.25} />
            <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="t" hide />
        <Tooltip
          contentStyle={{
            background: "#131612",
            border: "1px solid #1E2620",
            borderRadius: 6,
            fontSize: 11,
            color: "#A4B494",
            fontFamily: "'Geist Mono', monospace",
          }}
          itemStyle={{ color: "#A4B494" }}
          labelStyle={{ color: "#6A7E5A" }}
        />
        <Area
          type="monotone"
          dataKey="C°"
          stroke={strokeColor}
          strokeWidth={1.5}
          fill={`url(#${fillId})`}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
