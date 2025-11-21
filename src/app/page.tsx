import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/projects";
import Skills from "@/components/pages/home/skills";
import About from "@/components/pages/home/about";
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
