type Props = {
  event: {
    slug: string;
    title: string;
    content: string;
    youtubeId: string;
  };
};

export default function EventDetail({ event }: Props) {
  return (
    <section className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          {event.title}
        </h1>

        <p className="text-gray-700 mb-10">
            {event.content}
        </p>

        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${event.youtubeId}`}
            title={event.title}
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}