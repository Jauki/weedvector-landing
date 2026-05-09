# Prompt: Design the WeedVector Landing Page

---

## Project Brief

Design a **single-page marketing landing page** for **WeedVector** — an open-source, IoT-connected cannabis cultivation management platform. The product is positioned as a **professional open-source SaaS** (self-host free or cloud-managed), targeting serious growers, IoT tinkerers, and small commercial operators.

**Design Tone:** Technical credibility meets approachable professionalism. Reference products like **Grafana**, **Supabase**, **n8n**, and **Tailscale** in spirit — dark-themed, developer-trusted, confident without hype.

---

## Visual Style Directive

Use the **provided reference images** as your primary visual and layout inspiration. Extract:

- **Color palette** directly from the reference images (expect dark backgrounds, muted greens, subtle accent colors)
- **Layout patterns** — bento grids, feature cards, hero screenshot mockups, gradient glows
- **Typography weight and hierarchy** — large bold headlines, restrained body text, monospace for technical elements
- **Component style** — pill badges, frosted glass cards, glowing status indicators, chart previews

The design should feel like a **modern open-source SaaS product page** — polished, dark-mode-first, with a botanical/grow aesthetic layered subtly (not clichéd). Think cannabis meets dev tooling, not cannabis lifestyle branding.

---

## Page Structure & Section Specs

### 1. Navigation Bar
- Logo left: `WeedVector` wordmark (leaf or circuit-leaf icon optional)
- Links: Features · Pricing · Docs · GitHub
- CTAs right: `[Self-Host Free]` (ghost/outline) + `[Try Cloud]` (primary filled)
- Sticky, semi-transparent blur on scroll

---

### 2. Hero Section
**Headline:**
> "Grow data that works as hard as you do."

**Sub-headline:**
> WeedVector is the open-source cultivation management platform that connects your sensors, tracks every grow, and turns your camera into a timelapse machine. Self-host free. Or let us run it.

**CTAs:**
- `[Get Started — Free]` → GitHub
- `[Try Cloud Hosted]` → Sign-up

**Visual:**
- Large dashboard screenshot or animated UI mockup showing: sensor charts, environment dashboard, light schedule arc dial
- Subtle animated gradient glow behind the mockup
- Small pill badge above headline: `Open Source · IoT-Native · Self-Hostable`

---

### 3. Social Proof Bar
Thin horizontal strip:
- GitHub Stars badge
- "Built on: " tech logo strip — **TimescaleDB · MQTT · Next.js · Docker · Grafana · RabbitMQ**
- Optionally: "Trusted by growers in X countries" (placeholder)

---

### 4. Feature Highlights — Bento Grid (4–6 cards)
Use a **bento/mosaic grid layout**. Each card has an icon, short title, and 1–2 sentence description. Feature cards to include:

| Card Title | Copy |
|---|---|
| **IoT Sensor Integration** | Connect DHT-11, DS18B20, and custom sensors via MQTT. Readings land in TimescaleDB automatically. No manual imports. |
| **Grow Cycle Tracking** | 8 cultivation phases — Planning to Harvest. Every transition logged with timestamps and notes. |
| **Automated Timelapse** | Your camera captures images on schedule. WeedVector stitches them into a timelapse video — synchronized with sensor history. |
| **Light Schedule Intelligence** | Real-time arc dial shows your current light/dark state, time remaining, and full schedule history. |
| **VPD — Out of the Box** | Vapor Pressure Deficit calculated per environment, automatically from your sensor data. |
| **Team Access** | Invite growers, partners, or viewers per environment. Role-based — Admin, Grower, Viewer. |

**Visual treatment:** Cards with subtle border glow, small chart/UI previews inside larger cards, icons in accent color.

---

### 5. "How It Works" — 3-Step Visual
Horizontal or diagonal step layout:

1. **Connect** — "Plug in your Raspberry Pi sensors. They auto-register via MQTT."
2. **Track** — "Create environments, grows, and plants. Log phases and observations."
3. **Watch** — "Live charts, camera feeds, and timelapse videos — one dashboard."

Connecting line or arrow between steps. Subtle icon per step.

---

### 6. Feature Deep-Dive — Alternating Scroll Sections
3 full-width alternating sections (text left / visual right, then swap):

**Section A — Timelapse + Sensor Sync**
- Headline: *"Watch your canopy grow. Literally."*
- Copy: Schedule a timelapse, connect a camera. WeedVector captures, compiles, and plays back your grow alongside synchronized temperature and humidity charts — no FFmpeg required.
- Visual: Timelapse modal mockup with synced chart underneath

