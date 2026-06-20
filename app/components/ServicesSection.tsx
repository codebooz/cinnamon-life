"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "☁️",
      title: "Infrastructure & Media Streaming",
      text: "High-concurrency AWS cloud for up to 50,000 interactions/month. Real-time media streaming for 3D assets, maps, and avatar voice. End-to-end encryption with PDPA/GDPR compliance.",
    },
    {
      icon: "🛡️",
      title: "SLA & Priority Support",
      text: "99.9% uptime guarantee with 24/7 automated monitoring. Dedicated Technical Account Manager. <2-hour response SLA for critical fixes; <12-hour for general updates.",
    },
    {
      icon: "🧠",
      title: "AI Guardrail Tuning & Knowledge Optimisation",
      text: "Daily monitoring of chat logs to prevent AI hallucinations and ensure brand alignment. Ongoing prompt engineering, FAQ updates, and knowledge expansion.",
    },
    {
      icon: "📊",
      title: "Executive Guest Intelligence & Reporting",
      text: "Live analytics dashboard. Daily automated engagement reports with chat log access. Monthly Guest Intelligence Report for strategic decision-making.",
    },
  ];

  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="section-label">Post-Launch Support</div>
        <h2 className="section-title">
          Managed Services{" "}
          <span className="text-gradient-gold">& SLA</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Comprehensive monthly support covering infrastructure, AI tuning,
          and guest intelligence reporting.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="card"
              style={{ padding: "32px 28px" }}
            >
              <div
                className="feature-icon"
                style={{ background: "rgba(196,163,90,0.08)" }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="glass"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: 28,
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <strong style={{ color: "var(--text-secondary)" }}>
            Out of scope:
          </strong>{" "}
          Creation of new tours, new floor maps, or any net-new platform
          features. These are quoted separately.
        </div>
      </div>
    </section>
  );
}
