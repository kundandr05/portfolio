import Hero from '@/components/home/Hero';
import PageTransition from '@/components/shared/PageTransition';
import GithubStats from '@/components/shared/GithubStats';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <GithubStats />
    </PageTransition>
  );
}
