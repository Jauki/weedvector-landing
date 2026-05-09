import React from "react";
import { motion } from "motion/react";
import { Github, Cpu, Camera, Zap, BookOpen, MessageSquare } from "lucide-react";

const GREEN = "#4ade80";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";
const CARD = "#0d0d0b";

const statusColors: Record<string, { text: string; bg: string; border: string }> = {
  "Coming Soon": {
    text: "#8ba083",
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },
  "In Development": {
    text: "#facc15",
    bg: "rgba(250,204,21,0.07)",
    border: "rgba(250,204,21,0.2)",
  },
  Roadmap: {
    text: "#a78bfa",
    bg: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.2)",
  },
};

const items = [
  {
    icon: Zap,
    title: "Vivosun & Grow Controller Integration",
    desc: "Centralized control of your existing grow hardware",
    status: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Full Journey Tracking",
    desc: "Document from cultivation to consumable product",
    status: "Coming Soon",
  },
  {
    icon: MessageSquare,
    title: "Matrix Protocol Chat",
    desc: "Secure, self-hostable team messaging built into WeedVector — your team chat stays on your server. Encrypted, federated, yours.",
    status: "Coming Soon",
  },
  {
    icon: Cpu,
    title: "WeedVector Sensor Hardware",
    desc: "Purpose-built MQTT sensor with SHT31, DS18B20, EC",
    status: "In Development",
  },
  {
    icon: Camera,
    title: "AI Vision Camera",
    desc: "Automated canopy analysis and health scoring",
    status: "Roadmap",
  },
];

export function HorizonSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#060606" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
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
            WHAT'S COMING
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              color: TEXT_HEAD,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            On the Horizon
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontSize: "14px", color: TEXT_BODY, fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
          >
            The roadmap is public. The code is open. You decide what matters most.
          </p>
        </motion.div>

        {/* Items grid */}
        <div className="flex flex-col gap-3 mb-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            const sc = statusColors[item.status];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 rounded-xl px-5 py-4"
                style={{
                  background: CARD,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon size={15} color="#6a7a60" />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#c0ceb8" }}>
                    {item.title}
                  </div>
                  <div
                    className="mt-1"
                    style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.5 }}
                  >
                    {item.desc}
                  </div>
                </div>
                <span
                  className="flex-shrink-0 px-2.5 py-1 rounded-full mt-0.5"
                  style={{
                    fontSize: "10px",
                    color: sc.text,
                    background: sc.bg,
                    border: `1px solid ${sc.border}`,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.status}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Matrix note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-10 px-5 py-4 rounded-xl"
          style={{
            background: "rgba(74,222,128,0.04)",
            border: "1px solid rgba(74,222,128,0.1)",
          }}
        >
          <p style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: "#6a8a6a", lineHeight: 1.65 }}>
            <span style={{ color: GREEN, fontWeight: 600 }}>Matrix OS integration</span> means your team chat stays on your server — encrypted, federated, yours. No Slack. No Discord. No third-party server required.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-center"
        >
          <a
            href="https://github.com/Jauki/weedvector/"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.25)",
              color: GREEN,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.16)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.25)";
            }}
          >
            <Github size={15} />
            Follow Development on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
