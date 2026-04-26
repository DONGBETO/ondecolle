import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Vision from "@/src/components/Vision";
import Objectif from "@/src/components/Objectif";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Objectif />
    </main>
  );
}