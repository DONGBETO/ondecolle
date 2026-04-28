type Props = {
  title: string;
  description: string;
  highlight?: string;
};

export default function EngagementSection({
  title,
  description,
  highlight,
}: Props) {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Titre */}
        <h2 className="
          text-xl 
          sm:text-2xl 
          md:text-3xl 
          lg:text-4xl 
          font-bold 
          text-blue-900 
          mb-6 sm:mb-8
        ">
          {title}
        </h2>

        {/* Texte */}
        <p className="
          mx-auto 
          text-sm 
          sm:text-base 
          md:text-lg 
          text-gray-700 
          leading-relaxed
        ">
          {highlight && (
            <span className="font-semibold text-blue-900">
              « {highlight} »{" "}
            </span>
          )}
          {description}
        </p>

      </div>
    </section>
  );
}