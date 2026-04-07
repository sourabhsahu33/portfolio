// app/page.js
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Certifications from './components/homepage/Certification/Certifications'
import ScrollUpButton from "./components/homepage/Scrollup/ScrollUpButton";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <ContactSection />
      <ScrollUpButton />
    </>
  )
};
