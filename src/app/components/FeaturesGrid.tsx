import React from "react";
import { motion } from "motion/react";
import { Cpu, Leaf, Film, Sun, Wind, Users } from "lucide-react";
import { MiniChart } from "./MiniChart";
import { ArcDial } from "./ArcDial";

const CARD = "#0d0d0b";
const CARD_BORDER = "rgba(255,255,255,0.06)";
const CARD_HOVER = "rgba(74,222,128,0.25)";
const ICON_BG = "rgba(74,222,128,0.09)";
const ICON_BORDER = "rgba(74,222,128,0.18)";
const GREEN = "#4ade80";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";
const GLOW = "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,222,128,0.07) 0%, transparent 70%)";

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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
            EVERYTHING YOU NEED
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
            Built for how you actually grow.
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontSize: "15px", color: TEXT_BODY, fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
          >
            No half-finished dashboards. No sensor data in spreadsheets.
            Every feature designed around real cultivation workflows.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card - IoT Sensor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-2xl p-6 group relative overflow-hidden"
            style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, transition: "border-color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_HOVER; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_BORDER; }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              style={{ background: GLOW }}
            />
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 relative z-10"
              style={{ background: ICON_BG, border: `1px solid ${ICON_BORDER}` }}
            >
              <Cpu size={16} color={GREEN} />
            </div>
            <h3
              className="mb-2 relative z-10"
              style={{ fontSize: "15px", fontFamily: "Inter, sans-serif", fontWeight: 600, color: TEXT_HEAD }}
            >
              IoT Sensor Integration
            </h3>
            <p
              className="mb-6 relative z-10"
              style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.65 }}
            >
              Connect DHT-11, DS18B20, and custom sensors via MQTT. Readings land in TimescaleDB automatically. No manual imports.
            </p>
            {/* Mini chart preview */}
            <div className="relative z-10 rounded-xl overflow-hidden" style={{ background: "#060606", border: "1px solid rgba(255,255,255,0.05)", padding: "12px 12px 8px" }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div style={{ fontSize: 10, color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>Temperature</div>
                  <div style={{ fontSize: 20, color: TEXT_HEAD, fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
                    22.1<span style={{ fontSize: 12, color: "#6a7a60" }}>°C</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>Humidity</div>
                  <div style={{ fontSize: 20, color: TEXT_HEAD, fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
                    60<span style={{ fontSize: 12, color: "#6a7a60" }}>%</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>VPD</div>
                  <div style={{ fontSize: 20, color: TEXT_HEAD, fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
                    0.91<span style={{ fontSize: 12, color: "#6a7a60" }}>kPa</span>
                  </div>
                </div>
              </div>
              <MiniChart type="temperature" height={64} />
            </div>
          </motion.div>

          {/* Light Schedule card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 flex flex-col group relative overflow-hidden"
            style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, transition: "border-color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_HOVER; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_BORDER; }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              style={{ background: GLOW }}
            />
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 relative z-10"
              style={{ background: ICON_BG, border: `1px solid ${ICON_BORDER}` }}
            >
              <Sun size={16} color={GREEN} />
            </div>
            <h3
              className="mb-2 relative z-10"
              style={{ fontSize: "15px", fontFamily: "Inter, sans-serif", fontWeight: 600, color: TEXT_HEAD }}
            >
              Light Schedule Intelligence
            </h3>
            <p
              className="mb-4 relative z-10"
              style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.65 }}
            >
              Real-time arc dial shows your current light/dark state, time remaining, and full schedule history.
            </p>
            <div className="flex justify-center mt-auto relative z-10">
              <ArcDial size={140} lightHours={18} darkHours={6} progress={0.72} />
            </div>
          </motion.div>

          {/* 4 small cards */}
          {[
            {
              icon: Leaf,
              title: "Grow Cycle Tracking",
              desc: "8 cultivation phases — Planning to Harvest. Every transition logged with timestamps and notes.",
            },
            {
              icon: Film,
              title: "Automated Timelapse",
              desc: "Your camera captures on schedule. WeedVector stitches into timelapse video — synced with sensor history.",
            },
            {
              icon: Users,
              title: "Team Access",
              desc: "Invite growers, partners, or viewers per environment. Role-based — Admin, Grower, Viewer.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                className="rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden"
                style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, transition: "border-color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_HOVER; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CARD_BORDER; }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ background: GLOW }}
                />
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{ background: ICON_BG, border: `1px solid ${ICON_BORDER}` }}
                >
                  <Icon size={16} color={GREEN} />
                </div>
                <div className="relative z-10">
                  <h3
                    className="mb-2"
                    style={{ fontSize: "15px", fontFamily: "Inter, sans-serif", fontWeight: 600, color: TEXT_HEAD }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.65 }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
