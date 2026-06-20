"use client";

import { useState } from "react";

type Tab = "qr" | "ble" | "ar";

const techData = {
  qr: {
    label: "QR Code",
    badge: "Tier 1",
    icon: "📱",
    subtitle: "Proven & Cost-Effective",
    description:
      "Guests scan a printed QR code at each designated stop to unlock narration, maps, content, and tour progression. Works on any smartphone camera — no app required.",
    pros: [
      "Works on every smartphone, no app download required",
      "Lowest infrastructure cost — only printed signage needed",
      "Familiar to most guests — widely understood technology",
      "Fastest to deploy — no hardware installation",
      "Easy to maintain and update content behind the code",
      "Zero hardware failure risk",
    ],
    cons: [
      "Guests must actively stop and scan — interrupts natural flow",
      "Physical QR codes can be obscured, damaged, or vandalised",
      "No passive awareness of guest movement or dwell time",
      "Less premium feel — associated with menus and check-ins",
      "Analytics limited to scan events only",
      "Guests who skip a point receive no content at all",
      "User behavior tracking (heatmaps, dwell time) is not available",
    ],
  },
  ble: {
    label: "BLE Beacons",
    badge: "Tier 2 — Recommended",
    icon: "📡",
    subtitle: "Seamless & Enterprise-Grade",
    description:
      "Bluetooth Low Energy beacons are small, battery-powered devices installed at each tour point. When a guest's phone comes within range, the platform automatically triggers relevant content — no scanning required.",
    pros: [
      "Seamless, hands-free guest experience — content triggers automatically",
      "Enterprise-grade — standard in premium hotels and luxury retail",
      "No guest action required — removes friction entirely",
      "Full user behavior tracking — dwell time, movement, engagement",
      "Aligns with luxury positioning — intelligence without effort",
      "More resilient content delivery — no dependency on scanning",
      "Richer personalisation — adapts based on journey path",
      "Future-ready — supports Phase 2 features (in-room, loyalty, dining)",
      "Industry-standard SLA support with beacon monitoring",
      "Meaningfully differentiates from QR-only competitors",
    ],
    cons: [
      "Requires a lightweight companion app component",
      "Beacon hardware must be installed and maintained (battery changes)",
      "Marginally higher upfront cost compared to QR",
      "Requires physical installation at each tour point",
      "Bluetooth must be enabled on the guest's device",
    ],
  },
  ar: {
    label: "AR + AI",
    badge: "Tier 3",
    icon: "🔮",
    subtitle: "Most Immersive Experience",
    description:
      "The property is spatially mapped, enabling guests to hold up their phone and see architecture, storytelling, wayfinding overlays, and interactive content in augmented reality — layered directly onto the physical environment.",
    pros: [
      "Most immersive experience — story layered on the real world",
      "Not limited to fixed points — works throughout the property",
      "Spectacular for marketing — shareable, social-media-worthy moments",
      "Combines spatial computing with AI intelligence",
      "Sets Cinnamon Life apart as a genuine innovator",
      "Full user behavior tracking — spatial, dwell, engagement",
    ],
    cons: [
      "Highest cost and complexity — full-property spatial mapping",
      "Longer delivery timeline",
      "Requires AR-capable device with camera permissions",
      "Older or lower-end smartphones may have limited performance",
      "Content updates may require re-anchoring if spaces change",
      "Not all guests comfortable with AR interactions",
      "Higher ongoing maintenance complexity and cost",
    ],
  },
};

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState<Tab>("ble");
  const tech = techData[activeTab];

  return (
    <section id="technology" className="section">
      <div className="section-inner">
        <div className="section-label">Technology Comparison</div>
        <h2 className="section-title">
          Choose Your <span className="text-gradient-gold">Technology</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          All three tiers share the same Concierge, AI Knowledge Layer, and
          content library. The difference is how the platform detects guest
          location and triggers the experience.
        </p>

        {/* Tab selector */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {(["qr", "ble", "ar"] as Tab[]).map((key) => {
            const d = techData[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: "14px 28px",
                  borderRadius: "var(--radius-md)",
                  border:
                    activeTab === key
                      ? key === "ble"
                        ? "1px solid var(--border-gold)"
                        : "1px solid rgba(255,255,255,0.15)"
                      : "1px solid var(--border-subtle)",
                  background:
                    activeTab === key
                      ? key === "ble"
                        ? "rgba(196, 163, 90, 0.08)"
                        : "rgba(255,255,255,0.04)"
                      : "transparent",
                  color:
                    activeTab === key
                      ? key === "ble"
                        ? "var(--gold-300)"
                        : "var(--text-primary)"
                      : "var(--text-muted)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{d.icon}</span>
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div
          className="glass-gold"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <span className="badge badge-gold">{tech.badge}</span>
          </div>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 4,
            }}
          >
            {tech.label}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--gold-400)",
              fontWeight: 500,
              marginBottom: 16,
            }}
          >
            {tech.subtitle}
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 800,
            }}
          >
            {tech.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
            }}
          >
            {/* Pros */}
            <div>
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--accent-emerald)",
                  marginBottom: 16,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                ✓ Advantages
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {tech.pros.map((p, i) => (
                  <div key={i} className="pro-item">
                    <span className="pro-icon">✓</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div>
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--accent-rose)",
                  marginBottom: 16,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                ✕ Considerations
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {tech.cons.map((c, i) => (
                  <div key={i} className="con-item">
                    <span className="con-icon">✕</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
