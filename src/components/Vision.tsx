import Image from "next/image";

type Props = {
  title: string;
  paragraphs: React.ReactNode;
  buttonText?: string;
  image: string;
  title_image?: string;
};

export default function Vision({
  title="",
  paragraphs="",
  buttonText="",
  image,
  title_image="",
}: Props) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            {title}
          </h2>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            {paragraphs}
          </div>

          {buttonText && (
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              {buttonText}
            </button>
          )}
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={image}
            alt={title_image}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}