import Link from "next/link";

export default function Heading({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[32px] w-fit relative text-white font-semibold lowercase">
        <span className="text-primary">#</span>{title}{" "}
        <span className="absolute top-1/2 -translate-y-1/2 w-2/3 md:w-[150%] lg:w-[250%] ml-2 md:ml-4 h-[1] bg-primary"></span>
      </h1>
      {href && (
        <Link href={href}>
          <button className="text-white group font-medium hover:text-nav cursor-pointer transition-colors ">
            View all <span className="group-hover:text-primary">~~&gt;</span>
          </button>
        </Link>
      )}
    </div>
  );
}
