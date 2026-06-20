"use client";

export default function PersonalizationSection() {
  const categories = [
    {
      icon: "🌐",
      title: "Multilingual Capability",
      items: [
        "AI Concierge narration and tours in multiple languages",
        "Automatic language detection or selection at journey start",
        "Improved accessibility for international visitors",
      ],
    },
    {
      icon: "💎",
      title: "Loyalty & Discovery Integration",
      items: [
        "Personalised experiences based on Cinnamon Discovery tier",
        "Promotion of member-exclusive offers and benefits",
        "Strengthened engagement with Cinnamon Discovery ecosystem",
      ],
    },
    {
      icon: "🎯",
      title: "Behaviour-Based Personalisation",
      items: [
        "Tailored recommendations based on interests and past engagement",
        "Context-aware suggestions throughout the property visit",
        "More premium, differentiated journey for returning visitors",
      ],
    },
    {
      icon: "🍽️",
      title: "Dining & Hospitality Extensions",
      items: [
        "Restaurant discovery and personalised dining recommendations",
        "Interactive menus with imagery, video, and wine pairings",
        "AI Dining Assistant for reservations and dietary guidance",
        "In-room AI Concierge for facilities, bookings, and spa",
      ],
    },
    {
      icon: "🎪",
      title: "Events & Venue Personalisation",
      items: [
        "AI-assisted venue recommendations by event type",
        "Interactive guides for ballrooms, meeting rooms, and outdoor spaces",
        "Lead capture and routing for weddings, conferences, and exhibitions",
      ],
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">Guest Experience</div>
        <h2 className="section-title">
          Personalised{" "}
          <span className="text-gradient-gold">Guest Journey</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          The platform is designed to grow with guest needs, extending the
          Concierge&apos;s intelligence throughout every touchpoint.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="card"
              style={{ padding: "28px 24px" }}
            >
              <div
                className="feature-icon"
                style={{ background: "rgba(196,163,90,0.08)" }}
              >
                {cat.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 14,
                }}
              >
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: "0.86rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold-400)",
                        flexShrink: 0,
                        marginTop: 2,
                        fontSize: "0.65rem",
                      }}
                    >
                      ◆
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
