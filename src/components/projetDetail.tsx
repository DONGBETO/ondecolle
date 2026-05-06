import React from "react";

type Props = {
  title: string;
  description: React.ReactNode;
  image?: string;
};

export default function ProjetDetail({ title, description, image }: Props) {
  return (
    <div className="max-w-7xl mx-auto p-6">

      {image && (
        <img
          src={image || "/assets/images/hero_image_home.jpg"}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-2xl font-bold text-gray-800">
        {title}
      </h1>

      <p className="text-gray-600 mt-4 leading-relaxed space-y-4">
        {description}
      </p>

    </div>
  );
}