import { ImageResponse } from "next/og";
import { siteTagline } from "./data/site";

export const alt = "Kimberly Pulido — Marketing, Brand Experiences & Content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px 100px",
          background: "linear-gradient(145deg, #7d2524 0%, #5a1718 65%, #3b1011 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 104,
            height: 104,
            borderRadius: 24,
            background: "linear-gradient(145deg, #8f302e, #3b1011)",
            border: "1px solid rgba(255,250,244,0.25)",
            color: "#efbb9a",
            fontSize: 46,
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 46,
          }}
        >
          KP
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#fffaf4",
            lineHeight: 1,
          }}
        >
          Kimberly&nbsp;
          <span style={{ color: "#efbb9a", fontWeight: 400 }}>Pulido</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 30,
            color: "rgba(255,250,244,0.82)",
            maxWidth: 900,
          }}
        >
          {siteTagline}
        </div>
        <div style={{ display: "flex", gap: 56, marginTop: 56 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 600, color: "#efbb9a" }}>
              7+
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,250,244,0.6)",
                marginTop: 6,
              }}
            >
              años de experiencia
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 600, color: "#efbb9a" }}>
              15+
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,250,244,0.6)",
                marginTop: 6,
              }}
            >
              marcas
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
