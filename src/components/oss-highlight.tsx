"use client";

import { useEffect, useState } from "react";
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

function GitHubStats({ repo }: { repo: string }) {
    const [stats, setStats] = useState<{ stars: number; forks: number } | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
            .then((r) => r.json())
            .then((d) => setStats({ stars: d.stargazers_count ?? 0, forks: d.forks_count ?? 0 }))
            .catch(() => {});
    }, [repo]);

    if (!stats) {
        return <span className="inline-block h-4 w-16 animate-pulse rounded bg-muted" />;
    }

    return (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
                <Star className="size-3" fill="currentColor" />
                {stats.stars.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
                <GitFork className="size-3" />
                {stats.forks.toLocaleString()}
            </span>
        </div>
    );
}

function OSSCard({ name, description, githubUrl, pkgUrl, repo, tags }: OSSProject) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border p-4 hover:bg-muted/30 transition-colors">
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
                <GitHubStats repo={repo} />
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

export function OSSHighlight({ projects }: { projects: readonly OSSProject[] }) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((p) => (
                <OSSCard key={p.name} {...p} />
            ))}
        </div>
    );
}
