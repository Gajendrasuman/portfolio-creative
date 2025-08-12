import Heading from "../ui/heading";
import DotBox from "../ui/dot-box";
import Image from "next/image";
import imgLoader from "@/lib/imgLoader";

export const skills: Record<string, string[]> = {
  languages: ["typescript", "javascript", "php", "python", "html", "css"],
  databases: ["mysql", "mongodb", "postgresql", "sqlite"],
  frameworks: [
    "react",
    "next",
    "node",
    "vite",
    "astro",
    "flask",
    "django",
    "tailwindcss",
  ],
  tools: ["git", "github", "figma", "vscode", "windsurf", "eraser", "chatGPT"],
  other: [
    "nodemailer",
    "firebase",
    "Vercel",
    "Netlify",
    "Render",
    "Hostinger",
    "V0",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mt-32">
      <Heading title="Skills" />
      <div className="flex gap-4 justify-between">
        <div className="relative w-1/2 ">
          <DotBox className="relative top-1/5 left-1/9" />
          <div className="relative left-2/3 -top-1/7 size-32 border border-text "></div>
          <Image
            loader={imgLoader}
            src="/images/logo.svg"
            alt="skills"
            width={120}
            height={120}
            className="relative top-1/5 left-1/6"
          />
          <DotBox className="relative -top-1/5 left-1/2" />
          <div className="relative left-4/5 -top-1/5 size-20 border border-text "></div>
          
        </div>
        <div className="w-1/2 flex flex-wrap items-start h-fit justify-end gap-2">
            {Object.keys(skills).map((skill, index) => (
                <div key={index} className="border border-text h-fit max-w-44">
                    <h2 className="border-b border-text text-white pb-2 pt-1 px-2 font-semibold capitalize">{skill}</h2>
                    <p className="text-text p-2 capitalize">{skills[skill].join(" ")}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
