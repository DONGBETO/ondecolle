import PilierCard, { Pilier } from "./PilierCard";

const piliers: Pilier[] = [
  {
    title: "ACCOMPAGNER",
    description:
      "Nous mettons à la disposition des jeunes des mentors, experts et formateurs qui sont entièrement à leur écoute. Leur rôle est d’aider ces jeunes à structurer leur idée en profondeur, en leur fournissant des conseils avisés et personnalisés. Cet accompagnement les permettra de développer un plan solide et de construire une entreprise pérenne.",
    image: "/assets/images/accompagner.jpg",
  },
  {
    title: "CONNECTER",
    description:
      "Nous avons tissé un réseau solide de mécènes, de sponsors et de business angels désireux d’investir. Ces acteurs sont spécifiquement mobilisés pour soutenir les jeunes porteurs de projets ambitieux. Leur disponibilité assure que l’absence de moyens financiers ne sera plus un obstacle à la réalisation de leurs initiatives.",
    image: "/assets/images/connecter.jpg",
  },
  {
    title: "PROPULSER",
    description:
      "Nous mettons à disposition des jeunes des outils pertinents et des bourses pour financer leurs formations. Un suivi humain et personnalisé est également offert, assurant un accompagnement constant. L’objectif est de les aider à atteindre leurs buts sans se disperser, en leur fournissant un soutien continu.",
    image: "/assets/images/propulser.jpg",
  },
];

export default function PiliersSection() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-12">
          TROIS PILIERS D’ACTION
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {piliers.map((pilier, index) => (
            <PilierCard key={index} pilier={pilier} />
          ))}
        </div>

      </div>
    </section>
  );
}