import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";

interface FeaturedProjectCardProps {
    title: string;
    description: string;
    githubUrl: string;
    websiteUrl: string;
    image?: string;
    tags: readonly string[];
    dates: string;
}

export function FeaturedProjectCard({
    title,
    description,
    githubUrl,
    websiteUrl,
    image,
    tags,
    dates,
}: FeaturedProjectCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 via-card to-transparent p-6 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
                {image && (
                    <div className="relative h-44 w-full sm:w-64 shrink-0 overflow-hidden rounded-lg border">
                        <Image src={image} alt={title} fill className="object-cover object-top" />
                    </div>
                )}
                <div className="flex flex-col justify-between gap-4 min-w-0">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-block rounded-md bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 text-xs font-medium font-mono">
                                Featured
                            </span>
                            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground">{dates}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium hover:underline underline-offset-2"
                            >
                                <Icons.github className="size-3.5" /> Source Code
                            </Link>
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium hover:underline underline-offset-2"
                            >
                                <ExternalLink className="size-3.5" /> Live Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
