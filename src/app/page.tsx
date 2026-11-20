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
        <Hero />

        {/* 2. Selected Work */}
        <Projects />

        {/* 3. About */}
        <About />

        {/* 4. Research and Books */}
        <Publications />

        {/* 5. Experience */}
        <Experience />

        {/* 6. How I Work */}
        <HowIWork />

        {/* 7. Skills */}
        <Skills />

        {/* 8. Certifications */}
        <Courses />

        {/* 9. Contact */}
        <Contact />
      </div>
    </PageTransition>
  );
}
