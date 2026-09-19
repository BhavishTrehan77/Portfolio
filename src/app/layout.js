import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhavish Trehan | Full-Stack Developer & GenAI Engineer",
  description:
    "Engineering portfolio of Bhavish Trehan. Full-Stack Web Development, Backend Architecture, REST APIs, Authentication, Vector Search, and Generative AI / RAG Systems.",
  keywords: [
    "Bhavish Trehan",
    "Full-Stack Developer",
    "GenAI Engineer",
    "Software Engineer Portfolio",
    "Backend Developer",
    "RAG Systems",
    "Next.js Developer",
    "Kalvium SGT University",
  ],
  authors: [{ name: "Bhavish Trehan" }],
  creator: "Bhavish Trehan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavishtrehan.dev",
    title: "Bhavish Trehan | Full-Stack Developer & GenAI Engineer",
    description:
      "Full-stack applications, scalable backend APIs, authentication workflows, and Generative AI / RAG systems.",
    siteName: "Bhavish Trehan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavish Trehan | Full-Stack Developer & GenAI Engineer",
    description:
      "Full-stack applications, scalable backend APIs, authentication workflows, and Generative AI / RAG systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070a12] text-slate-100 antialiased selection:bg-sky-500/25 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
