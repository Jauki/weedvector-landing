import React from "react";
import {motion} from "motion/react";
import {Footer} from "../components/Footer";

const principles = [
    {
        number: "01",
        title: "Your data belongs to you.",
        body: "weedvector is built on a single non-negotiable premise: the data you generate — every sensor reading, every photo, every note — is yours. It lives on your hardware, in your database, under your control. We have no access to it, no claim over it, and no interest in monetising it.",
    },
    {
        number: "02",
        title: "Open source is not a business strategy.",
        body: "weedvector is open source because closed-source cultivation software is a bet against the grower. When software is proprietary, the vendor decides what you can and cannot do with your own grows. We reject that model entirely. The code is public, the architecture is documented, and the roadmap is shaped by the community.",
    },
    {
        number: "03",
        title: "Self-hosting is a first-class citizen.",
        body: "Cloud convenience is real — we offer it. But self-hosting is never a second-tier experience. Every feature available in the cloud runs identically on your own server. Docker Compose up should be the hardest part of self-hosting weedvector.",
    },
    {
        number: "04",
        title: "Hardware should be replaceable.",
        body: "We build official weedvector sensors, but we do not lock you into them. Any MQTT-capable sensor works. Any camera works. Any server works. Vendor lock-in in hardware is just as damaging as vendor lock-in in software — we refuse both.",
    },
    {
        number: "05",
        title: "Cultivation knowledge should compound.",
        body: "A grow cycle that ends without documentation is knowledge lost. weedvector is designed to make recording, exporting, and sharing grow data effortless — because the collective knowledge of growers, when shared freely, raises everyone's results.",
    },
    {
        number: "06",
        title: "Complexity is earned, not assumed.",
        body: "A first-time grower and a commercial operator have wildly different needs. weedvector exposes depth progressively. The default experience is minimal. The advanced configuration is there when you need it — not before.",
    },

    {
        number: "07",
        title: "Seventeen tabs is not a knowledge base.",
        body: "Every new grower knows the feeling. Browser history full of Reddit threads that contradict each other. YouTube videos filmed in someone else's tent. Forum posts from 2013 that might still be right — or might not. The knowledge exists. It is just scattered, contextless, and written for a different setup, a different strain, a different climate. weedvector is built to centralise it. The metrics that matter, the phases that count, the observations worth logging — all in one place, attached to your actual grow data. So a first-time grower knows exactly what to watch from day one. Without first having to get lost.",
    },
];

export function PhilosophyPage() {
    return (
        <div style={{minHeight: "100vh"}}>
            {/* Hero */}
            <section className="pt-36 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.45}}
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
                  style={{background: "#4ade80"}}
              />
                            Philosophy
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.55, delay: 0.08}}
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 4rem)",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 800,
                            color: "#f0f0f0",
                            lineHeight: 1.05,
                            letterSpacing: "-0.03em",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Why weedvector exists
                        <br/>
                        <span style={{color: "#4ade80"}}>and how we think about it.</span>
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.55, delay: 0.15}}
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                            fontFamily: "Inter, sans-serif",
                            color: "#a1a1aa",
                            lineHeight: 1.7,
                            maxWidth: "580px",
                        }}
                    >
                        weedvector started from frustration: good cultivation software
                        was either proprietary, cloud-only, or both. These are the
                        principles that guide every decision we make.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div
                style={{
                    maxWidth: "48rem",
                    margin: "0 auto",
                    height: "1px",
                    background: "#0c0c0c",
                }}
            />

            {/* Principles */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col gap-16">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.number}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-60px"}}
                            transition={{duration: 0.5, delay: i * 0.04}}
                            className="flex flex-col sm:flex-row gap-6 sm:gap-12"
                        >
                            {/* Number */}
                            <div
                                className="flex-shrink-0"
                                style={{
                                    fontFamily: "'Geist Mono', monospace",
                                    fontSize: "13px",
                                    color: "#4ade80",
                                    paddingTop: "4px",
                                    letterSpacing: "0.05em",
                                    minWidth: "2rem",
                                }}
                            >
                                {p.number}
                            </div>

                            {/* Content */}
                            <div>
                                <h2
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 700,
                                        fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                                        color: "#f0f0f0",
                                        marginBottom: "0.75rem",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {p.title}
                                </h2>
                                <p
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "1rem",
                                        color: "#a1a1aa",
                                        lineHeight: 1.75,
                                        maxWidth: "560px",
                                    }}
                                >
                                    {p.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Closing statement */}
            <section className="pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="rounded-2xl p-8 sm:p-10"
                        style={{
                            border: "1px solid rgba(74,222,128,0.15)",
                            background: "rgba(74,222,128,0.04)",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                                color: "#a1a1aa",
                                lineHeight: 1.75,
                                fontStyle: "italic",
                            }}
                        >
                            "weedvector is not a product looking for a market. It is a tool
                            built by growers, for growers — designed to last as long as
                            someone finds it useful."
                        </p>
                        <div
                            className="mt-6 flex items-center gap-3"
                            style={{fontFamily: "'Geist Mono', monospace", fontSize: "13px", color: "#4ade80"}}
                        >
              <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{background: "#4ade80"}}
              />
                            weedvector core team
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
