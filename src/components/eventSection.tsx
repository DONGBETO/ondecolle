import { events } from "../data/event";
import EventCard from "./eventCard";


export default function EventsSection() {
  return (
        <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          NOS ÉVÉNEMENTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.slug}
              title={event.title}
              image={event.image}
              duration={event.duration}
              description={event.description}
              href={`/actualites/evenements/${event.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}