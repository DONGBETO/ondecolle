import Link from "next/link";
import { MoveRight } from 'lucide-react';


type Props = {
  slug: string;
  image: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
};

export default function BlogCard({
  slug,
  image,
  title,
  description,
  category,
  date,
}: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">

      {/* IMAGE ZOOM */}
      <div className="overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        {category && (
          <span className="text-xs font-semibold text-blue-600 uppercase">
            {category}
          </span>
        )}
        <Link href={`/actualites/blog/${slug}`}>
          <h3 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2 hover:underline hover:cursor-pointer">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mt-2 flex-1 line-clamp-3">
          {description}
        </p>

        {/* <p className="text-xs text-gray-400 mt-4">{date}</p> */}

        {/* FOOTER */}
        <div className="mt-4 flex items-center justify-start space-x-2">

          <Link
            href={`/actualites/blog/${slug}`}
            className="text-sm font-semibold text-yellow-300 py-2 transition cursor-pointer"
          >
            Lire plus
          </Link>
            <MoveRight className="text-yellow-300 w-4 mt-0.5 transition cursor-pointer"/>
        </div>

      </div>
    </div>
  );
}