type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "+3000",
    label: "participants à la conférence de l’UAC",
  },
  {
    value: "+20",
    label: "jeunes suivis et accompagnés après nos évènements",
  },
  {
    value: "+10",
    label: "projets déjà en cours de réalisation, transformant des rêves en entreprises",
  },
  {
    value: "0 frais",
    label: "l'accès à nos programmes est entièrement gratuit",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Notre impact en chiffres
        </h2>

        <p className="text-blue-800 mb-2">
          De l'idée à l'action !
        </p>

        <p className="text-gray-600 mb-12">
          Nous ne faisons pas rêver. Nous faisons agir. Et chaque chiffre en témoigne.
        </p>

        {/* Blue Container */}
        <div className="bg-blue-900 rounded-2xl p-6 md:p-10">
          
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-gray-100 
                  rounded-lg 
                  p-6 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  text-center
                  min-h-[160px]
                "
              >
                {/* Value */}
                <h3 className="text-yellow-500 text-2xl md:text-3xl font-bold mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-blue-900 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}