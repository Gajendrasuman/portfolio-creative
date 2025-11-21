"use client"
import Link from "next/link"
import DotBox from "../ui/dot-box"
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/cn"

export default function LeftSide(){
  const [path, setPath] = useState("")
  const pathname = usePathname();

  useEffect(() => {
    setPath(pathname)
  }, [pathname])
  return (
    <div className="w-1/4 hidden md:flex flex-col gap-2 px-2 relative">
          <hr className="w-0.5 h-40 bg-text mx-auto float-vertical" />
          <div className="mx-auto w-fit flex flex-col gap-4 float-vertical">
            <div className="size-7 bg-text rounded-full flex items-end justify-center cursor-pointer hover:scale-110 transition-transform">
              <Link href="https://github.com/Gajendrasuman" target="_blank" rel="noopener noreferrer">
                <LuGithub size={22} fill="black" />
              </Link>
            </div>
            <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Link href="https://linkedin.com/in/gajender868" target="_blank" rel="noopener noreferrer">
                <LuLinkedin size={20} fill="black" />
              </Link>
            </div>
            <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Link href="https://x.com/Averrraagggeeee" target="_blank" rel="noopener noreferrer">
                <LuTwitter size={20} fill="black" />
              </Link>
            </div>
            <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Link href="mailto:gajendrasuman868@gmail.com?subject=Inquiry&body=Hi%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                <LuMail size={20} />
              </Link>
            </div>
          </div>
          <DotBox className="relative w-fit top-1/5 left-1/9 float-vertical" />
          <div className={cn("absolute -left-2 top-1/2 h-48 w-2/3 border border-text float-vertical", path === "/about" && "hidden" )}></div>
          <div className="absolute -left-2 top-3/4 h-48 w-2/3  border border-text float-vertical">
          </div>
        </div>
  )
}