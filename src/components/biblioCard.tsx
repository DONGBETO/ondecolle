import Image from "next/image";

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  file: string;
  lang: "fr" | "en";
};

export default function BiblioCard({
  title,
  description,
  image,
  file,
  lang
}: Props) {
  return (
    <div
      className="
        bg-white 
        rounded-xl 
        overflow-hidden 
        shadow-md 
        hover:shadow-xl 
        transition 
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-150">
          <Image
            src={image}
            alt={title || "image bibliotheque"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-5">
        {title && (
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        <a
          href={file}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-yellow-400 
            text-black 
            px-4 py-2 
            rounded-full 
            text-sm 
            font-semibold 
            hover:bg-yellow-300 
            transition
          "
        >
          {lang === "fr" ? "Télécharger gratuitement" : "Download for free"}
        </a>
      </div>
    </div>
  );
}