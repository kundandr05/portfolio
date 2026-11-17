import Hero from '@/components/home/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Publications from '@/components/sections/Publications';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Courses from '@/components/sections/Courses';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Publications />
      <Experience />
      <Skills />
      <Courses />
      <Contact />
    </div>
  );
}
