# WeedVector Landing Page — Refinement Prompt

---

## Context

You are refining an existing WeedVector landing page. The base structure, sections, and copy are already established. Apply the following targeted changes precisely — do not rebuild from scratch. Preserve all existing sections unless explicitly told to modify them.

---

## 1. Visual & Style Refinements

### Background
- Make the background **significantly darker** — push toward near-black (`#080808` or `#090b0a`), not dark gray
- Add a **subtle low-opacity grid overlay** across the entire page background — CSS grid lines only, similar to the Tailwind CSS and Linear landing page style
  - Grid: `1px solid rgba(255,255,255,0.04)` at ~32–40px intervals
  - Grid should be a fixed background layer, behind all content
  - Do not animate it — static, barely visible, adds depth without distraction

### Color & Contrast
- The current green accent is **too saturated and too bright** — pull it back sharply
- New accent direction: **dark muted sage-to-teal** — think `#2d4a3e` to `#1a3a2e` range for backgrounds, `#4ade80` only at very low usage (badges, active states) and never as a dominant fill
- All text must pass **WCAG AA contrast minimum** — check body text, sub-headings, card text, and placeholder/muted text against their actual backgrounds
- Prefer **white and off-white** (`#f4f4f4`, `#e2e8f0`) for primary text — reduce reliance on green-tinted text
- CTA buttons: primary button should be **high contrast** — white text on a dark green or near-white fill — not lime green on white

### Logo
- **Remove any auto-generated icon or leaf glyph**
- Use the **official WeedVector OG wordmark/logo** as provided in the reference image — the horizontal text lockup with the geometric leaf-slash mark on the left
- Do not substitute, recreate, or stylize it differently — use it as-is in navbar and footer

---

## 2. Pricing Section — Self-Host Only (Revised)

**Replace the 4-tier pricing table** with a single focused self-host presentation:

### Layout
- Show **one primary tier card**: `Community — Free, Forever`
- All other tiers (Grower, Pro, Enterprise) should be shown as **greyed-out "Coming Soon" cards** — visible but clearly inactive
  - Use reduced opacity (`opacity: 0.35`), a `Coming Soon` pill badge, and no CTA button
  - Subtle locked/dimmed visual treatment

### Community Tier Card Copy
```
Community
Free — Self-Hosted

"Run it yourself. Own everything."

✓ Full source code via GitHub
✓ Unlimited environments, grows, plants, sensors
✓ All features: timelapse, VPD, light schedules, device management
✓ IoT sensor integration via MQTT
✓ Community support (GitHub Discussions)

Requires: a machine with Docker installed
```

**CTA:** `[Self-Host Free — View on GitHub]`

**Note below table:**
> *"Cloud-hosted plans are coming. Cloud runs the exact same open-source code — no hidden features, no lock-in. Just managed infrastructure."*

---

## 3. New Content: Upcoming Hardware Section

Add a **new dedicated section** between the Feature Highlights and "How It Works" sections. Title it:

**"Built for the Grow. Hardware Coming."**

Or alternatively as a sub-section within Feature Highlights as two "Coming Soon" bento cards with a `Soon` pill badge.

---

### Card A — WeedVector Sensor

**Badge:** `In Development`
**Icon:** Sensor/chip icon (circuit or probe aesthetic)
**Headline:** "Purpose-built grow sensor. Plug in. It just works."

**Copy:**
> We're building a dedicated WeedVector sensor — hardware designed from the ground up for cultivation monitoring. SHT31 for precision temperature and humidity. DS18B20 for substrate temperature. EC sensors for soil analysis. Every reading reported directly to your WeedVector instance, automatically.
>
> High quality data. No workarounds. No third-party cloud.

**Feature pills:** `SHT31 Temp/Humidity` · `DS18B20 Soil Temp` · `EC Soil Analysis` · `MQTT Native` · `Self-Hosted Data`

---

### Card B — WeedVector Vision (AI Camera)

**Badge:** `On the Roadmap`
**Icon:** Camera / eye icon
**Headline:** "AI-powered canopy vision. Coming."

