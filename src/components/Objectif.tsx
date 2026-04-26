import Image from "next/image";

export default function Objectif() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/assets/images/Objectif.jpg" 
            alt="Objectif"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            NOTRE OBJECTIF
          </h2>

          <p className="text-gray-700 mb-4">
            Inspirer et faire comprendre que tout est accessible sans argent,
            mais avec volonté et accompagnement.
          </p>

          <p className="text-gray-700 mb-4">
            Trop de jeunes talentueux se découragent faute de soutien.
          </p>

          <p className="text-gray-700 mb-6">
            Nous existons pour combler ce vide : relier les jeunes qui ont des
            idées à ceux qui ont les moyens de les concrétiser. Ici, pas de
            promesses vides, pas de frais cachés — juste une communauté
            d’entraide et d’opportunités.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            EN SAVOIR PLUS
          </button>
        </div>

      </div>
    </section>
  );
}