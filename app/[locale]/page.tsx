import Hero from '@/components/sections/Hero';
import ObjectivesGrid from '@/components/sections/ObjectivesGrid';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ExpertisesSection from '@/components/sections/ExpertisesSection';
import TechStackBar from '@/components/sections/TechStackBar';
import ProcessSteps from '@/components/sections/ProcessSteps';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ResourcesTeaser from '@/components/sections/ResourcesTeaser';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ObjectivesGrid />
      <SolutionsGrid />
      <ExpertisesSection />
      <TechStackBar />
      <ProcessSteps />
      <AboutTeaser />
      <ResourcesTeaser />
    </main>
  );
}
