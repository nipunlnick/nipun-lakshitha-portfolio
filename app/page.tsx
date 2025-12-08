import BackgroundAnimation from "../components/BackgroundAnimation";
import CursorGlow from "../components/CursorGlow";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ServicesSection from "../components/ServicesSection";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neon-yellow selection:text-black relative">
      <BackgroundAnimation />
      <CursorGlow />

      {/* Navigation (Simple Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">
            nipunlakshitha<span className="text-neon-yellow">.com</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a
              href="#about"
              className="hover:text-neon-yellow transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-neon-yellow transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-neon-yellow transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-neon-yellow transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-neon-yellow transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

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
