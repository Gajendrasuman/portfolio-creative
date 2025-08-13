"use client"
import Heading from "@/components/ui/heading"
import ProjectCard from "../ui/project-card"

export interface Project {
    name: string;
    href: string;
    img: string;
    tech: string[];
    desc: string;
}

export const projects: Project[] = [
    {
        name: "Devian",
        href: "https://devian.in",
        img: "/images/portfolios/devian.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "nodemailer"],
        desc: "Web/App development agency"
    },
    {
        name: "Chemstock",
        href: "https://chemstock.co.in",
        img: "/images/portfolios/chemstock.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "API", "Nodejs", "Cloudinary", "JWT"],
        desc: "Chemical selling platform"

    },
    {
        name: "Vizack Enterprises",
        href: "https://vizackenterprises.com",
        img: "/images/portfolios/vizackenterprises.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react"],
        desc: "Construction company's website"
    },
    {
        name: "The Catchy Pixel",
        href: "http://thecatchypixel.vercel.app",
        img: "/images/portfolios/thecatchypixel.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "nodemailer"],
        desc: "Agency portfolio website"
    },
    {
        name: "Toundra",
        href: "https://toundra.vercel.app",
        img: "/images/portfolios/toundra.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "nodemailer"],
        desc: "Snow removal and Lawn care"
    },
    {
        name: "GFG Hub",
        href: "https://gfghub.vercel.app",
        img: "/images/portfolios/gfghub.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "Scrapping", "API"],
        desc: "DSA skill development platform"
    },
    {
        name: "Mindorbit",
        href: "https://mindorbit.vercel.app",
        img: "/images/portfolios/mindorbit.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "Scrapping", "API"],
        desc: "Random fact generator"
    },
]

export default function Projects(){
    return (
        <section id="projects" className="mt-32">
            <Heading title="Projects" href="/projects"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}