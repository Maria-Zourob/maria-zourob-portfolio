import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectsSection from "@/components/projects/ProjectsSection";
import UIUXSection from "@/components/sections/UIUXSection";
import GraphicDesignSection from "@/components/sections/GraphicDesignSection";
import Experience from "@/components/sections/Experience";
import EducationCerts from "@/components/sections/EducationCerts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <UIUXSection />
        <GraphicDesignSection />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
