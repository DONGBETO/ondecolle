export default function ContactHero() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Titre */}
        <h1 className="
          text-xl 
          sm:text-xl 
          md:text-2xl
          lg:text-4xl 
          font-bold 
          text-blue-900 
          mb-6 sm:mb-8
        ">
          JEUNES ENTREPRENEURS : FAITES DÉCOLLER VOTRE PROJET !
        </h1>

        {/* Paragraphe 1 */}
        <p className="
          text-sm 
          sm:text-base 
          md:text-lg
          text-gray-700 
          leading-relaxed 
          mb-6
          text-justify
        ">
          Vous portez une idée innovante ? Un projet qui pourrait changer votre
          communauté ou l’Afrique ?{" "}
          <span className="font-semibold text-blue-900">
            Le Cdt Habib Aboukhedoud et son équipe
          </span>{" "}
          vous offre la piste d’envol : un accompagnement expert, des formations
          sur mesure, l’accès à un réseau puissant et des opportunités de
          financement, le tout gratuitement.
        </p>

        {/* Paragraphe 2 */}
        <p className="
          text-sm 
          sm:text-base 
          md:text-lg 
          text-gray-700 
          leading-relaxed
          text-justify
        ">
          Nous cherchons des talents, de la passion et la volonté d’agir. Ne
          laissez pas votre potentiel inexploité. C’est le moment de transformer
          votre vision en réalité.
        </p>

      </div>
    </section>
  );
}