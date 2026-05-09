import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const GREEN = "#4ade80";

const techBadges = [
  "Kotlin",
  "Spring Boot",
  "Next.js 16",
  "TimescaleDB",
  "MinIO",
  "RabbitMQ",
];

export function TechTrustStrip() {
  return (
    <section className="py-20 px-6" style={{ background: "#070707", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: "#f0f0ef",
              letterSpacing: "-0.02em",
            }}
          >
            Built on proven open-source infrastructure.
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "13px",
              fontFamily: "Inter, sans-serif",
              color: "#4a5a44",
              fontStyle: "italic",
            }}
          >
            OpenAPI spec at /swagger-ui.html. MQTT protocol documented. Everything is inspectable.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg"
                style={{
                  fontSize: "12px",
                  color: "#8ba083",
                  background: "#0d0d0b",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#8ba083",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#f0f0ef";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.color = "#8ba083";
              }}
            >
              Read the Docs <ArrowRight size={13} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#8ba083",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#f0f0ef";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.color = "#8ba083";
              }}
            >
              OpenAPI Spec <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
