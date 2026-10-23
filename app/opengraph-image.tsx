import { ImageResponse } from "next/og";

export const alt = "Ibrahim Adeniran | Frontend and Web3 Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#090a08",
          color: "#f0f1e9",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            right: "-30px",
            top: "40px",
            border: "1px solid rgba(200,255,85,0.35)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "390px",
              height: "390px",
              border: "1px dashed rgba(200,255,85,0.3)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c8ff55",
              fontSize: "100px",
              fontWeight: 700,
              letterSpacing: "-12px",
            }}
          >
            IA.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "#c8ff55",
            position: "relative",
          }}
        >
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#c8ff55" }} />
          PORTFOLIO / 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: "760px" }}>
          <div style={{ fontSize: "74px", lineHeight: 0.98, fontWeight: 800, letterSpacing: "-5px" }}>
            I BUILD
          </div>
          <div style={{ fontSize: "74px", lineHeight: 0.98, fontWeight: 800, letterSpacing: "-5px", color: "#c8ff55" }}>
            DIGITAL THINGS.
          </div>
          <div style={{ marginTop: "28px", fontSize: "24px", color: "#a4aa9a" }}>
            Frontend engineering × Web3 product development
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(240,241,233,0.2)",
            paddingTop: "22px",
            color: "#a4aa9a",
            fontSize: "16px",
            letterSpacing: "2px",
            position: "relative",
          }}
        >
          <span>IBRAHIM ADEWALE ADENIRAN</span>
          <span>IAADENIRAN.VERCEL.APP</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
