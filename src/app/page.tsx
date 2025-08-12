import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/projects";
import Skills from "@/components/layout/skills";
import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
