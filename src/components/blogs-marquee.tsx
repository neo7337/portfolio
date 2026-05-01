import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface BlogItem {
    img: string;
    title: string;
    url: string;
    tags: string[];
    publishDate: string;
    userName: string;
    description: string;
}

const ReviewCard = ({
    img,
    title,
    url,
    tags,
    publishDate,
    userName,
    description
}: BlogItem) => {
    return (
        <Link href={url} key={url} target="_blank">
        <figure
            className={cn(
                "relative w-64 h-[250px] cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {title}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{userName}</p>
                    <time className="font-sans text-xs">{publishDate}</time>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{description}</blockquote>
            <div className="flex relative items-center gap-2">
            {tags && tags.length > 0 && (
                <div className="flex flex-row flex-wrap items-start gap-1 inset-x-0 bottom-0">
                    {tags?.map((tag) => (
                        <Badge
                            className="px-1 py-0 text-[10px]"
                            variant="secondary"
                            key={tag}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
            </div>
        </figure>
        </Link>
    );
};

async function fetchBlogData(): Promise<BlogItem[]> {
    try {
        const response = await fetch("https://dev.to/api/articles?username=adi73", {
            next: { revalidate: 3600 },
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.map((item: any) => ({
            img: "https://avatar.vercel.sh/AK",
            title: item.title,
            url: item.url,
            tags: item.tag_list,
            publishDate: item.readable_publish_date,
            userName: "@" + item.user.username,
            description: item.description,
        }));
    } catch {
        return [];
    }
}

export async function BlogsMarquee() {
    const blogData = await fetchBlogData();

    if (blogData.length === 0) return null;

    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
                {blogData.map((review) => (
                    <ReviewCard key={review.url} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
