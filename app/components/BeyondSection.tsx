"use client";

export default function BeyondSection() {
  const channels = [
    {
      icon: "📱",
      title: "Social Media",
      items: [
        "AI-powered experiences shared across platforms",
        "Shareable AR moments for Instagram, TikTok, and LinkedIn",
        "Amplify Cinnamon Life's identity to global audiences",
      ],
    },
    {
      icon: "📰",
      title: "Print Marketing",
      items: [
        "QR and BLE-enabled advertising in brochures and print campaigns",
        "Transform static print into interactive digital experiences",
        "Drive engagement from physical collateral into the platform",
      ],
    },
    {
      icon: "🌍",
      title: "Global Reach",
      items: [
        "Web-based architecture accessible from any device, anywhere",
        "Prospective guests and planners can explore remotely",
        "AI Concierge welcomes off-site audiences equally",
      ],
    },
    {
      icon: "📣",
      title: "Campaigns & Promotions",
      items: [
        "Promote restaurants, events, and seasonal offers through AI engagement",
        "Campaign-specific QR codes on TV and out-of-home media",
        "Time-limited promotions activated without redevelopment",
      ],
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">Extended Reach</div>
        <h2 className="section-title">
          Beyond the{" "}
          <span className="text-gradient-gold">Property</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          The platform&apos;s AI layer and content reach prospective guests, event
          planners, and travellers anywhere in the world.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 20,
          }}
        >
          {channels.map((ch) => (
            <div
              key={ch.title}
              className="card"
              style={{ padding: "28px 24px" }}
            >
              <div
                className="feature-icon"
                style={{ background: "rgba(129,140,248,0.08)" }}
              >
                {ch.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 14,
                }}
              >
                {ch.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {ch.items.map((item, i) => (
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
                        color: "var(--accent-blue)",
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
