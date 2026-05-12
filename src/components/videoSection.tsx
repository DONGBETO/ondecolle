

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
  </div>
</section>
  );
}