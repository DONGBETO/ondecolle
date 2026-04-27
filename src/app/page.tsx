import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Vision from "@/src/components/Vision";
import Objectif from "@/src/components/Objectif";
import PiliersSection from "@/src/components/PilierSection";
import ImpactSecteion from "@/src/components/ImpactSection";
import TestimonialSection from "@/src/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Objectif />
      <PiliersSection />
      <ImpactSecteion />
      <TestimonialSection />
    </main>
  );
}