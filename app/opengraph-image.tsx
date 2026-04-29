import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GoTrustelle — Small-group journeys across India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #0a2c37 0%, #0d4654 35%, #142b53 70%, #0c1b36 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(15,154,177,0.18)",
            filter: "blur(60px)",
          }}
        />
        {/* Ambient glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 160,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(44,98,178,0.14)",
            filter: "blur(50px)",
          }}
        />

        {/* Go · Trust · elle pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#63d2dc", fontSize: 15, fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>Go</span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 15, fontFamily: "sans-serif" }}>·</span>
          <span style={{ color: "#de7f52", fontSize: 15, fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>Trust</span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 15, fontFamily: "sans-serif" }}>·</span>
          <span style={{ color: "#77a4de", fontSize: 15, fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>elle</span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            lineHeight: 1,
            marginBottom: 22,
            fontFamily: "serif",
            letterSpacing: "-0.02em",
          }}
        >
          GoTrustelle
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 680,
            lineHeight: 1.45,
            marginBottom: 52,
            fontFamily: "sans-serif",
          }}
        >
          Small-group journeys across India — felt, not just photographed.
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Max 7–10 travelers", "Female-founded", "24/7 on-trip support"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 100,
                  padding: "10px 22px",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 15,
                  fontFamily: "sans-serif",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 80,
            color: "rgba(255,255,255,0.30)",
            fontSize: 16,
            fontFamily: "sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          gotrustelle.com
        </div>
      </div>
    ),
    { ...size }
  );
}
