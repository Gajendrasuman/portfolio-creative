import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import Footer from "@/components/layout/footer";
import DotBox from "@/components/ui/dot-box";

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
      <body className="antialiased bg-secondary relative flex">
        <div className="w-1/4 hidden md:flex flex-col gap-2 px-2 relative">
          <hr className="w-0.5 h-40 bg-text mx-auto float-vertical" />
          <div className="mx-auto w-fit flex flex-col gap-4 float-vertical">
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
          <DotBox className="relative w-fit top-1/5 left-1/9 float-vertical" />
          <div className="absolute -left-2 top-1/2 h-48 w-2/3 border border-text float-vertical"></div>
          <div className="absolute -left-2 top-3/4 h-48 w-2/3  border border-text float-vertical">
          </div>
        </div>
        <div className="w-full max-w-6xl max-md:px-2 mx-auto bg-background min-h-screen">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        <div className="w-1/4 xl:block hidden relative overflow-hidden">
          <DotBox v_count={6} h_count={6} xgap={12} ygap={12} rounded={false} className="absolute top-1/5 right-0 float-horizontal" />
          <div className="absolute bottom-32 right-0 h-48 w-2/3 -left-1/3 border border-text float-vertical"></div>
          <DotBox v_count={4} h_count={6} xgap={12} ygap={8} className="absolute bottom-3/10 left-0 float-vertical" />
        </div>
      </body>
    </html>
  );
}
