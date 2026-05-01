import Link from "next/link";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

interface BlogItem {
    title: string;
    url: string;
    tags: string[];
    publishDate: string;
    description: string;
}

async function fetchBlogData(): Promise<BlogItem[]> {
    try {
        const response = await fetch("https://dev.to/api/articles?username=adi73", {
            next: { revalidate: 3600 },
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.map((item: any) => ({
            title: item.title,
            url: item.url,
            tags: item.tag_list,
            publishDate: item.readable_publish_date,
            description: item.description,
        }));
    } catch {
        return [];
    }
}

export async function BlogsMarquee() {
    const posts = await fetchBlogData();

    if (posts.length === 0) return null;

    return (
        <div className="rounded-xl border border-border overflow-hidden divide-y divide-border">
            {posts.map((post) => (
                <Link
                    key={post.url}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start sm:items-center gap-3 px-4 py-3 hover:bg-muted/20 transition-colors"
                >
                    <div className="flex-1 min-w-0 space-y-0.5">
                        <p className="text-sm font-medium leading-snug truncate group-hover:text-indigo-400 transition-colors">
                            {post.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1 hidden sm:block">
                            {post.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="hidden sm:flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0 font-mono">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap tabular-nums">
                            {post.publishDate}
                        </span>
                        <ArrowUpRight className="size-3.5 text-muted-foreground/50 group-hover:text-indigo-400 transition-colors" />
                    </div>
                </Link>
            ))}
        </div>
    );
}
