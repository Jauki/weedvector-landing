import React from "react";
import { motion } from "motion/react";
import { Cpu, Camera } from "lucide-react";

const GREEN = "#4ade80";
const CARD = "#0d0d0b";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";

const pills = {
  sensor: ["SHT31 Temp/Humidity", "DS18B20 Soil Temp", "EC Soil Analysis", "MQTT Native", "Self-Hosted Data"],
  vision: ["AI Analysis", "Growth Tracking", "Canopy Health", "Timelapse", "Integrated Dashboard"],
};

export function HardwareSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#060606" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div
            className="inline-block px-3 py-1 rounded-full mb-4"
            style={{
              fontSize: "11px",
              color: GREEN,
              background: "rgba(74,222,128,0.07)",
              border: "1px solid rgba(74,222,128,0.2)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            HARDWARE ROADMAP
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              color: TEXT_HEAD,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Built for the Grow. Hardware Coming.
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontSize: "15px", color: TEXT_BODY, fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
          >
            WeedVector hardware — designed from the ground up for cultivation, not adapted from general IoT kits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card A — WeedVector Sensor */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden group"
            style={{
              background: CARD,
              border: "1px solid rgba(74,222,128,0.15)",
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(74,222,128,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Badge row */}
            <div className="flex items-center gap-3 relative z-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.22)" }}
              >
                <Cpu size={18} color={GREEN} />
              </div>
              <span
                className="px-2.5 py-1 rounded-full"
                style={{
                  fontSize: "10px",
                  color: "#facc15",
                  background: "rgba(250,204,21,0.08)",
                  border: "1px solid rgba(250,204,21,0.22)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                IN DEVELOPMENT
              </span>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <h3
                className="mb-3"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  color: TEXT_HEAD,
                  lineHeight: 1.3,
                }}
              >
                Purpose-built grow sensor.<br />Plug in. It just works.
              </h3>
              <p style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.7 }}>
                We're building a dedicated WeedVector sensor — hardware designed from the ground up for cultivation monitoring.{" "}
                <span style={{ color: "#a3b8a0" }}>SHT31</span> for precision temperature and humidity.{" "}
                <span style={{ color: "#a3b8a0" }}>DS18B20</span> for substrate temperature.{" "}
                <span style={{ color: "#a3b8a0" }}>EC sensors</span> for soil analysis. Every reading reported directly to your WeedVector instance, automatically.
              </p>
              <p className="mt-3" style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: "#6a7e5a", lineHeight: 1.7 }}>
                High quality data. No workarounds. No third-party cloud.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {pills.sensor.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    fontSize: "11px",
                    color: "#6a8a6a",
                    background: "rgba(74,222,128,0.06)",
                    border: "1px solid rgba(74,222,128,0.14)",
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card B — WeedVector Vision */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden group"
            style={{
              background: CARD,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.05) 0%, transparent 70%)",
              }}
            />

            {/* Badge row */}
            <div className="flex items-center gap-3 relative z-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
              >
                <Camera size={18} color="#a78bfa" />
              </div>
              <span
                className="px-2.5 py-1 rounded-full"
                style={{
                  fontSize: "10px",
                  color: "#a78bfa",
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                ON THE ROADMAP
              </span>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <h3
                className="mb-3"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  color: TEXT_HEAD,
                  lineHeight: 1.3,
                }}
              >
                AI-powered canopy vision.<br />Coming.
              </h3>
              <p style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.7 }}>
                A dedicated camera module with AI-driven image analysis is in development. Sharp footage, automated plant health analysis, and growth tracking — not just timelapse, but data you can act on.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {pills.vision.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    fontSize: "11px",
                    color: "#7a6a8a",
                    background: "rgba(139,92,246,0.06)",
                    border: "1px solid rgba(139,92,246,0.14)",
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Dimmed overlay for roadmap state */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(13,13,11,0.4), transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
