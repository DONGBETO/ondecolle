import EventCard from "./eventCard";

type Props = {
    title: string;
    paragraph: React.ReactNode;
};

export default function Event({ title, paragraph }: Props) {
    return (
       <>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center">{title}</h2>
                <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-center">
                    {paragraph}
                </div>
            </div>
        </section>
       </>
    );
}
