import React from "react";
import { ArcDial } from "./ArcDial";
import { MiniChart } from "./MiniChart";
import { RefreshCw, Camera } from "lucide-react";
import {WeedVectorLogo} from "./WeedVectorLogo";

function StatCard({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-1"
      style={{ background: "#111410", border: "1px solid #1E2620" }}
    >
      <span style={{ fontSize: 11, color: "#6A7E5A", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}>
        {label}
      </span>
      <div className="flex items-end gap-1">
        <span style={{ fontSize: 28, fontFamily: "'Geist Mono', monospace", color: "#E8EDE4", fontWeight: 600, lineHeight: 1 }}>
          {value}
        </span>
        <span style={{ fontSize: 13, color: "#6A7E5A", fontFamily: "'Geist Mono', monospace", marginBottom: 2 }}>
          {unit}
        </span>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full"
      style={{
        background: "#0D0F0B",
        border: "1px solid #1E2620",
        fontFamily: "Inter, sans-serif",
        maxWidth: 780,
      }}
    >
      {/* Browser Chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#0A0C09", borderBottom: "1px solid #1A1E18" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#2A2D28" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#2A2D28" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#2A2D28" }} />
        </div>
        <div
          className="flex-1 rounded-md px-3 py-1 text-center mx-6"
          style={{ background: "#141712", fontSize: 11, color: "#4A583D", fontFamily: "'Geist Mono', monospace" }}
        >
          app.weedvector.io/environments/1/dashboard
        </div>
      </div>

      {/* App Shell */}
      <div className="flex" style={{ height: 360 }}>
        {/* Sidebar */}
        <div
          className="flex-shrink-0 flex flex-col gap-1 p-3 pt-4"
          style={{ width: 150, background: "#0A0C09", borderRight: "1px solid #1A1E18" }}
        >
          <div className="flex items-center gap-2 mb-4 px-2">
                <WeedVectorLogo size={16} color={"#6A7E5A"} />
            <span style={{ fontSize: 11, color: "#6A7E5A", fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
              weedvector
            </span>
          </div>
          {[
            { label: "Dashboard", active: true },
            { label: "Timelapse", active: false },
            { label: "Devices", active: false },
            { label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
              style={{
                background: item.active ? "#1A1E18" : "transparent",
                fontSize: 11,
                color: item.active ? "#A4B494" : "#4A583D",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <div className="w-3 h-3 rounded-sm" style={{ background: item.active ? "#2E3A2A" : "#141712" }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 16, color: "#E8EDE4", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  Spiderfarmer
                </span>
                <span
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ fontSize: 10, color: "#73885F", background: "#141E14", border: "1px solid #1E2E1E" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4A8A4A" }} />
                  Indoor
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg"
                style={{ background: "#111410", border: "1px solid #1E2620", fontSize: 10, color: "#6A7E5A", fontFamily: "'Geist Mono', monospace" }}
              >
                Last 24h
              </div>
              <div
                className="flex items-center gap-1 px-2 py-1 rounded-lg"
                style={{ background: "#111410", border: "1px solid #1E2620", fontSize: 10, color: "#6A7E5A" }}
              >
                <RefreshCw size={10} />
                <span style={{ fontFamily: "'Geist Mono', monospace" }}>1m</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <StatCard label="Temperature" value="22.1" unit="°C" />
            <StatCard label="Humidity" value="60" unit="%" />
            <StatCard label="VPD" value="0.00" unit="kPa" />
          </div>

          {/* Bottom row: camera + arc dial */}
          <div className="flex gap-2 flex-1 min-h-0">
            {/* Camera card */}
            <div
              className="flex-1 rounded-xl flex flex-col overflow-hidden"
              style={{ background: "#111410", border: "1px solid #1E2620" }}
            >
              <div
                className="flex-1 flex items-center justify-center relative"
                style={{ background: "#0A1A10" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <Camera size={20} color="#1E3A20" />
                  <span style={{ fontSize: 10, color: "#2A4A2A", fontFamily: "Inter, sans-serif" }}>
                    Live Camera Feed
                  </span>
                </div>
                <div
                  className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ background: "#0A1A0A", border: "1px solid #1E3A1E", fontSize: 9, color: "#73885F" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4ade80" }} />
                  <span>LIVE</span>
                </div>
              </div>
              <div className="px-3 py-1.5" style={{ borderTop: "1px solid #1A1E18" }}>
                <span style={{ fontSize: 10, color: "#4A583D", fontFamily: "Inter, sans-serif" }}>
                  RaspiCam 3
                </span>
              </div>
            </div>

            {/* Arc Dial */}
            <div
              className="flex-shrink-0 rounded-xl flex flex-col items-center justify-center p-3"
              style={{ background: "#111410", border: "1px solid #1E2620", width: 160 }}
            >
              <ArcDial size={130} lightHours={15} darkHours={9} progress={0.62} />
              <div className="mt-1 text-center">
                <div style={{ fontSize: 9, color: "#4A583D", fontFamily: "Inter, sans-serif" }}>Remaining</div>
                <div style={{ fontSize: 14, color: "#A4B494", fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
                  9h 23m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart row */}
      <div
        className="grid grid-cols-2 gap-0"
        style={{ borderTop: "1px solid #1A1E18" }}
      >
        {["Temperature", "Humidity"].map((label, i) => (
          <div
            key={label}
            className="p-4"
            style={{ borderRight: i === 0 ? "1px solid #1A1E18" : "none" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span style={{ fontSize: 11, color: "#6A7E5A", fontFamily: "Inter, sans-serif" }}>{label}</span>
              <span style={{ fontSize: 10, color: "#4A583D", fontFamily: "'Geist Mono', monospace" }}>
                {i === 0 ? "35.0°C" : "100%"}
              </span>
            </div>
            <MiniChart type={i === 0 ? "temperature" : "humidity"} height={56} />
          </div>
        ))}
      </div>
    </div>
  );
}
