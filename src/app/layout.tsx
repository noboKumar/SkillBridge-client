import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import QueryProvider from "@/providers/queryProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillBridge",
  description: "SkillBridge App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="w-11/12 mx-auto">
        <QueryProvider>
          <Toaster position="top-center"></Toaster>
          <NavBar></NavBar>
          <div className="min-h-screen py-2">{children}</div>
        </QueryProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