**Section B — IoT Device Dashboard**
- Headline: *"From sensor to dashboard in minutes."*
- Copy: PiCollector runs on any Raspberry Pi. One MQTT connection. Your environment temperature, humidity, and VPD appear automatically. Zoom into any time window. Auto-refresh. Configurable retention.
- Visual: Sensor chart screenshot with time-range selector

**Section C — Strain & Grow Library**
- Headline: *"A grow journal that actually works."*
- Copy: Track strains (with THC/CBD/flowering time), individual plants (with pheno names), grow phases (with full transition history), and timestamped notes — all linked to each other.
- Visual: Plant/strain library card grid mockup

---

### 7. Open Source Positioning Section
Full-width section, centered text, dark background with green/teal accent:

**Headline:** "Open source, always."

**Copy:**
> WeedVector's full source code is on GitHub. Clone it. Deploy it. Modify it. No hidden features. No license traps. No telemetry you didn't ask for.
> If you'd rather not manage servers — we've got you.

**Dual CTAs:**
- `[View on GitHub]` (outline, GitHub icon)
- `[Use Cloud Version]` (primary)

Add a subtle code block or terminal snippet showing: `docker compose up` → instant deploy.

---

### 8. Pricing Section
**4-tier pricing table** with toggle: `Self-Hosted / Cloud-Hosted`

| Tier | Price | Tagline |
|---|---|---|
| **Community** | Free — Self-Hosted | "Run it yourself. Own everything." |
| **Grower** | ~$12/mo | "The full platform. Zero server headaches." |
| **Pro** | ~$39/mo | "Professional-grade. No compromises." |
| **Enterprise** | Custom | "WeedVector at scale, managed your way." |

**Key pricing UX notes:**
- Celebrate the Community (free) tier — don't hide it
- Highlight **Grower** as recommended
- Bold note beneath table: *"Cloud plans run the exact same open-source code. No hidden features. No lock-in."*
- FAQ accordion below: "What's the difference between Community and Grower?" → Infrastructure, support, maintenance — not features.

---

### 9. Tech Trust Strip (Developer Signal)
Short section for technical credibility:

**Headline:** "Built on proven open-source infrastructure."

- Tech badges: `Kotlin` `Spring Boot` `Next.js 16` `React 19` `TimescaleDB` `MinIO` `RabbitMQ` `Eclipse Mosquitto` `Docker Compose` `Prometheus` `Grafana` `JWT`
- Short line: *"OpenAPI spec at /swagger-ui.html. MQTT protocol documented. Everything is inspectable."*
- Link: `[Read the Docs]` + `[OpenAPI Spec]`

---

### 10. Footer
- Logo + one-liner: *"Open-source cultivation management for serious growers."*
- Links: GitHub · Docs · Pricing · Discord · License
- Small text: *"Free forever to self-host. Managed by us when you'd rather be growing."*

---

## Copy & Tone Rules

| ❌ Avoid | ✅ Use Instead |
|---|---|
| "Revolutionary cannabis tracking" | "A grow journal that actually works" |
| "Enterprise-grade analytics platform" | "Professional monitoring for serious growers" |
| "Our proprietary VPD algorithm" | "VPD calculated from your sensor data, automatically" |
| "Premium SaaS offering" | "Let us handle the servers. You handle the plants." |

- **Direct:** Name the benefit in the headline, not the feature
- **Confident, not hypey:** No "world's first" or "game-changing"
- **Grower-literate:** Use terms like VPD, 18/6, pheno, 12/12 naturally — don't define everything
- **Community-forward:** Open source is a feature, not a disclaimer

---

## Design Constraints & Requirements

- **Dark mode first** — deep dark background (#0d0d0d or similar), not pure black
- **Accent color:** Muted cannabis green or teal — not neon, not lime
- **Typography:** Modern sans-serif (e.g., Geist, Inter, or similar) — large bold hero, tight body
- **Mobile responsive** — all sections must stack cleanly on mobile
- **Animations:** Subtle only — fade-in on scroll, no aggressive parallax
- **Screenshots/mockups:** Show actual dashboard UI where possible — sensor charts, the arc dial, camera card with online ping, timelapse modal
- **No stock photography of cannabis plants** — UI-first visual language, data and dashboard as hero

---

## Deliverable

Produce a **complete, production-ready single HTML file** (or component-structured code) for the WeedVector landing page, incorporating:
- All 10 sections above
- Copy written per tone guidelines
- Visual design extracted from the reference images provided
- Responsive layout
- Dark-mode design system
- All CTAs, badges, and tech strips included