import React from "react";
import { motion } from "motion/react";
import { Film, Cpu, BookOpen, ArrowRight } from "lucide-react";
import { MiniChart } from "./MiniChart";
import { DevicesMockup } from "./DevicesMockup";

const GREEN = "#4ade80";
const CARD = "#0d0d0b";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";

function TimelapseCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: CARD, border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ height: 200, background: "#060606" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(74,222,128,0.09)", border: "1px solid rgba(74,222,128,0.18)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <circle cx="12" cy="12" r="10" stroke="rgba(74,222,128,0.3)" strokeWidth="1.5" />
              <path d="M10 8l6 4-6 4V8z" fill={GREEN} />
            </svg>
          </div>
          <span style={{ fontSize: 12, color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>
            timelapse_grow1_week4.mp4
          </span>
        </div>
        {/* Timeline bar */}
        <div
          className="absolute bottom-4 left-4 right-4 rounded-full"
          style={{ height: 4, background: "#0c0c0c" }}
        >
          <div
            className="h-full rounded-full relative"
            style={{ width: "42%", background: "rgba(74,222,128,0.5)" }}
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: GREEN, transform: "translateX(50%) translateY(-50%)" }}
            />
          </div>
        </div>
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1"
          style={{ background: "#060606", border: "1px solid rgba(74,222,128,0.15)", fontSize: 10, color: GREEN, fontFamily: "Inter, sans-serif" }}
        >
          <Film size={10} />
          Timelapse
        </div>
      </div>
      <div className="p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize: 11, color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>Synced Temperature</span>
          <span style={{ fontSize: 10, color: "#6a7a60", fontFamily: "'Geist Mono', monospace" }}>Week 4</span>
        </div>
        <MiniChart type="temperature" height={60} />
      </div>
    </div>
  );
}

function StrainLibraryCard() {
  const strains = [
    { name: "Super Lemon Haze", thc: "20%", cbd: "1%", flower: "8w", pheno: "P3", phase: "Flowering" },
    { name: "Blue Sushi", thc: "18%", cbd: "2%", flower: "9w", pheno: "P1", phase: "Veg" },
    { name: "OG Kush", thc: "22%", cbd: "0%", flower: "8w", pheno: "P2", phase: "Harvest" },
  ];
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: CARD, border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="p-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center justify-between">
          <span style={{ fontSize: 13, fontFamily: "Inter, sans-serif", fontWeight: 600, color: TEXT_HEAD }}>
            Strain Library
          </span>
          <span style={{ fontSize: 11, color: "#4a5a44", fontFamily: "'Geist Mono', monospace" }}>
            3 strains · 6 plants
          </span>
        </div>
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        {strains.map((s) => (
          <div key={s.name} className="flex items-center justify-between p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <div>
              <div style={{ fontSize: 13, color: "#c0ceb8", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                {s.name}
              </div>
              <div style={{ fontSize: 10, color: "#4a5a44", fontFamily: "'Geist Mono', monospace", marginTop: 2 }}>
                THC {s.thc} · CBD {s.cbd} · {s.flower} flower
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 rounded"
                style={{ fontSize: 10, color: "#6a7a60", background: "#0c0c0c", fontFamily: "'Geist Mono', monospace" }}
              >
                {s.pheno}
              </span>
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontSize: 10,
                  color: s.phase === "Harvest" ? "#b8a040" : GREEN,
                  background: s.phase === "Harvest" ? "rgba(250,204,21,0.07)" : "rgba(74,222,128,0.07)",
                  border: `1px solid ${s.phase === "Harvest" ? "rgba(250,204,21,0.18)" : "rgba(74,222,128,0.18)"}`,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {s.phase}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    icon: Film,
    tag: "TIMELAPSE + SENSOR SYNC",
    headline: "Watch your canopy grow. Literally.",
    copy: "Schedule a timelapse, connect a camera. WeedVector captures, compiles, and plays back your grow alongside synchronized temperature and humidity charts — no FFmpeg required.",
    visual: <TimelapseCard />,
    reversed: false,
  },
  {
    icon: Cpu,
    tag: "IOT DEVICE DASHBOARD",
    headline: "From sensor to dashboard in minutes.",
    copy: "PiCollector runs on any Raspberry Pi. One MQTT connection. Your environment temperature, humidity, and VPD appear automatically. Zoom into any time window. Auto-refresh. Configurable retention.",
    visual: <DevicesMockup />,
    reversed: true,
  },
  {
    icon: BookOpen,
    tag: "STRAIN & GROW LIBRARY",
    headline: "A grow journal that actually works.",
    copy: "Track strains (with THC/CBD/flowering time), individual plants with pheno names, grow phases with full transition history, and timestamped notes — all linked to each other.",
    visual: <StrainLibraryCard />,
    reversed: false,
  },
];

export function FeatureDeepDive() {
  return (
    <section className="py-24 px-6" style={{ background: "#060606" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-12 items-center ${
                section.reversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(74,222,128,0.09)", border: "1px solid rgba(74,222,128,0.18)" }}
                  >
                    <Icon size={14} color={GREEN} />
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      color: GREEN,
                      fontFamily: "Inter, sans-serif",
                      letterSpacing: "0.08em",
                      fontWeight: 500,
                    }}
                  >
                    {section.tag}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    color: TEXT_HEAD,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {section.headline}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "Inter, sans-serif",
                    color: TEXT_BODY,
                    lineHeight: 1.7,
                    maxWidth: 440,
                  }}
                >
                  {section.copy}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 group w-fit"
                  style={{ fontSize: "13px", color: GREEN, fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  Learn more
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full">{section.visual}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
