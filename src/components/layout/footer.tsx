"use client";
import Link from "next/link";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 pb-10 pt-4 border-t border-text">
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-center gap-2 text-white">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                fill="white"
              />
            </svg>
            <p>Gajender</p>
          </div>
          <p className="text-text text-sm mt-2">
            Founder and CEO{" "}
            <Link
              href="https://devian.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              @Devian
            </Link>
          </p>
        </div>
        <div className="w-fit">
          <h2 className="text-white text-xl">Media</h2>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.linkedin.com/in/gajender868" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">
                <FaLinkedin size={24} />
            </Link>
            <Link href="https://discord://-/users/1249383080452558942" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">
                <FaDiscord size={24} />
            </Link>
            <Link href="https://www.instagram.com/gstech868" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">
                <FaInstagram size={24} />
            </Link>
            <Link href="https://github.com/Gajendrasuman" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">
                {/* <FaGithub size={24} /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
