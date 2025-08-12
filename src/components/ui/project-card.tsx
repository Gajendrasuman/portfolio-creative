import { Project } from "../layout/projects";
import Image from "next/image";
import imgLoader from "@/lib/imgLoader";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-text max-w-96 mx-auto h-fit">
      <div className="">
        <Image
          loader={imgLoader}
          src={project.img}
          alt={project.name}
          width={240}
          height={200}
          className="size-full object-cover aspect-[3/2] brightness-85"
        />
      </div>
      <h3 className="text-text p-2 border-y border-text capitalize">
        {project.tech.join(" ")}
      </h3>
      <div className="flex flex-col gap-2 p-4 justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-2xl">{project.name}</h1>
          <p className="text-text">{project.desc}</p>
        </div>
        <button className="text-white group border border-primary px-2 py-1 mt-0.5 w-fit">
          Live{" "}
          <span className="group-hover:text-primary transition-colors">
            &lt;~&gt;
          </span>
        </button>
      </div>
    </div>
  );
}
