import React, { useRef } from "react";
import { Github } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { motion, useMotionValue, useTransform } from "motion/react";

export function Hero() {
  // Detect reduced motion preference once at render
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Refs and motion values for cursor-reactive noun tilt
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animated noun style — shimmer gradient via background-clip
  const nounStyle: React.CSSProperties = prefersReducedMotion
    ? {
        display: "inline-block",
        color: "#4ade80",
      }
    : {
        display: "inline-block",
        background: "linear-gradient(90deg, #4ade80, #86efac, #4ade80)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "wv-shimmer 3.5s ease-in-out infinite",
      };

  // Tilt props — only applied when not reduced motion
  const nounMotionStyle = prefersReducedMotion
    ? {}
    : { rotateX, rotateY };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <style>{`
        @keyframes wv-shimmer {
          0%   { background-position: 0% center; }
          50%  { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

      {/* Background radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(74,222,128,0.04) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              border: "1px solid rgba(74, 222, 128, 0.25)",
              background: "rgba(74, 222, 128, 0.06)",
              fontSize: "12px",
              color: "#a1a1aa",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
            Open Source · IoT-Native · Self-Hostable
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-6 flex flex-col items-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            color: "#f0f0f0",
            letterSpacing: "-0.03em",
            textAlign: "center",
            gap: "0.05em",
          }}
        >
          <span style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", lineHeight: 1.0, display: "block" }}>
            Your{" "}
            <motion.span style={{ ...nounStyle, ...nounMotionStyle }}>
              plant.
            </motion.span>
          </span>
          <span style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", lineHeight: 1.0, display: "block" }}>
            Your{" "}
            <motion.span style={{ ...nounStyle, ...nounMotionStyle }}>
              data.
            </motion.span>
          </span>
          <span style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", lineHeight: 1.0, display: "block" }}>
            Your{" "}
            <motion.span style={{ ...nounStyle, ...nounMotionStyle }}>
              knowledge.
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mb-10 px-2 sm:px-0"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            color: "#a1a1aa",
            lineHeight: 1.65,
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          weedvector is the open-source cultivation management platform that connects your sensors,
          tracks every grow, it enables project-managment-like style to track your grows.
          Self-host free. Or let us run it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <a
            href="https://github.com/jauki/weedvector"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: "#ffffff",
              color: "#080808",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f0f0f0")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#ffffff")}
          >
            <Github size={16} />
            Get Started — Free →
          </a>
          <span
            aria-disabled="true"
            className="flex items-center gap-2 px-6 py-3 rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              background: "#0c0c0c",
              opacity: 0.45,
              pointerEvents: "none",
              cursor: "default",
              userSelect: "none",
            }}
          >
            Try Cloud Hosted
          </span>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full relative overflow-hidden rounded-xl"
          style={{ maxWidth: 820 }}
        >
          {/* Glow behind mockup */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(74,222,128,0.04) 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "translateY(20px)",
            }}
          />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
