"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalHeroProps {
    greeting: string;
    tagline: string;
    greetingClassName?: string;
    taglineClassName?: string;
}

export function TerminalHero({
    greeting,
    tagline,
    greetingClassName,
    taglineClassName,
}: TerminalHeroProps) {
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const [displayedTagline, setDisplayedTagline] = useState("");
    const [phase, setPhase] = useState<"greeting" | "pause" | "tagline" | "done">("greeting");

    useEffect(() => {
        if (phase === "greeting") {
            if (displayedGreeting.length < greeting.length) {
                const t = setTimeout(
                    () => setDisplayedGreeting(greeting.slice(0, displayedGreeting.length + 1)),
                    48
                );
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setPhase("tagline"), 280);
            return () => clearTimeout(t);
        }

        if (phase === "tagline") {
            if (displayedTagline.length < tagline.length) {
                const t = setTimeout(
                    () => setDisplayedTagline(tagline.slice(0, displayedTagline.length + 1)),
                    22
                );
                return () => clearTimeout(t);
            }
            setPhase("done");
        }
    }, [phase, displayedGreeting, displayedTagline, greeting, tagline]);

    return (
        <div className="rounded-xl border border-border bg-card shadow-2xl shadow-indigo-500/10 overflow-hidden">
            {/* macOS-style title bar */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
                <span className="size-3 rounded-full bg-[#ff5f56] border border-black/10" />
                <span className="size-3 rounded-full bg-[#ffbd2e] border border-black/10" />
                <span className="size-3 rounded-full bg-[#27c93f] border border-black/10" />
                <span className="mx-auto text-xs text-muted-foreground/60 font-mono select-none pr-8">zsh</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 space-y-3 font-mono">
                <div
                    className={cn(
                        "flex items-center text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none",
                        greetingClassName
                    )}
                >
                    <span className="text-muted-foreground/50 select-none mr-2 text-xl sm:text-2xl">
                        ~$
                    </span>
                    <span>{displayedGreeting}</span>
                    {phase === "greeting" && (
                        <span className="ml-0.5 inline-block w-[3px] self-stretch bg-indigo-400 animate-blink" />
                    )}
                </div>
                <div
                    className={cn(
                        "max-w-[600px] md:text-lg flex items-start gap-2",
                        taglineClassName
                    )}
                >
                    <span className="text-indigo-400 select-none shrink-0 font-semibold mt-px">
                        &gt;
                    </span>
                    <span className="text-muted-foreground">{displayedTagline}</span>
                    {(phase === "tagline" || phase === "done") && (
                        <span className="ml-0.5 inline-block w-[2px] h-[1.2em] mt-px bg-indigo-400 shrink-0 animate-blink" />
                    )}
                </div>
            </div>
        </div>
    );
}
