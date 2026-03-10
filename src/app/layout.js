import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://nilsankar.vercel.app"),

  title: {
    default: "Nilsankar's Lab",
    template: "%s | Nilsankar",
  },

  description:
    "Full Stack Developer focused on Research, AI, and Building Innovative Web Applications. Explore projects, experiments, and discoveries by Nilsankar.",

  keywords: [
    "Nilsankar",
    "Full Stack Developer",
    "MERN Stack",
    "AI Developer",
    "React Developer",
    "Next.js Portfolio",
    "Research and Innovation",
  ],

  authors: [{ name: "Nilsankar" }],

  openGraph: {
    title: "Nilsankar | Full Stack Developer",
    description:
      "Building the Future Through Research & Code. Explore projects, AI research, and innovation.",
    url: "https://nilsankar.vercel.app",
    siteName: "Nilsankar",
    locale: "en_US",
    type: "website",
    images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Nilsankar Portfolio",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nilsankar | Full Stack Developer",
    description:
      "Research-driven Full Stack Developer exploring AI and innovation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-200`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}