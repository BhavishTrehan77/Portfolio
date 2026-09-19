import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GenAISystems from "@/components/GenAISystems";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProblemSolving from "@/components/ProblemSolving";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-sky-500/25 selection:text-sky-300">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <GenAISystems />
        <Experience />
        <Projects />
        <ProblemSolving />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
