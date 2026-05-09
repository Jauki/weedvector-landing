import React, {useState, useEffect} from "react";
import {WeedVectorLogo} from "./WeedVectorLogo";
import {Menu, X} from "lucide-react";
import { Link, useLocation } from "react-router";

const links = [
    {
        link: "https://github.com/Jauki/weedvector/",
        name: "Contribute",
        external: true,
    },
    {
        link: "/changelog",
        name: "Changelog",
        external: false,
    },
    {
        link: "/philosophy",
        name: "Philosophy",
        external: false,
    },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "rgba(8,8,8,0.9)" : "rgba(8,8,8,0.0)",
                backdropFilter: scrolled ? "blur(18px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="flex items-end gap-3">
                    <WeedVectorLogo size={28} color="#f0f0f0"/>
                    <span
                        className="tracking-tight"
                        style={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#f0f0f0",
                        }}
                    >
            weedvector
          </span>
                </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) =>
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors duration-200"
                                style={{ fontSize: "14px", color: "#a1a1aa", fontFamily: "Inter, sans-serif" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.link}
                                className="transition-colors duration-200"
                                style={{ fontSize: "14px", color: "#a1a1aa", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>

                {/* CTAs */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#"
                        className="px-4 py-2 rounded-lg border transition-all duration-200"
                        style={{
                            fontSize: "13px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#a1a1aa",
                            borderColor: "rgba(255,255,255,0.1)",
                            background: "transparent",
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
                        Self-Host Free
                    </a>
                    <span
                        className="px-4 py-2 rounded-lg border"
                        aria-disabled="true"
                        style={{
                            fontSize: "13px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#a1a1aa",
                            borderColor: "rgba(255,255,255,0.1)",
                            background: "#0c0c0c",
                            opacity: 0.4,
                            pointerEvents: "none",
                            cursor: "default",
                            userSelect: "none",
                        }}
                     >
             Try Cloud
           </span>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    style={{color: "#a1a1aa"}}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={22}/> : <Menu size={22}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
            <div
                className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
                style={{background: "rgba(8,8,8,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)"}}
            >
                {links.map((link) =>
                    link.external ? (
                        <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            style={{ fontSize: "15px", color: "#a1a1aa", fontFamily: "Inter, sans-serif" }}
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            to={link.link}
                            onClick={() => setMenuOpen(false)}
                            style={{ fontSize: "15px", color: "#a1a1aa", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                        >
                            {link.name}
                        </Link>
                    )
                )}
                <div className="flex gap-3 pt-2">
                    <a
                        href="#"
                        className="flex-1 text-center px-4 py-2 rounded-lg border"
                        style={{
                            fontSize: "13px",
                            fontFamily: "Inter, sans-serif",
                            color: "#a1a1aa",
                            borderColor: "rgba(255,255,255,0.1)",
                        }}
                    >
                        Self-Host Free
                    </a>
                    <span
                        className="flex-1 text-center px-4 py-2 rounded-lg border"
                        aria-disabled="true"
                        style={{
                            fontSize: "13px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#a1a1aa",
                            borderColor: "rgba(255,255,255,0.1)",
                            background: "#0c0c0c",
                            opacity: 0.4,
                            pointerEvents: "none",
                            cursor: "default",
                            userSelect: "none",
                        }}
                    >
              Try Cloud
            </span>
                </div>
            </div>
            )}
        </nav>
    );
}
