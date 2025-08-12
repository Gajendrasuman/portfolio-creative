import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gajender",
  description: "Gajender",
  icons:{
    shortcut: "/logo/Logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-secondary ">
        <hr className="w-0.5 h-3/11 bg-text absolute top-0 left-1/24" />
        <div className="absolute top-2/7 left-1/30 flex flex-col gap-4">
          <div className="size-7 bg-text rounded-full flex items-end justify-center cursor-pointer hover:scale-110 transition-transform">
            <LuGithub size={22} fill="black" />
          </div>
          <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <LuLinkedin size={20} fill="black" />
          </div>
          <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <LuTwitter size={20} fill="black" />
          </div>
          <div className="size-7 bg-text rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <LuMail size={20} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-background min-h-screen">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
