import Image from "next/image";
import { BtnCard } from "./btnCard";

type Testimonial = {
  text: string;
  name: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Mon application a été financée par un investisseur via le mouvement citoyen 'Ensemble, on décolle'",
    name: "Ron Burnwood",
    image: "/assets/images/team-james.jpg",
  },
  {
    text: "J’ai trouvé un mentor et j’ai lancé mon salon de couture.",
    name: "Lily Granger",
    image: "/assets/images/lily.jpg",
  },
  {
    text: "Je croyais que tout était perdu, jusqu’à ce que je découvre le Commandant Habib Aboukhedoud et son équipe.",
    name: "Jeson Foxx",
    image: "/assets/images/team-mark.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12">
          Ils ont décollé avec nous
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-blue-900 
                text-white 
                rounded-xl 
                p-4
                flex 
                flex-col 
                items-center 
                justify-between
                min-h-[260px]
              "
            >
              {/* Quote */}
              <div className="text-yellow-400 text-5xl mb-2">“</div>

              {/* Text */}
              <p className="text-md mb-6 leading-relaxed">
                {item.text}
              </p>

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 mb-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <span className="text-yellow-400 font-semibold text-sm">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-12 justify-center">       
            <BtnCard text="SOUMETTRE MON PROJET"/>
            <BtnCard text="DEVENIR INVESTISSEUR PARTENAIRE"/>
            <BtnCard text="REJOINDRE LA COMMUNAUTE"/>
        </div>

      </div>
    </section>
  );
}