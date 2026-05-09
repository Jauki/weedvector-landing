import React from "react";
import { motion } from "motion/react";
import { Footer } from "../components/Footer";

interface ChangelogFrontmatter {
  version: string;
  date: string;
  summary: string;
  label?: string;
}

type MdxModule = {
  default: React.FC<{ components?: Record<string, React.ElementType> }>;
  frontmatter: ChangelogFrontmatter;
};

// MdxComponents: custom styled elements for MDX prose rendering
const MdxComponents: Record<string, React.ElementType> = {
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
        fontWeight: 700,
        color: "#f0f0f0",
        letterSpacing: "-0.01em",
        marginBottom: "0.75rem",
        marginTop: "1.5rem",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "#a1a1aa",
        textTransform: "uppercase" as const,
        letterSpacing: "0.08em",
        margin: "1.5rem 0 0.5rem",
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.95rem",
        color: "#a1a1aa",
        lineHeight: 1.7,
        margin: "0.5rem 0",
      }}
    >
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0" }}>
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.95rem",
        color: "#a1a1aa",
        lineHeight: 1.7,
        padding: "0.1rem 0",
        display: "flex",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
    >
      <span style={{ color: "#4ade80", flexShrink: 0, marginTop: "0.1em" }}>›</span>
      <span>{children}</span>
    </li>
  ),
  code: ({ children }) => (
    <code
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "12px",
        color: "#4ade80",
        background: "rgba(74,222,128,0.08)",
        borderRadius: "4px",
        padding: "2px 6px",
      }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "12px",
        color: "#a1a1aa",
        background: "#0c0c0c",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px",
        padding: "1rem",
        overflowX: "auto" as const,
        margin: "1rem 0",
      }}
    >
      {children}
    </pre>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#4ade80", textDecoration: "none" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = "underline"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = "none"; }}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "#f0f0f0", fontWeight: 600 }}>{children}</strong>
  ),
  hr: () => (
    <hr
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        margin: "2rem 0",
      }}
    />
  ),
};

export function ChangelogPage() {
  const modules = import.meta.glob('/content/changelog/*.mdx', { eager: true }) as Record<string, MdxModule>;

  const entries = Object.values(modules)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));



  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8"
              style={{
                border: "1px solid rgba(74,222,128,0.25)",
                background: "rgba(74,222,128,0.06)",
                fontSize: "11px",
                color: "#a1a1aa",
                fontFamily: "'Geist Mono', monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80" }}
              />
              Changelog
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              color: "#f0f0f0",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            What's changed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#a1a1aa",
              lineHeight: 1.7,
            }}
          >
            Every release, every fix, every breaking change — in one place.
            weedvector follows{" "}
            <a
              href="https://semver.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ade80", textDecoration: "none" }}
            >
              semantic versioning
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "40rem",
          margin: "0 auto",
          height: "1px",
          background: "#0c0c0c",
        }}
      />

      {/* Release list */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-14">
          {entries.map((entry, i) => {
            const { version, date, label, summary } = entry.frontmatter;
            const Content = entry.default;
            return (
              <motion.article
                key={version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                {/* Version header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#f0f0f0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    v{version}
                  </span>

                  {label && (
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "#4ade80",
                        background: "rgba(74,222,128,0.1)",
                        border: "1px solid rgba(74,222,128,0.25)",
                        borderRadius: "4px",
                        padding: "2px 8px",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                  )}

                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "12px",
                      color: "#52525b",
                      marginLeft: "auto",
                    }}
                  >
                    {date}
                  </span>
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "#71717a",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                  }}
                >
                  {summary}
                </p>

                {/* MDX prose body */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "#0c0c0c",
                    padding: "1.5rem",
                  }}
                >
                  <Content components={MdxComponents} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Contribute callout */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "#0c0c0c",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#f0f0f0",
                  marginBottom: "4px",
                }}
              >
                Want to see something in the next release?
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "#71717a",
                }}
              >
                Open an issue or PR on GitHub — we build in the open.
              </p>
            </div>
            <a
              href="https://github.com/Jauki/weedvector/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#a1a1aa",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
              }}
            >
              Open an issue →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
