

export default function videoSection(){

return (

<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
      Découvrez une de nos réalisations en vidéo
    </h2>

    <div className="relative w-full h-[250px] md:h-[500px]">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/U_Fz2cmtqLQ?si=cJaCfRLfU6EZtt6B"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <a
      href="https://www.youtube.com/watch?v=U_Fz2cmtqLQ&si=cJaCfRLfU6EZtt6B"
      target="_blank"
      className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
    >
      Voir sur YouTube
    </a>

  </div>
</section>
  );
}