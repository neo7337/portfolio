import { ImageResponse } from "next/og";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: { slug: string } }) {
    let post;
    try {
        post = await getPost(params.slug);
    } catch {
        notFound();
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#09090b",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    fontFamily: "monospace",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ color: "#22c55e", fontSize: 24 }}>&gt;</span>
                        <span style={{ color: "#6b7280", fontSize: 22 }}>blog post</span>
                    </div>
                    <div
                        style={{
                            color: "#f4f4f5",
                            fontSize: post.metadata.title.length > 60 ? 44 : 52,
                            fontWeight: 700,
                            letterSpacing: "-1px",
                            lineHeight: 1.15,
                            maxWidth: 1000,
                        }}
                    >
                        {post.metadata.title}
                    </div>
                    {post.metadata.summary && (
                        <div
                            style={{
                                color: "#a1a1aa",
                                fontSize: 24,
                                lineHeight: 1.5,
                                maxWidth: 900,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                            }}
                        >
                            {post.metadata.summary}
                        </div>
                    )}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span style={{ color: "#6b7280", fontSize: 22, fontFamily: "monospace" }}>~$</span>
                        <span style={{ color: "#d4d4d8", fontSize: 22, fontWeight: 600 }}>{DATA.name}</span>
                    </div>
                    <span style={{ color: "#52525b", fontSize: 20 }}>
                        {DATA.url.replace("https://", "")}
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
