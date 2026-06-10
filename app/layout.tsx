import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gopal Kumar | Full Stack Web Developer",
  description:
    "Portfolio of Gopal Kumar — Full Stack Web Developer specializing in MERN Stack, building modern, scalable, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Sidebar />
        <main className="md:ml-[300px]">{children}</main>
      </body>
    </html>
  );
}
