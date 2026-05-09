import React from "react";
import { motion } from "motion/react";
import { Plug, ClipboardList, MonitorPlay } from "lucide-react";

const GREEN = "#4ade80";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect",
    desc: "Plug in your Raspberry Pi sensors. They auto-register via MQTT. No config files. No manual pairing.",
    tag: "PiCollector · MQTT · Auto-Register",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Track",
    desc: "Create environments, grows, and plants. Log phases and observations with timestamped entries.",
    tag: "Phases · Notes · Strains · Plants",
  },
  {
    icon: MonitorPlay,
    number: "03",
    title: "Watch",
    desc: "Live charts, camera feeds, and timelapse videos — one dashboard. Zoom into any time window.",
    tag: "TimescaleDB · Live Charts · Timelapse",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
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
            HOW IT WORKS
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              color: "#f0f0ef",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Up and running in under an hour.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div
            className="absolute hidden md:block"
            style={{
              top: 40,
              left: "16.67%",
              right: "16.67%",
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(74,222,128,0.15) 20%, rgba(74,222,128,0.15) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center p-8 relative"
              >
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden absolute bottom-0 left-1/2 w-px h-8 -mb-8"
                    style={{ background: "linear-gradient(to bottom, rgba(74,222,128,0.1), transparent)", transform: "translateX(-50%)" }}
                  />
                )}

                {/* Icon ring */}
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "#0d0d0b",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <Icon size={28} color={GREEN} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: "#070707",
                      border: "1px solid rgba(74,222,128,0.3)",
                      fontSize: "10px",
                      color: GREEN,
                      fontFamily: "'Geist Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    color: "#f0f0ef",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    color: "#8ba083",
                    lineHeight: 1.65,
                    maxWidth: 240,
                  }}
                >
                  {step.desc}
                </p>
                <div
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontSize: "10px",
                    color: "#4a5a44",
                    background: "#0d0d0b",
                    border: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {step.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
