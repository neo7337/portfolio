import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
    name: "Aditya Kumar",
    initials: "AK",
    url: "https://adityakumar.io",
    location: "Gurugram, India",
    locationLink: "https://www.google.com/maps/place/Gurugram,+Haryana",
    description:
        "Backend Engineer focused on distributed systems, Golang, and cloud-native infrastructure — building fast, scalable systems and open-source tools.",
    summary:
        "- **6+ years** building production-grade backend systems in Golang, Java, and Node.js across distributed, cloud-native environments.\n- At **Thoughtworks**, leveraging Gen-AI and AI agents (Langchain) to accelerate client migrations and build intelligent solutions.\n- At **Macquarie**, engineered a serverless AWS Lambda + Golang solution that cut infrastructure costs **40%** and boosted operational efficiency **60%**; led on-prem → AWS migration with **98% reduction** in downtime.\n- At **MiRus**, delivered a **50% performance improvement** on a medical surgical platform by re-architecting critical modules in Spring Boot.\n- Open-source contributor: [Golly SDK](https://github.com/nandlabs/golly), [go-struct-validator](https://github.com/neo7337/go-struct-validator), [go-initializer](https://github.com/neo7337/go-initializer).",
    avatarUrl: "/me.png",
    skills: [
        "Golang",
        "Typescript",
        "Node.js",
        "NestJS",
        "React",
        "Vue.js",
        "Java",
        "Spring Boot",
        "Python",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Serverless Architecture",
        "AWS",
        "GCP",
        "Shell Scripting"
    ],
    categorizedSkills: [
        {
            category: "Languages",
            items: [
                { name: "Golang", level: "Proficient" as const },
                { name: "Java", level: "Proficient" as const },
                { name: "TypeScript", level: "Proficient" as const },
                { name: "Node.js", level: "Proficient" as const },
                { name: "Python", level: "Familiar" as const },
            ],
        },
        {
            category: "Frameworks",
            items: [
                { name: "Spring Boot", level: "Proficient" as const },
                { name: "NestJS", level: "Proficient" as const },
                { name: "React", level: "Familiar" as const },
                { name: "Vue.js", level: "Familiar" as const },
                { name: "Flutter", level: "Familiar" as const },
                { name: "Langchain", level: "Learning" as const },
            ],
        },
        {
            category: "Cloud & Infra",
            items: [
                { name: "AWS", level: "Proficient" as const },
                { name: "Docker", level: "Proficient" as const },
                { name: "Kubernetes", level: "Proficient" as const },
                { name: "Serverless", level: "Proficient" as const },
                { name: "Terraform", level: "Familiar" as const },
                { name: "GCP", level: "Familiar" as const },
                { name: "Shell Scripting", level: "Familiar" as const },
            ],
        },
        {
            category: "Databases",
            items: [
                { name: "PostgreSQL", level: "Proficient" as const },
                { name: "MongoDB", level: "Familiar" as const },
                { name: "Redis", level: "Familiar" as const },
            ],
        },
    ],
    ossHighlights: [
        {
            name: "Golly SDK",
            description: "A simple and powerful SDK for building Golang applications. Provides utilities for REST clients, messaging, caching, logging, and more.",
            githubUrl: "https://github.com/nandlabs/golly",
            pkgUrl: "https://pkg.go.dev/oss.nandlabs.io/golly",
            repo: "nandlabs/golly",
            tags: ["Golang", "SDK", "Open Source"],
        },
        {
            name: "go-struct-validator",
            description: "A Golang struct validation library based on the OpenAPI Specification (OAS). Enables comprehensive, standards-driven validation for Go structs.",
            githubUrl: "https://github.com/neo7337/go-struct-validator",
            pkgUrl: "https://pkg.go.dev/github.com/neo7337/go-struct-validator",
            repo: "neo7337/go-struct-validator",
            tags: ["Golang", "Validation", "OpenAPI"],
        },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        { href: "#projects", icon: CodeIcon, label: "Projects" },
    ],
    contact: {
        email: "labs.neo73@gmail.com",
        tel: "+91-9999873501",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/neo7337",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/adi-kumar/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/adityak007mr",
                icon: Icons.x,
                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "",
                icon: Icons.youtube,
                navbar: false,
            },
            email: {
                name: "Send Email",
                url: "mailto:labs.neo73@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },
    work: [
        {
            company: "Thoughtworks",
            href: "https://www.thoughtworks.com",
            badges: [],
            location: "Bengaluru, India",
            title: "Senior Consultant - Developer",
            logoUrl: "https://logo.clearbit.com/thoughtworks.com",
            start: "September 2025",
            end: "Present",
            description:
                "Utilizing Gen-AI technologies to build client solutions and accelerate migrations.",
            tech: ["Java", "Python", "AWS", "Golang", "Generative AI", "AI Agents", "Langchain"]
        },
        {
            company: "Appmanch Pty Ltd.",
            href: "https://www.appmanch.com",
            badges: [],
            location: "Remote",
            title: "Senior Software Engineer",
            logoUrl: "https://logo.clearbit.com/appmanch.com",
            start: "November 2024",
            end: "September 2025",
            description:
                "I developed a customer-facing, GenAI-powered mobile platform from the ground up with a mobile-first approach using Flutter, ensuring seamless cross-platform performance and an intuitive user experience. On the backend, I designed and built over 7 microservices in Golang, optimized for scalability and performance, with PostgreSQL as the primary database. To enhance system responsiveness and fault tolerance, I implemented an event-driven architecture using message queues. I also integrated the Stripe payment gateway to enable secure, in-app transactions and subscription handling. Throughout the project, I maintained clean code practices, implemented test coverage, and established CI/CD pipelines to ensure high code quality and rapid, reliable deployments.",
            tech: ["Golang", "Typescript", "ReactJS", "PostgreSQL", "System Design", "AWS", "GCP", "Microservices", "Event-Driven Architecture", "Stripe Integration", "CI/CD", "Flutter", "Github Actions"]
        },
        {
            company: "MiRus, LLC",
            href: "https://www.miruslive.com",
            badges: [],
            location: "Remote",
            title: "Full Stack Developer",
            logoUrl: "https://logo.clearbit.com/miruslive.com",
            start: "March 2022",
            end: "October 2024",
            description:
                "I worked on the GALILEO™ Surgical Planning and RPM platforms, where I set up a fully automated AWS infrastructure using Terraform to ensure scalability and consistency. On the frontend, I developed responsive and intuitive user interfaces using Vue.js and TypeScript. I also built and maintained robust backend services with Node.js, TypeScript, and PostgreSQL, and later developed high-performance modules for the GALILEO™ RPM system using Java 17 and Spring Boot, resulting in a 50% improvement in performance.",
            tech: ["Node.js", "Typescript", "VueJS", "Docker", "Medical Image Processing", "AWS", "Spring Boot", "PostgreSQL"]
        },
        {
            company: "Macquarie Global Services Pvt. Ltd.",
            badges: [],
            href: "https://www.macquarie.com",
            location: "Remote/Gurugram, India",
            title: "Senior Associate",
            logoUrl: "https://logo.clearbit.com/macquarie.com",
            start: "November 2019",
            end: "February 2022",
            description:
                "I engineered a serverless solution using AWS Lambda and Golang, which improved operational efficiency by 60% and cut infrastructure costs by 40% through a scalable, event-driven architecture. I also built a self-service CI/CD portal that automated 95% of deployment processes, simplifying workflows and boosting performance by 85%. As part of a major modernization effort, I led the migration from on-prem infrastructure to AWS Cloud, enhancing scalability and security while reducing downtime by 98%. Additionally, I deployed a Kubernetes architecture on Amazon EKS using Gloo Microgateway for secure and efficient traffic management, and implemented GitOps with ArgoCD to streamline CI/CD pipelines and ensure consistent, automated application delivery.",
            tech: ["Golang", "AWS Lambda", "Serverless Architecture", "Docker", "Kubernetes", "Helm", "GitOps", "AWS", "GKE", "Node.js", "CI/CD", "Spring Boot"]
        },
        {
            company: "Newgen Software Technologies",
            href: "https://www.newgensoft.com",
            badges: [],
            location: "Gurugram, India",
            title: "Software Engineer",
            logoUrl: "https://logo.clearbit.com/newgensoft.com",
            start: "July 2018",
            end: "October 2019",
            description:
                "As a key member of the core development team, I spearheaded complex third-party integrations that enhanced overall project functionality and stability. I also developed new features for an internal automation tool, reducing manual boilerplate code generation by 90% and improving developer efficiency. Additionally, I implemented end-to-end automation for custom Excel sheet generation, achieving 100% automation and eliminating the need for manual intervention.",
            tech: ["Java", "Javascript", "SQL", "Integrations"]
        }
    ],
    education: [
        {
            school: "J.C. Bose University of Science and Technology,\nYMCA (Formerly YMCA UST)",
            href: "https://www.jcboseust.ac.in/",
            degree: "Bachelor's Technology in Information Technology (B. Tech.)",
            logoUrl: "https://logo.clearbit.com/jcboseust.ac.in",
            start: "2014",
            end: "2018",
        }
    ],
    projects: [
        {
            title: "Go-Initializer",
            href: "https://github.com/neo7337/go-initializer",
            dates: "Aug 2025 - Present",
            active: true,
            description: "Go Initializer is a modern web-based tool to quickly scaffold Go projects with your preferred project type, Go version, and framework/dependency. It features a beautiful React frontend and is designed for speed and ease of use.",
            technologies: [
                "Golang",
                "ReactJS",
                "tailwindcss",
                "Typescript",
                "Docker"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://goinitializer.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/projects/go-initializer.png",
            video:
                "",
        },
        {
            title: "trekyourworld",
            href: "https://github.com/neo7337/trekYourWorld",
            dates: "May 2024 - Present",
            active: true,
            description:
                "trekYourWorld is an open source project made for the trekking/hiking community.",
            technologies: [
                "Golang",
                "ReactJS",
                "tailwindcss",
                "Typescript",
                "Docker",
                "MongoDB"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://trekyourworld.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/projects/trekyourworld.png",
            video:
                "",
        },
        {
            title: "Golly",
            href: "https://github.com/nandlabs/golly",
            dates: "Jan 2022 - Present",
            active: true,
            description:
                "An Open-Source simple and powerful SDK for building Golang Applications.",
            technologies: [
                "Golang"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pkg.go.dev/oss.nandlabs.io/golly",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "",
        },
        {
            title: "Go Struct Validator",
            href: "https://github.com/neo7337/go-struct-validator",
            dates: "Jan 2022 - Oct 2023",
            active: true,
            description:
                "An Open-Source Golang structs validation library based on the core OpenAPI Specification (OAS). Inspired by the OAS approach, it facilitates the creation of generic structs and ensures comprehensive validation according to OAS standards.",
            technologies: [
                "Golang"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pkg.go.dev/github.com/neo7337/go-struct-validator",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "/projects/go-struct-validator.mp4",
        }
    ]
} as const;
