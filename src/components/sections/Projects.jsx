import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent mb-8">
                Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                    <div className="p-6 rounded-xl border border-amber-900/10 hover:-translate-y-1 hover:border-amber-900/30 hover:shadow-[0_0_15px_rgba(68,45,16,0.3)] transition-all">
                        <h3 className="text-amber-900 font-semibold mb-2">Coordinator of Tech Division - High School ICT Final Exam</h3>
                        <p className="text-amber-800 mb-4">
                        Designed and coordinated a website to display students’ projects and assignments for the High School Final Exam,
                         improving accessibility and organization for both students and teachers.
                        </p>

                        <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-amber-900/10 text-amber-900 py-1 px-3 rounded-full text-sm hover:bg-amber-800/20 hover:shadow-[0_0_15px_rgba(68,45,16,0.3)] transition"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>

                        {/* <div className="flex justify-between items-center">
                            <a href="#" className="text-amber-700 hover: text-amber-800 transition-colors my-4"> View Project → </a>
                        </div> */}

                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
  );
};
