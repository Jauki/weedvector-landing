import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronDown, ChevronUp, Github, Server, Leaf, Zap, Building2, Lock } from "lucide-react";

const GREEN = "#4ade80";
const TEXT_HEAD = "#f0f0ef";
const TEXT_BODY = "#8ba083";
const CARD = "#0d0d0b";

const communityFeatures = [
  "Full source code via GitHub",
  "Unlimited environments, grows, plants, sensors",
  "All features: timelapse, VPD, light schedules, device management",
  "IoT sensor integration via MQTT",
  "Community support (GitHub Discussions)",
];

const comingTiers = [
  { icon: Leaf, name: "Grower", price: "€--/mo", tagline: "Managed cloud hosting. Zero server headaches." },
  { icon: Zap, name: "Pro", price: "€--/mo", tagline: "Professional-grade. Priority support. Advanced analytics." },
  { icon: Building2, name: "Enterprise", price: "Custom", tagline: "WeedVector at scale, managed your way." },
];

const faqs = [
  {
    q: "What's the difference between Community and cloud plans?",
    a: "Feature-wise? Nothing. The difference is infrastructure, support, and maintenance. Community means you manage your own server, updates, and backups. Cloud plans mean we handle all that so you can focus on your plants.",
  },
  {
    q: "Can I migrate from self-hosted to cloud?",
    a: "Yes. We provide export tools and migration guides. Your data stays yours — always.",
  },
  {
    q: "Does the cloud version use the same code as Community?",
    a: "Exactly the same open-source codebase. No hidden features. No lock-in. You can inspect every line on GitHub.",
  },
  {
    q: "When will cloud plans launch?",
    a: "Cloud plans are coming. We're focused on getting the self-hosted experience right first. Follow development on GitHub for updates.",
  },
];

export function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
            PRICING
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
            Run it yourself.<br />Own everything.
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: "15px", color: TEXT_BODY, fontFamily: "Inter, sans-serif" }}
          >
            Free forever to self-host. Cloud plans coming soon.
          </p>
        </motion.div>

        {/* Main layout: Community card + coming tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Community — primary card (spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl p-8 relative overflow-hidden flex flex-col gap-7"
            style={{
              background: CARD,
              border: "1px solid rgba(74,222,128,0.3)",
              boxShadow: "0 0 60px rgba(74,222,128,0.06)",
            }}
          >
            {/* Green ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.08) 0%, transparent 65%)",
              }}
            />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)" }}
                >
                  <Server size={18} color={GREEN} />
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontFamily: "Inter, sans-serif", fontWeight: 700, color: TEXT_HEAD }}>
                    Community
                  </div>
                  <div style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY }}>
                    Free — Self-Hosted
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span
                  style={{
                    fontSize: "38px",
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 700,
                    color: TEXT_HEAD,
                    lineHeight: 1,
                  }}
                >
                  Free
                </span>
                <span style={{ fontSize: "13px", color: TEXT_BODY, fontFamily: "Inter, sans-serif", paddingBottom: 4 }}>
                  forever
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="relative z-10"
              style={{
                fontSize: "15px",
                fontFamily: "Inter, sans-serif",
                color: "#a3b8a0",
                fontStyle: "italic",
                borderLeft: `3px solid rgba(74,222,128,0.35)`,
                paddingLeft: 14,
                lineHeight: 1.5,
              }}
            >
              "Run it yourself. Own everything."
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {communityFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)" }}
                  >
                    <Check size={11} color={GREEN} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: "13px", color: "#c0ceb8", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* Requires note */}
            <div
              className="relative z-10 px-4 py-3 rounded-xl"
              style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span style={{ fontSize: "12px", color: "#6a7a60", fontFamily: "'Geist Mono', monospace" }}>
                Requires:
              </span>{" "}
              <span style={{ fontSize: "12px", color: "#8ba083", fontFamily: "Inter, sans-serif" }}>
                a machine with Docker installed
              </span>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="relative z-10 flex items-center justify-center gap-2.5 py-3.5 rounded-xl transition-all duration-200"
              style={{
                background: GREEN,
                color: "#070707",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#22c55e")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GREEN)}
            >
              <Github size={16} />
              Self-Host Free — View on GitHub
            </a>
          </motion.div>

          {/* Coming Soon tiers (stacked in right col) */}
          <div className="flex flex-col gap-4">
            {comingTiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
                  style={{
                    background: CARD,
                    border: "1px solid rgba(255,255,255,0.04)",
                    opacity: 0.35,
                    cursor: "default",
                  }}
                >
                  {/* Coming Soon pill */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="flex items-center gap-1 px-2 py-1 rounded-full"
                      style={{
                        fontSize: "9px",
                        color: "#6a7a60",
                        background: "#0c0c0c",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                      }}
                    >
                      <Lock size={8} />
                      COMING SOON
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <Icon size={14} color="#4a5a44" />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#4a5a44" }}>
                        {tier.name}
                      </div>
                      <div style={{ fontSize: "12px", fontFamily: "'Geist Mono', monospace", color: "#3a4a34" }}>
                        {tier.price}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", fontFamily: "Inter, sans-serif", color: "#3a4a34", lineHeight: 1.5 }}>
                    {tier.tagline}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cloud note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="inline-block px-5 py-3 rounded-xl max-w-2xl"
            style={{
              fontSize: "13px",
              color: TEXT_BODY,
              fontFamily: "Inter, sans-serif",
              background: CARD,
              border: "1px solid rgba(255,255,255,0.06)",
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            Cloud-hosted plans are coming. Cloud runs the exact same open-source code — no hidden features, no lock-in. Just managed infrastructure.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3
            className="mb-6 text-center"
            style={{ fontSize: "18px", fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#c0ceb8" }}
          >
            Frequently asked
          </h3>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: CARD }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: "#9aaa94", fontWeight: 500 }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={15} color={GREEN} />
                  ) : (
                    <ChevronDown size={15} color="#4a5a44" />
                  )}
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 pb-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <p style={{ fontSize: "13px", fontFamily: "Inter, sans-serif", color: TEXT_BODY, lineHeight: 1.65, paddingTop: 12 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
