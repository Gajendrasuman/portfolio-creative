export interface Project {
    name: string;
    href: string;
    img: string;
    tech: string[];
    desc: string;
}

export const allProjects: Project[] = [
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
        name: "Toundra",
        href: "https://toundra.vercel.app",
        img: "/images/portfolios/toundra.png",
        tech: ["nextjs", "tailwindcss", "typescript", "react", "nodemailer"],
        desc: "Snow removal and Lawn care"
    }
]