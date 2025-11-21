export interface ProjectProps {
    name: string;
    href: string;
    tech: string[];
    desc: string;
}

export const allSmallProjects: ProjectProps[] = [
  {
      name: "Challenge",
      href: "https://challenge.devian.in",
      tech: ["Typescript", "NextJS", "TailwindCSS", "nodemailer", "html-to-png", "framer-motion", "react-hot-toast", "zustand"],
      desc: "This is the sub-domain of Devian on which daily mini UI projects are published."
    },
    {
        name: "Portfolio",
        href: "https://gajender.devian.in",
        tech: ["Typescript", "NextJS", "TailwindCSS", "nodemailer"],
        desc: "The latest iteration of my personal portfolio website, showcasing my projects and skills with a modern design.",
    },
    {
        name: "Portfolio 2",
        href: "https://gajender.vercel.app",
        tech: ["NextJS", "TailwindCSS", "Nodemailer"],
        desc: "An earlier version of my personal portfolio website, highlighting my projects and skills with a clean and responsive design.",
    },
    {
      name: "The catchy Pixel",
      href: "https://catchypixel.devian.in",
      tech: ["Typescript", "NextJS", "TailwindCSS", "nodemailer"],
      desc: "A portfolio website for a startup that specializes in web development and mobile app development.",
    },
    {
      name: "GFG Hub",
      href: "https://gfghub.vercel.app",
      tech: ["Typescript", "NextJS", "TailwindCSS", "Scrapping"],
      desc: "A website where you can find a wide range of DSA and Competitive Programming problems and their solutions.",
    },
    {
      name: "MindOrbit",
      href: "https://mindorbit.vercel.app",
      tech: ["Typescript", "NextJS", "TailwindCSS", "Scrapping"],
      desc: "A website that gives you a random fact every time you open it. You can get API to use it on your own website.",
    },
    {
      name: "Toundra",
      href: "https://toundra.vercel.app",
      tech: ["NextJS", "TailwindCSS"],
      desc: "A lawn and snow removal company website.",
    },
    {
      name: "RSS Feeder",
      href: "https://rssfeeder-mini.vercel.app",
      tech: ["Typescript", "NextJS", "TailwindCSS", "Scrapping"],
      desc: "A realtime RSS scrapper tool."
    },
    {
      name: "Codequest",
      href: "https://codequest.devian.in",
      tech: ["Typescript", "NextJS", "TailwindCSS", "Scrapping"],
      desc: "Codequest app is a platform where you will get a list of upcoming or ongoing coding contests on Leetcode, Atcoder, and Codeforces."
    },
    {
      name: "OROGAMY",
      href: "https://orogamy.vercel.app",
      tech: ["NextJS", "CSS", "JavaScript"],
      desc: "A creative web development agency portfolio."
    },
    {
      name: "AkarUI",
      href: "https://akarui.vercel.app",
      tech: ["NextJS", "TailwindCSS", "TypeScript"],
      desc: "A website where you can find a wide range of UI components and their codes."
    },
    {
      name: "DoraCV",
      href: "https://doracv.vercel.app",
      tech: ["NextJS", "TailwindCSS", "TypeScript"],
      desc: "This is a UI clone of Enhance CV website."
    } 
  ]