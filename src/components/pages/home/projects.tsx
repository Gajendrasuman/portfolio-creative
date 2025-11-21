import Heading from "@/components/ui/heading"
import ProjectCard from "@/components/ui/project-card";
import { allProjects } from "@/data/projects";

export default function Projects(){
    return (
        <section id="projects" className="mt-32">
            <Heading title="Projects" href="/works"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
                {allProjects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}