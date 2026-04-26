import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#123A5D] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
            ENSEMBLE, ON DÉCOLLE !
          </h1>

          <p className="text-yellow-300 mb-4">
            Dans la discipline, la rigueur, la détermination et la foi.
          </p>

          <p className="mb-6 text-gray-200">
            Parce que chaque rêve mérite une piste d’envol, nous aidons
            gratuitement les jeunes à transformer leurs idées en projets
            concrets, durables et financés.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            DEVENIR PARTENAIRE
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/hero.jpg" // mets ton image ici
            alt="Hero"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}