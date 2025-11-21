"use client";
import Heading from "@/components/ui/heading";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { FaTwitter} from "react-icons/fa6";
import Link from "next/link";
import { BsGlobe2 } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contacts" className="mt-24">
      <Heading title="contacts" />
      <div className="flex justify-between gap-2 flex-wrap">
        <p className="text-text mt-10 md:max-w-1/2">
          I&apos;m interested in freelance opportunities. However, if you have other
          request or question, don&apos;t hesitate to contact me
        </p>
        <div className="border border-text p-2 px-4 mt-10">
            <h2 className="text-white">Message me here</h2>
            <ul className="mt-2 flex flex-col gap-2">
                <Link href="mailto:gajender.mern@gmail.com?subject=Inquiry&body=Hi%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer"><li className="flex gap-2 items-center text-text group"><span className="group-hover:text-primary"><IoIosMail size={24} /></span> <span>gajender.mern@gmail.com</span></li></Link>
                <Link href="https://x.com/Averrraagggeeee" target="_blank" rel="noopener noreferrer"><li className="flex gap-2 items-center text-text group"><span className="group-hover:text-primary"><FaTwitter size={24} /></span> <span>@Averrraagggeeee</span></li></Link>
                <Link href="https://wa.me/918305372697?text=Hii" target="_blank" rel="noopener noreferrer"><li className="flex gap-2 items-center text-text group"><span className="group-hover:text-primary"><IoLogoWhatsapp size={24} /></span> <span>+91-8305372697</span></li></Link>
                <Link href="https://devian.in" target="_blank" rel="noopener noreferrer"><li className="flex gap-2 items-center text-text group"><span className="group-hover:text-primary"><BsGlobe2 size={24} /></span> <span>devian.in</span></li></Link>
            </ul>   
        </div>
      </div>
    </section>
  );
}
