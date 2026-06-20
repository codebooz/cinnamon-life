"use client";

const pillars = [
  {
    number: "01",
    icon: "🎙️",
    title: "The Concierge",
    accent: "var(--accent-cyan)",
    accentBg: "rgba(94, 234, 212, 0.08)",
    description:
      "A custom AI avatar that greets visitors, narrates their journey, and answers questions across architecture, interior design, art, dining, and venues.",
    highlights: [
      "Not a generic chatbot — a digital expert on Cinnamon Life",
      "Answers nuanced questions and guides guests proactively",
      "Adapts narration based on guest location in the property",
      "Powered by a dedicated AI Knowledge Layer",
    ],
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Guided Tours",
    accent: "var(--accent-blue)",
    accentBg: "rgba(129, 140, 248, 0.08)",
    description:
      "Four curated tour tracks give visitors a structured way to experience the property, supported by interactive maps, hotspots, 3D models, and narration.",
    highlights: [
      "Architecture Tour — design story, materials & iconic features",
      "Interior Design Tour — philosophy, furniture & spatial storytelling",
      "Art Tour — collection, artist stories & cultural context",
      "Signature Spaces Tour — key destinations within the property",
    ],
  },
  {
    number: "03",
    icon: "🎨",
    title: "The Design Archive",
    accent: "var(--gold-400)",
    accentBg: "rgba(196, 163, 90, 0.08)",
    description:
      "Showcases Cinnamon Life's art collection — paintings, sculptures, and featured works — through storytelling, guided walkthroughs, and avatar narration.",
    highlights: [
      "Brings cultural and artistic identity to life",
      "Rich media storytelling for every artwork",
      "Avatar-narrated guided art walkthroughs",
      "Location-triggered storytelling at each artwork",
    ],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="section">
      <div className="section-inner">
        <div className="section-label">Project Vision</div>
        <h2 className="section-title">
          Three Integrated{" "}
          <span className="text-gradient-gold">Pillars</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Together, these pillars deliver an end-to-end guest experience — from
          first welcome to deep discovery.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="card"
              style={{
                padding: "40px 36px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 28,
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="feature-icon"
                    style={{ background: pillar.accentBg }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: pillar.accent,
                        marginBottom: 2,
                      }}
                    >
                      Pillar {pillar.number}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    maxWidth: 700,
                  }}
                >
                  {pillar.description}
                </p>

                {/* Highlights */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 10,
                  }}
                >
                  {pillar.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: pillar.accent,
                          flexShrink: 0,
                          marginTop: 2,
                          fontSize: "0.7rem",
                        }}
                      >
                        ◆
                      </span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