**Copy:**
> A dedicated camera module with AI-driven image analysis is in development. Sharp footage, automated plant health analysis, and growth tracking — not just timelapse, but data you can act on.

**Feature pills:** `AI Analysis` · `Growth Tracking` · `Canopy Health` · `Timelapse` · `Integrated Dashboard`

---

## 4. New Content: Mission & Philosophy Section

Add a **new full-width section** — place it after the Feature Deep-Dives and before Pricing. This is the soul-of-the-project section.

**Headline:**
> "Grow knowledge. Own it. Share it."

**Sub-headline:**
> *Your data. Your server. Your community.*

**Body copy (3 short paragraphs or a 3-column layout):**

---

**🌱 A Foundation for Everyone**
> WeedVector is more than a dashboard. It's a knowledge foundation — for you, your crew, your friends. When self-hosted, it becomes a shared research base: document your grows, your strains, your genetics. Make the knowledge accessible to everyone who matters to you.

**🔬 Research-Grade Documentation**
> Track multiple grow cycles. Document every phase. Log what worked, what didn't, and why. The goal is a centralized, searchable record of how your plants perform across time — across environments, across genetics. Cannabis research, done properly.

**🛡️ You Decide. Always.**
> Open source means you own the code. Self-hosting means you own the data. We don't sell insights derived from your grows. We don't require an account to use the software. You can disconnect it from the internet entirely. Your cultivation knowledge is yours — share it on your terms.

---

## 5. New Content: Coming Integrations — Mention Block

Add a small **"What's Coming"** strip or card cluster near the bottom of the page (before footer), listing upcoming integrations briefly:

**Headline:** `On the Horizon`

**Items (pill/badge list or small icon cards):**

| Feature | Status |
|---|---|
| **Vivosun & Grow Controller Integration** — Centralized control of your existing grow hardware | `Coming Soon` |
| **Full Journey Tracking** — Document from cultivation to consumable product | `Coming Soon` |
| **Matrix Protocol Chat** — Secure, self-hostable team messaging built into WeedVector | `Coming Soon` |
| **WeedVector Sensor Hardware** — Purpose-built MQTT sensor with SHT31, DS18B20, EC | `In Development` |
| **AI Vision Camera** — Automated canopy analysis and health scoring | `Roadmap` |

**Note:** "Matrix OS integration means your team chat stays on your server — encrypted, federated, yours."

**CTA:** `[Follow Development on GitHub]`

---

## 6. Tone Additions for New Copy

When writing the new sections, follow these voice additions:

- **Community first:** This is software for people who want to share knowledge, not hoard it — write warmly toward that
- **Data sovereignty is core:** Reinforce "you decide" language at least twice in the new sections
- **Hardware credibility:** Reference sensor model names specifically (SHT31, DS18B20, EC) — this signals technical seriousness to the grower audience
- **Matrix chat angle:** Frame it as "secure team communication that doesn't require a third-party server" — not as a chat app, but as a trust feature
- **Contributing:** Add one line somewhere in the mission section or footer — *"WeedVector is community-built. Contributions welcome."* with a link to GitHub

---

## 7. Do Not Change

- Overall page section order (except insertions noted above)
- Hero headline and sub-headline copy
- "How It Works" 3-step section
- Tech trust strip content
- Footer structure
- All existing feature highlight copy

---

## Summary of Changes Checklist

- [ ] Background darkened to near-black with CSS grid overlay
- [ ] Green accent desaturated and contrast-checked against all backgrounds
- [ ] WeedVector OG logo used in navbar and footer — no substitution
- [ ] Pricing: Community tier prominent, other tiers greyed as "Coming Soon"
- [ ] New section: WeedVector Sensor + Vision Camera (hardware roadmap)
- [ ] New section: Mission & Philosophy ("Grow Knowledge. Own It. Share It.")
- [ ] New strip: Coming Integrations (Vivosun, Matrix Chat, Full Journey Tracking)
- [ ] Tone: data sovereignty, community-forward, research framing throughout new copy