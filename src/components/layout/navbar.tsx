"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import useSize from "@/hooks/use-size";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";

const nav = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "works",
    href: "/works",
  },
  {
    name: "about-me",
    href: "/about",
  },
  {
    name: "contacts",
    href: "/#contacts",
  },
  {
    name: "skills",
    href: "/about#skills",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const size = useSize();
  useEffect(() => {
    setActive(pathname === "/" ? "home" : pathname.slice(1));
  }, [pathname]);

  return (
    <nav className="flex justify-between py-4 relative">
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
      <div className="flex items-center">
        <CgMenuRightAlt className={cn("text-white cursor-pointer hidden", size < 640 && !isMenuOpen && "block")} size={26} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <GiSplitCross className={cn("text-white cursor-pointer hidden", size < 640 && isMenuOpen && "block")} size={26} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          
        <ul className={cn("flex gap-4", size < 640 && "hidden")}>
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

          <ul className={cn("flex flex-col fixed top-16 left-full size-full backdrop-blur-2xl gap-4 z-10", size < 640 && isMenuOpen && "nav-active")}>
          {nav.map((item, index) => (
            <li
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              key={index}
              className={cn(
                "text-text hover:text-nav px-4",
                (active === item.name || active === item.href) && "text-white",
                isHovered === index && "text-white"
              )}
            >
              <Link href={item.href}>
                <span className="text-primary">#</span>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="w-full max-auto my-4">
            <div className="flex gap-4 w-fit mx-auto text-text items-center">
              <Link href="https://github.com/Gajendrasuman" target="_blank" rel="noopener noreferrer">
              <FaGithub size={26} />
              </Link>
              <Link href="https://x.com/Averrraagggeeee" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={26} />
              </Link>
              <Link href="https://www.linkedin.com/in/gajender868" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={26} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
