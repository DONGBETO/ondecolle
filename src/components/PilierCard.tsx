import Image from "next/image";

export type Pilier = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  pilier: Pilier;
};

export default function PilierCard({ pilier }: Props) {
  return (
    <div
      className="
        bg-yellow-500 
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        border-4 border-yellow-400
        transition-transform duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56">
        <Image
          src={pilier.image}
          alt={pilier.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3
          className="
            text-blue-900 
            font-bold 
            text-base sm:text-lg 
            mb-2 sm:mb-3
          "
        >
          {pilier.title}
        </h3>

        <p
          className="
            text-gray-800 
            text-sm sm:text-[15px] 
            leading-relaxed
          "
        >
          {pilier.description}
        </p>
      </div>
    </div>
  );
}