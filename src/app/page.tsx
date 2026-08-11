import Hero from '@/components/home/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Courses from '@/components/sections/Courses';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Publications from '@/components/sections/Publications';
import Contact from '@/components/sections/Contact';
import GithubStats from '@/components/shared/GithubStats';
import PageTransition from '@/components/shared/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-0 w-full overflow-hidden">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="courses">
          <Courses />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="publications">
          <Publications />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="github-stats">
          <GithubStats />
        </section>
      </div>
    </PageTransition>
  );
}
