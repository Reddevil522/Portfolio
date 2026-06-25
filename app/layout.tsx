import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gopal Kumar | Full Stack Web Developer",
  description:
    "Portfolio of Gopal Kumar — Full Stack Web Developer specializing in MERN Stack, building modern, scalable, and user-friendly web applications.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "MCA Student"
  ],
  authors: [{ name: "Gopal Kumar" }],
  creator: "Gopal Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gopalkumar.dev", // User placeholder
    title: "Gopal Kumar | Full Stack Developer",
    description: "Portfolio of Gopal Kumar — Full Stack Web Developer specializing in MERN Stack, building modern, scalable, and user-friendly web applications.",
    siteName: "Gopal Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopal Kumar | Full Stack Developer",
    description: "Portfolio of Gopal Kumar — Full Stack Web Developer specializing in MERN Stack, building modern, scalable, and user-friendly web applications.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b", // zinc-950
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-[300px] w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
