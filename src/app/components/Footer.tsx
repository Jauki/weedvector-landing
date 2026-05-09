import React from "react";
import { WeedVectorLogo } from "./WeedVectorLogo";
import { Github, MessageCircle, FileText, DollarSign, Scale } from "lucide-react";

const GREEN = "#4ade80";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/Jauki/weedvector/" },
  { icon: Scale, label: "License (MIT)", href: "#" },
];

export function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <WeedVectorLogo size={18} color={"#f0f0f0"} />
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#c0ceb8",
                }}
              >
                weedvector
              </span>
            </div>
            <p style={{ fontSize: "12px", color: "#5a6a54", fontFamily: "Inter, sans-serif", maxWidth: 280 }}>
              Open-source cultivation management for serious growers.
            </p>
            <p style={{ fontSize: "11px", color: "#4a5a44", fontFamily: "Inter, sans-serif" }}>
              Free forever to self-host. Managed by us when you'd rather be growing.
            </p>
            {/* Contribution line */}
            <p style={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }}>
              <span style={{ color: "#4a5a44" }}>WeedVector is community-built. </span>
              <a
                href="#"
                style={{ color: GREEN, textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Contributions welcome.
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 transition-colors duration-200"
                  style={{ fontSize: "13px", color: "#5a6a54", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9aaa94")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5a6a54")}
                >
                  <Icon size={13} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p style={{ fontSize: "11px", color: "#3a4830", fontFamily: "Inter, sans-serif" }}>
            © 2026 WeedVector. MIT Licensed. Built in the open.
          </p>
          <div className="flex gap-4">
            {["Terms"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: "11px", color: "#3a4830", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6a7a60")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3a4830")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
