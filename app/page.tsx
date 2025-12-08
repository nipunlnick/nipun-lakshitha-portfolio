import BackgroundAnimation from "../components/BackgroundAnimation";
import CursorGlow from "../components/CursorGlow";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ServicesSection from "../components/ServicesSection";
import Contact from "../components/Contact";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neon-yellow selection:text-black relative">
      <BackgroundAnimation />
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Projects />
        <ServicesSection />
        <Contact />
      </main>
    </div>
  );
}
