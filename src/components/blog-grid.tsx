"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface BlogPost {
    title: string;
    url: string;
    coverImage: string | null;
    tags: string[];
    publishedAt: string;
    description: string;
    readingTime: number;
}

function BlogGridCard({ title, url, coverImage, tags, publishedAt, description, readingTime }: BlogPost) {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
        >
            <div className="relative h-40 w-full bg-muted overflow-hidden">
                {coverImage ? (
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <span className="text-3xl font-bold text-muted-foreground/30 font-mono select-none">
                            {"{ }"}
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex flex-wrap gap-1">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">
                            #{tag}
                        </Badge>
                    ))}
                </div>
                <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:underline underline-offset-2">
                    {title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-1">
                    <span>{formatDate(publishedAt)}</span>
                    <span>{readingTime} min read</span>
                </div>
            </div>
        </Link>
    );
}

export function BlogGrid() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=adi73&per_page=3")
            .then((r) => r.json())
            .then((data: any[]) => {
                setPosts(
                    data.slice(0, 3).map((item) => ({
                        title: item.title,
                        url: item.url,
                        coverImage: item.cover_image || item.social_image || null,
                        tags: item.tag_list ?? [],
                        publishedAt: item.published_at,
                        description: item.description,
                        readingTime: item.reading_time_minutes ?? 0,
                    }))
                );
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-xl border overflow-hidden">
                        <div className="h-40 w-full animate-pulse bg-muted" />
                        <div className="p-4 space-y-2">
                            <div className="h-3 w-1/2 rounded animate-pulse bg-muted" />
                            <div className="h-4 w-full rounded animate-pulse bg-muted" />
                            <div className="h-3 w-3/4 rounded animate-pulse bg-muted" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (posts.length === 0) return null;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {posts.map((post) => (
                <BlogGridCard key={post.url} {...post} />
            ))}
        </div>
    );
}
