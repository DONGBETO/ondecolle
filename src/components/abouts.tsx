import Image from "next/image";
import {BtnCard} from "./btnCard";

type Props = {
  title: string;
  paragraphs: React.ReactNode;
  buttonText?: string;
  image: string;
  title_image?: string;
};

export default function About({
  title = "",
  paragraphs,
  buttonText,
  image,
  title_image = "",
}: Props) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="relative w-full md:w-[30%] h-[300px] md:h-[500px]">
          <Image
            src={image}
            alt={title_image || title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        
        {/* Texte */}
        <div className="w-full md:w-[70%]">
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
      </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-12 justify-center">       
            <BtnCard text="SOUMETTRE MON PROJET"/>
            <BtnCard text="DEVENIR INVESTISSEUR PARTENAIRE"/>
            <BtnCard text="REJOINDRE LA COMMUNAUTE"/>
        </div>
        
    </section>
  );
}