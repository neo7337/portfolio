import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";
export const alt = DATA.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#09090b",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "monospace",
                    position: "relative",
                }}
            >
                {/* subtle grid bg */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span style={{ color: "#6b7280", fontSize: 32 }}>~$</span>
                        <span style={{ color: "#f4f4f5", fontSize: 56, fontWeight: 700, letterSpacing: "-1px" }}>
                            {DATA.name}
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ color: "#22c55e", fontSize: 28, fontWeight: 600 }}>&gt;</span>
                        <span style={{ color: "#a1a1aa", fontSize: 28, maxWidth: 900 }}>
                            {DATA.description}
                        </span>
                    </div>
                    <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                        {["Golang", "Distributed Systems", "Cloud-Native", "Open Source"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    background: "rgba(255,255,255,0.07)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "#d4d4d8",
                                    padding: "6px 16px",
                                    borderRadius: 8,
                                    fontSize: 20,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div style={{ color: "#52525b", fontSize: 20, marginTop: 8 }}>
                        {DATA.url.replace("https://", "")}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
