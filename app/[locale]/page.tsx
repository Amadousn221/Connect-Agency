import Hero from '@/components/sections/Hero';
import ObjectivesGrid from '@/components/sections/ObjectivesGrid';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ExpertisesSection from '@/components/sections/ExpertisesSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ObjectivesGrid />
      <SolutionsGrid />
      <ExpertisesSection />
    </main>
  );
}
