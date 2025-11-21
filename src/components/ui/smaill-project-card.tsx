"use client"
export interface ProjectProps {
    name: string;
    href: string;
    tech: string[];
    desc: string;
}

export default function SmallProjectCard({ project }: { project: ProjectProps }) {
  const handleClick = () => {
    const a  = document.createElement("a");
    a.href = project.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
    a.remove();
  }
  return (
    <div className="border border-text sm:max-w-96 max-w-[90%] hover:scale-105 transition-transform duration-300 mx-auto h-fit">
      <div className="">
        
      </div>
      <h3 className="text-text p-2 border-y border-text capitalize">
        {project.tech.join(" ")}
      </h3>
      <div className="flex flex-col gap-2 p-4 justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-2xl">{project.name}</h1>
          <p className="text-text">{project.desc}</p>
        </div>
        <button onClick={handleClick} className="text-white group border border-primary px-2 py-1 mt-0.5 w-fit">
          Live{" "}
          <span className="group-hover:text-primary transition-colors">
            &lt;~&gt;
          </span>
        </button>
      </div>
    </div>
  );
}
