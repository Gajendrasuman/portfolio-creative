import { meta } from "@/metadata/metadata";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LeftSide from "@/components/layout/left-block";
import RightSide from "@/components/layout/right-side";


export const metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-secondary relative flex">
        <LeftSide />
        <div className="w-full max-w-6xl max-md:px-2 mx-auto bg-background min-h-screen">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        <RightSide />
      </body>
    </html>
  );
}
