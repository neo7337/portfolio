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
        <div className="space-y-3 font-mono">
            <div
                className={cn(
                    "flex items-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none",
                    greetingClassName
                )}
            >
                <span className="text-muted-foreground/50 select-none mr-2 text-2xl sm:text-3xl">
                    ~$
                </span>
                <span>{displayedGreeting}</span>
                {phase === "greeting" && (
                    <span className="ml-0.5 inline-block w-[3px] self-stretch bg-foreground animate-blink" />
                )}
            </div>
            <div
                className={cn(
                    "max-w-[600px] md:text-xl flex items-start gap-2",
                    taglineClassName
                )}
            >
                <span className="text-emerald-500 select-none shrink-0 font-semibold mt-px">
                    &gt;
                </span>
                <span className="text-muted-foreground">{displayedTagline}</span>
                {(phase === "tagline" || phase === "done") && (
                    <span className="ml-0.5 inline-block w-[2px] h-[1.2em] mt-px bg-emerald-500 shrink-0 animate-blink" />
                )}
            </div>
        </div>
    );
}
