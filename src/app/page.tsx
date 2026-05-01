import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { BlogsMarquee } from "@/components/blogs-marquee";
import { ImpactCounterStrip } from "@/components/impact-counter";
import { CurrentlyStrip } from "@/components/currently-strip";
import { OSSHighlight } from "@/components/oss-highlight";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { TerminalHero } from "@/components/terminal-hero";
import { BlogGrid } from "@/components/blog-grid";
import { CVDownloadButton } from "@/components/cv-download-button";

const BLUR_FADE_DELAY = 0.04;

async function getGitHubStats(repo: string): Promise<{ stars: number; forks: number }> {
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
            next: { revalidate: 3600 },
            headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) return { stars: 0, forks: 0 };
        const data = await res.json();
        return { stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 };
    } catch {
        return { stars: 0, forks: 0 };
    }
}

export default async function Page() {
    const [projectStats, ossStats] = await Promise.all([
        Promise.all(
            DATA.projects.map((p) =>
                "githubRepo" in p && p.githubRepo
                    ? getGitHubStats(p.githubRepo as string)
                    : Promise.resolve({ stars: undefined, forks: undefined })
            )
        ),
        Promise.all(
            DATA.ossHighlights.map((p) => getGitHubStats(p.repo))
        ),
    ]);

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-16">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-4 flex justify-between items-start">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFade delay={BLUR_FADE_DELAY} inView>
                                <TerminalHero
                                    greeting={`Hi, I'm ${DATA.name.split(" ")[0]} \u{1F44B}`}
                                    tagline={DATA.description}
                                />
                            </BlurFade>
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-32 border-2 border-border ring-2 ring-indigo-500/40 ring-offset-2 ring-offset-background">
                                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <ImpactCounterStrip />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <CurrentlyStrip />
            </BlurFade>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-2xl font-bold tracking-tight">
                        About
                        <span className="h-0.5 w-8 bg-indigo-500 block mt-1.5 rounded-full" />
                    </h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                    <br />
                    <CVDownloadButton />
                </BlurFade>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Work Experience
                            <span className="h-0.5 w-8 bg-indigo-500 block mt-1.5 rounded-full" />
                        </h2>
                    </BlurFade>
                    <div className="relative ml-3 border-l-2 border-indigo-500/20 pl-6">
                        {DATA.work.map((work, id) => (
                            <BlurFade
                                key={work.company}
                                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                            >
                                <div className="relative mb-4 last:mb-0">
                                    <span className="absolute -left-[31px] top-3 flex size-4 items-center justify-center rounded-full border-2 border-indigo-500/70 bg-indigo-500/20 ring-2 ring-background shadow-sm shadow-indigo-500/40" />
                                    <ResumeCard
                                        key={work.company}
                                        logoUrl={work.logoUrl}
                                        altText={work.company}
                                        title={work.company}
                                        subtitle={work.title}
                                        href={work.href}
                                        badges={work.badges}
                                        period={`${work.start} - ${work.end ?? "Present"}`}
                                        description={work.description}
                                        bullets={work.bullets}
                                        tech={work.tech}
                                    />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Education
                            <span className="h-0.5 w-8 bg-indigo-500 block mt-1.5 rounded-full" />
                        </h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade
                            key={education.school}
                            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                            <ResumeCard
                                key={education.school}
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Skills
                            <span className="h-0.5 w-8 bg-indigo-500 block mt-1.5 rounded-full" />
                        </h2>
                    </BlurFade>
                    {DATA.categorizedSkills.map((category, catId) => (
                        <BlurFade key={category.category} delay={BLUR_FADE_DELAY * 10 + catId * 0.05}>
                            <div className="space-y-2">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className={
                                                "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-mono font-medium transition-colors " + (
                                                    skill.level === "Proficient"
                                                        ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
                                                        : skill.level === "Familiar"
                                                        ? "bg-violet-500/15 text-violet-300 border-violet-500/30"
                                                        : "bg-amber-500/15 text-amber-300 border-amber-500/30"
                                                )
                                            }
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                    <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
                        <div className="flex gap-4 text-xs text-muted-foreground pt-1">
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block size-2 rounded-full bg-indigo-500" />
                                Proficient
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block size-2 rounded-full bg-violet-500" />
                                Familiar
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block size-2 rounded-full bg-amber-500" />
                                Learning
                            </span>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <section id="open-source">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 10.6}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Open Source
                            <span className="h-0.5 w-8 bg-indigo-500 block mt-1.5 rounded-full" />
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 10.8}>
                        <OSSHighlight projects={DATA.ossHighlights} stats={ossStats} />
                    </BlurFade>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-3 py-1 text-sm font-mono">
                                    My Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Check out my latest work
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I&apos;ve worked on a variety of projects, from web applications, libraries to building SDK&apos;s. Here are a few of my
                                    favorites.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
                        <FeaturedProjectCard
                            title={DATA.projects[0].title}
                            description={DATA.projects[0].description}
                            githubUrl={DATA.projects[0].href}
                            websiteUrl={DATA.projects[0].links[0].href}
                            image={DATA.projects[0].image}
                            tags={DATA.projects[0].technologies}
                            dates={DATA.projects[0].dates}
                        />
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                    stars={projectStats[id].stars}
                                    forks={projectStats[id].forks}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="blog-posts">
                <div className="space-y-8 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-3 py-1 text-sm font-mono">
                                    Posts
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Latest Writing
                                </h2>
                            </div>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
                        <BlogGrid />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <BlogsMarquee />
                    </BlurFade>
                </div>
            </section>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-3 py-1 text-sm font-mono">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Let&apos;s Work Together
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Open to <strong>senior engineering roles</strong> and <strong>consulting engagements</strong> — distributed systems, cloud-native backends, and AI-powered tooling.
                                Reach out via any of the links below.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
