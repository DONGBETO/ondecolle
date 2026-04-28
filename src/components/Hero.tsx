import Image from "next/image";

type Props = {
  text: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  image: string;
};

export default function Hero({
  text="",
  title="",
  subtitle="",
  description="",
  buttonText="",
  image="",
}: Props) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      
      {/* Background image */}
      <Image
        src={image}
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        
        <p className="text-xl md:text-2xl font-bold text-white mb-4">
          {text}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-yellow-300 mb-4 text-xl">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-gray-200 mb-6">
            {description}
          </p>
        )}

        {buttonText && (
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition cursor-pointer">
            {buttonText}
          </button>
        )}

      </div>
    </section>
  );
}