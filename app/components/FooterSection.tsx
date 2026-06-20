"use client";

export default function FooterSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,163,90,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label" style={{ textAlign: "center" }}>
          Next Steps
        </div>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: 16 }}
        >
          Ready to <span className="text-gradient-gold">Begin?</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          For Phase 2 scoping, technology upgrade discussions, or to arrange a
          walkthrough of the BLE or AR options, please contact the project team.
        </p>

        <a href="mailto:hello@xleron.com" className="btn-primary">
          Contact Project Team
          <span>→</span>
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: 1200,
          margin: "80px auto 0",
          paddingTop: 40,
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "linear-gradient(135deg, #c4a35a, #e8d5a3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              color: "#0a0a0f",
            }}
          >
            CL
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            Cinnamon Life Digital Discovery Platform
          </span>
        </div>
        <div
          style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}
        >
          Phase 1 Proposal — June 2026 — Confidential
        </div>
      </div>
    </section>
  );
}
