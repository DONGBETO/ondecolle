import ProjectCard from "./ProjetCard";
import { projects } from "../data/project";


export default function ProjectsSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-12">
          NOS PROJETS
        </h2>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        ">
          {projects.map((project, index) => (
            <ProjectCard key={index} image={project.image} title={project.title} description={project.description} id={project.id}/>
          ))}
        </div>

      </div>
    </section>
  );
}