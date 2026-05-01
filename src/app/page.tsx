'use client';

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { downloadPDF } from "@/lib/utils";
import { BlogsMarquee } from "@/components/blogs-marquee";
import { ImpactCounterStrip } from "@/components/impact-counter";
import { CurrentlyStrip } from "@/components/currently-strip";
import { OSSHighlight } from "@/components/oss-highlight";
import { FeaturedProjectCard } from "@/components/featured-project-card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

    const handleDownload = () => {
        const fileName = 'Aditya_Resume.pdf'; // Desired filename
        downloadPDF(fileName);
    }

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-28 border">
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
                    <h2 className="text-xl font-bold">
                        About
                    </h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                    <br />
                    <Button
                        type="button"
                        size="sm"
                        className="px-2"
                        onClick={handleDownload}
                    >
                        Download CV
                    </Button>
                </BlurFade>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                        <BlurFade
                            key={work.company}
                            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                        >
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
                                tech={work.tech}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Education</h2>
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
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    {DATA.categorizedSkills.map((category, catId) => (
                        <BlurFade key={category.category} delay={BLUR_FADE_DELAY * 10 + catId * 0.05}>
                            <div className="space-y-2">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <div key={skill.name} className="flex items-center gap-1">
                                            <Badge variant="secondary" className="text-xs">
                                                {skill.name}
                                            </Badge>
                                            <span className={
                                                "text-[9px] font-medium px-1 py-0.5 rounded " + (
                                                    skill.level === "Proficient"
                                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                        : skill.level === "Familiar"
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                                )
                                            }>
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                    <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
                        <div className="flex gap-4 text-xs text-muted-foreground pt-1">
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block size-2 rounded-full bg-emerald-500" />
                                Proficient
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block size-2 rounded-full bg-blue-500" />
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
                        <h2 className="text-xl font-bold">Open Source</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 10.8}>
                        <OSSHighlight projects={DATA.ossHighlights} />
                    </BlurFade>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
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
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="blog-posts">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Posts
                                </div>
                            </div>
                        </div>
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
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                You can reach out to me via below social profiles.<br />
                                Happy to Connect!
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
