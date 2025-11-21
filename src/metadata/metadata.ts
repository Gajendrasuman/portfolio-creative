import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Gajender | Full Stack Developer & UI/UX Designer",
  description: "Hi, I'm Gajender - a Full Stack Developer and UI/UX Designer. I specialize in building high-performance, user-friendly web applications with modern technologies.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },

  alternates: {
    canonical: "https://gajender.devian.in",
    languages: {
      "en-US": "https://gajender.devian.in",
    },
  },

  openGraph: {
    title: "Gajender | Full Stack Developer & UI/UX Designer",
    description: "Explore my portfolio showcasing my projects, skills, and expertise in web development and UI/UX design.",
    url: "https://gajender.devian.in",
    siteName: "Gajender's Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gajender - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "https://gajender.devian.in",
    creator: "@Averrraagggeeee",
    title: "Gajender | Full Stack Developer & UI/UX Designer",
    description: "Explore my portfolio showcasing my projects, skills, and expertise in web development and UI/UX design.",
    images: ["/images/og-image.png"],
  },

  // SEO
  keywords: ["Full Stack Developer", "UI/UX Designer", "Web Developer", "React", "Next.js", "JavaScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Gajender", url: "https://gajender.devian.in" }],
  creator: "Gajender",

  manifest: "/site.webmanifest",

  icons: {
    icon: "/logo/Logo.png",
    shortcut: "/logo/Logo.png",
    apple: "/logo/Logo.png",
    other: [{ rel: "icon", url: "/logo/Logo.png" }],
  }
};