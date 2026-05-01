import { Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

export interface OSSProject {
    name: string;
    description: string;
    githubUrl: string;
    pkgUrl?: string;
    repo: string;
    tags: readonly string[];
}

interface OSSCardProps extends OSSProject {
    stars: number;
    forks: number;
}

function OSSCard({ name, description, githubUrl, pkgUrl, tags, stars, forks }: OSSCardProps) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm p-4 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="space-y-1">
                <h3 className="font-semibold text-sm">{name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-1 py-0 text-[10px]">
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-indigo-400 font-mono font-medium">
                        <Star className="size-3" fill="currentColor" />
                        {stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-indigo-400/70 font-mono">
                        <GitFork className="size-3" />
                        {forks.toLocaleString()}
                    </span>
                </div>
                <div className="flex gap-3">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Icons.github className="size-3" /> GitHub
                    </Link>
                    {pkgUrl && (
                        <Link
                            href={pkgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ExternalLink className="size-3" /> pkg.go.dev
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export function OSSHighlight({
    projects,
    stats,
}: {
    projects: readonly OSSProject[];
    stats: { stars: number; forks: number }[];
}) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((p, i) => (
                <OSSCard
                    key={p.name}
                    {...p}
                    stars={stats[i]?.stars ?? 0}
                    forks={stats[i]?.forks ?? 0}
                />
            ))}
        </div>
    );
}
