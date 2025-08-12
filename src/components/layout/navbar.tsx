"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  {
    name: "home",
    href: "#hero",
  },
  {
    name: "works",
    href: "#projects",
  },
  {
    name: "about-me",
    href: "#about",
  },
  {
    name: "contacts",
    href: "#contacts",
  },
  {
    name: "skills",
    href: "#skills",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    setActive(pathname === "/" ? "home" : pathname.slice(1));
  }, [pathname]);

  return (
    <nav className="flex justify-between py-4">
      <h1 className="flex gap-2 items-center text-text font-bold">
        <Image
          className=""
          src="/logo/Logo.svg"
          alt="Logo"
          width={20}
          height={20}
        />
        Gajender
      </h1>
      <ul className="flex gap-4">
        {nav.map((item, index) => (
          <li
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            key={index}
            className={cn(
              "text-white hover:text-nav",
              (active === item.name || active === item.href) && "active",
              isHovered === index && "text-nav"
            )}
          >
            <Link href={item.href}>
              <span className="text-nav">#</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
