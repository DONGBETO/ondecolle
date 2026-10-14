import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image?: string;
};

export default function ProjetDetail({ title, description, image }: Props) {
  return (
    <div className="max-w-7xl mx-auto p-6">

      {image && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
        {description.trim()}
      </p>

    </div>
  );
}