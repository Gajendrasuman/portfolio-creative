import Heading from "@/components/ui/heading";
import ProjectCard from "@/components/ui/project-card";
import { allProjects } from "@/data/projects";
import { allSmallProjects } from "@/data/small-projects";
import SmallProjectCard from "@/components/ui/smaill-project-card";

export default function Work() {
  
  return (
    <section className="pb-12">
      <h1 className="text-[32px] mt-12 w-fit relative text-white font-semibold lowercase">
        <span className="text-primary">/</span>
        <span>Projects</span>
      </h1>
      <p className="text-text my-2 mb-24">List of my projects</p>
      <Heading title="complete-apps" />
      <div className="mb-24 grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {allProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <Heading title="small-projects" />
      <div className="mb-24 grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {allSmallProjects.map((project, index) => (
          <SmallProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
