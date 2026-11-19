import Hero from '@/components/home/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Publications from '@/components/sections/Publications';
import Experience from '@/components/sections/Experience';
import HowIWork from '@/components/sections/HowIWork';
import Skills from '@/components/sections/Skills';
import Courses from '@/components/sections/Courses';
import Contact from '@/components/sections/Contact';
import PageTransition from '@/components/shared/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-0 w-full">
        {/* 1. Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* 2. Selected Work */}
        <section id="projects">
          <Projects />
        </section>

        {/* 3. About */}
        <section id="about">
          <About />
        </section>

        {/* 4. Research and Books */}
        <section id="publications">
          <Publications />
        </section>

        {/* 5. Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* 6. How I Work */}
        <section id="how-i-work">
          <HowIWork />
        </section>

        {/* 7. Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* 8. Certifications */}
        <section id="courses">
          <Courses />
        </section>

        {/* 9. Contact */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </PageTransition>
  );
}
