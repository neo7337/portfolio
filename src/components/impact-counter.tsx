"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "Companies", value: 5, suffix: "" },
    { label: "Perf Gains", value: 50, suffix: "%" },
    { label: "OSS Projects", value: 3, suffix: "" },
];

function useCountUp(target: number, duration: number, active: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let startTime: number | null = null;
        let rafId: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [target, duration, active]);
    return count;
}

function StatItem({ label, value, suffix }: (typeof STATS)[number]) {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const count = useCountUp(value, 1400, active);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold tabular-nums tracking-tight text-indigo-400 font-mono">
                {count}{suffix}
            </span>
            <span className="text-xs text-muted-foreground text-center">{label}</span>
        </div>
    );
}

export function ImpactCounterStrip() {
    return (
        <div className="grid grid-cols-4 gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-6 py-5">
            {STATS.map((s) => (
                <StatItem key={s.label} {...s} />
            ))}
        </div>
    );
}
