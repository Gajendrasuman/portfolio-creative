"use client";
import AboutPage from "@/components/pages/home/about";
import Heading from "@/components/ui/heading";
import { skills } from "@/components/pages/home/skills";

export default function About() {
  return (
    <section className="min-h-screen">
      <h1 className="text-[32px] mt-12 w-fit relative text-white font-semibold lowercase">
        <span className="text-primary">/</span>
        <span>About Me</span>
      </h1>
      <p className="text-text my-2 mb-24">Who am I?</p>

      <AboutPage />

      <section id="skills" className="mt-16 mb-24">
        <Heading title="Skills" />
        <div
          className={"max-w-5xl mt-16 flex flex-wrap h-fit gap-2 justify-start mx-auto"}
        >
          {Object.keys(skills).map((skill, index) => (
            <div
              key={index}
              className="border border-text h-fit w-fit max-w-58"
            >
              <h2 className="border-b border-text text-white pb-2 pt-1 px-2 font-semibold capitalize">
                {skill}
              </h2>
              <p className="text-text p-2 capitalize">
                {skills[skill].join(" ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
