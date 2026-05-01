import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string[];
  image: string;
  id?: string;
  createdAt?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  id,
  createdAt,
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
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title || "image projet"}
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
          <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-4">
            {description}
          </p>
        )}

        {createdAt && (
          <p className="text-xs text-gray-400 mb-2">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        )}

        {id && (
          <Link href={`/projets/${id}`}>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition cursor-pointer">
              Voir le projet
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}