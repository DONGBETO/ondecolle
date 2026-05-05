import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";


type Props = {
  title: string;
  image: string;
  duration?: string;
  href: string;
  description?: string;
};

export default function EventCard({
  title,
  image,
  duration,
  href,
  description,
}: Props) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg">

      <div className="relative w-full h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition" />

      {/* bouton play */}
      <div className="absolute top-5 left-5">
        <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition duration-300">
            <Link href={href}>
                <Play size={22} fill="white" />
            </Link>
        </div>
      </div>

      {/* contenu */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-16 group-hover:translate-y-0 transition duration-300">

        <Link href={href}>
          <h3 className="text-white text-xl font-semibold hover:underline">
            {title}
          </h3>
        </Link>

        <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition">
          {description}
        </p>

        <div className="mt-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition">
          ⏱ {duration}
        </div>
      </div>
    </div>
  );
}