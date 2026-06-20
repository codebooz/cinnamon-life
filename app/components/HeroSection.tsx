"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}
    >
      {/* Background ambient orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,163,90,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
        className="animate-float"
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Fine grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <div
          className="badge badge-gold animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span style={{ fontSize: "0.7rem" }}>◆</span>
          Phase 1 — Project Proposal
        </div>

        <h1
          className="animate-fade-in-up"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            animationDelay: "0.2s",
            maxWidth: 800,
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>
            Digital Discovery
          </span>
          <br />
          <span className="text-gradient-gold">Platform</span>
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: 620,
            lineHeight: 1.8,
            animationDelay: "0.35s",
          }}
        >
          An AI-powered, mobile-first concierge and guided-discovery experience
          designed to transform how guests explore and engage with the Cinnamon
          Life property.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up"
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            animationDelay: "0.5s",
          }}
        >
          <a href="#overview" className="btn-primary">
            Explore Proposal
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </a>
          <a href="#investment" className="btn-outline">
            View Investment
          </a>
        </div>

        {/* Meta info */}
        <div
          className="animate-fade-in-up"
          style={{
            display: "flex",
            gap: 40,
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
            animationDelay: "0.65s",
          }}
        >
          {[
            { label: "Prepared For", value: "Cinnamon Life / ClanB" },
            { label: "Date", value: "June 2026" },
            { label: "Phase", value: "Phase 1" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in"
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animationDelay: "1.2s",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(180deg, var(--gold-400), transparent)",
          }}
        />
      </div>
    </section>
  );
}
