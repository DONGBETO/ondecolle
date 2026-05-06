import BiblioCard from "./biblioCard";
import { biblioTextData } from "../data/biblio";

type Props = {
    title: string;
    paragraph: React.ReactNode;
};

export default function BiblioText({ title, paragraph }: Props) {
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
        <section className="bg-gray-100 py-16 sm:py-20">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
                {/* Grid */}
                <div className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  gap-10
                ">
                  {biblioTextData.map((bibliotext, index) => (
                    <BiblioCard key={bibliotext.title} 
                    image={bibliotext.image}
                    title={bibliotext.title}
                    description={bibliotext.description}
                    file={bibliotext.file}
                    lang={bibliotext.lang}
                    />
                  ))}
                </div>
              </div>
            </section>
       </>
    );
}
