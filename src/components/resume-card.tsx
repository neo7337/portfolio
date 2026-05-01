"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
    bullets?: readonly string[];
    tech?: readonly string[]
}

/** Renders a string with **bold** markers as inline spans */
function InlineBold({ text }: { text: string }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {parts.map((part, i) =>
                part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={i} className="text-foreground font-semibold">
                        {part.slice(2, -2)}
                    </strong>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
    bullets,
    tech
}: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (description || bullets) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <Link
            href={href || "#"}
            className="block cursor-pointer"
            onClick={handleClick}
        >
            <Card className="flex hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex-none">
                    <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <AvatarImage
                            src={logoUrl}
                            alt={altText}
                            className="object-contain"
                        />
                        <AvatarFallback>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-grow ml-4 items-center flex-col group">
                    <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                                <span className="whitespace-pre-wrap">{title}</span>
                                {badges && (
                                    <span className="inline-flex gap-x-1">
                                        {badges.map((badge, index) => (
                                            <Badge
                                                variant="secondary"
                                                className="align-middle text-xs"
                                                key={index}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                )}
                                <ChevronRightIcon
                                    className={cn(
                                        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                        isExpanded ? "rotate-90" : "rotate-0"
                                    )}
                                />                            </h3>
                            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                {period}
                            </div>
                        </div>
                        {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
                    </CardHeader>
                    {(bullets || description) && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                height: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-2 mb-2 overflow-hidden"
                        >
                            {bullets && bullets.length > 0 ? (
                                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                                    {bullets.map((bullet, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-indigo-500/70" />
                                            <span><InlineBold text={bullet} /></span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">
                                    {description}
                                </p>
                            )}
                        </motion.div>
                    )}
                    {tech && (
                        <div className="flex flex-wrap gap-1">
                            {tech.map((skill, id) => (
                                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                    <Badge key={skill}>{skill}</Badge>
                                </BlurFade>
                            ))}
                        </div>
                    )}
                </div>
            </Card>
        </Link>
    );
};
