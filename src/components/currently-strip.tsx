import Link from "next/link";

const CURRENT_ITEMS = [
    { verb: "Building", label: "go-initializer", href: "https://goinitializer.com" },
    { verb: "Writing", label: "technical blog posts", href: "/blog" },
    { verb: "Exploring", label: "Langchain & AI agents" },
];

export function CurrentlyStrip() {
    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-indigo-500/30 bg-indigo-500/5 px-4 py-3 text-sm">
            <span className="font-semibold shrink-0 text-indigo-400">Currently →</span>
            {CURRENT_ITEMS.map((item, i) => (
                <span key={item.label} className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">{item.verb}</span>
                    {item.href ? (
                        <Link
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium underline underline-offset-2"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium">{item.label}</span>
                    )}
                    {i < CURRENT_ITEMS.length - 1 && (
                        <span className="text-muted-foreground">·</span>
                    )}
                </span>
            ))}
        </div>
    );
}
