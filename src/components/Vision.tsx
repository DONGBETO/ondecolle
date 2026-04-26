import Image from "next/image";

export default function Vision() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            NOTRE VISION
          </h2>

          <p className="text-gray-700 mb-4">
            Nous croyons qu’un jeune encadré, formé et soutenu peut devenir une
            source de croissance, d’emploi et d’inspiration pour son pays.
          </p>

          <p className="text-gray-700 mb-6">
            Notre mission : détecter, accompagner et propulser la jeunesse
            africaine vers le succès.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            EN SAVOIR PLUS
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/assets/images/photo-densemble-vision.jpg" 
            alt="Vision"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}