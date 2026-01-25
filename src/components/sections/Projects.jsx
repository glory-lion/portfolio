import { RevealOnScroll } from "../RevealOnScroll";

import universeImg from "../../assets/universe_project.png";
import topicNestImg from "../../assets/topicnest_project.png";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-800 bg-clip-text text-transparent mb-12 text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* TopicNest */}
                        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-amber-900/10 hover:-translate-y-2 hover:shadow-2xl transition-all shadow-lg flex flex-col h-full">
                            <img src={topicNestImg} alt="TopicNest" className="w-full h-64 object-cover object-top rounded-2xl mb-6 shadow-sm" />
                            <h3 className="text-2xl font-bold mb-3 text-amber-900">TopicNest</h3>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                TopicNest is a modern, high performance community forum which features a sleek, responsive interface for real time discussions, user profiles, and category based post management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {["TypeScript", "Go", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#F3E8E2] text-[#4A3B32] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#E5D5C6] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/glory-lion/topicnest.git" className="text-amber-700 hover:text-amber-600 font-bold transition-colors"> Repository → </a>
                                <a href="https://topicnest-self.vercel.app/forum" className="text-amber-700 hover:text-amber-600 font-bold transition-colors"> Website → </a>
                            </div>
                        </div>

                        {/* UniVerse */}
                        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-amber-900/10 hover:-translate-y-2 hover:shadow-2xl transition-all shadow-lg flex flex-col h-full">
                            <img src={universeImg} alt="Universe Project" className="w-full h-64 object-cover object-top rounded-2xl mb-6 shadow-sm" />
                            <h3 className="text-2xl font-bold mb-3 text-amber-900">UniVerse</h3>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                Choosing a university shouldn’t feel like solving a puzzle with missing pieces. UniVerse makes discovering universities clear, personalized, and enjoyable.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {["TypeScript", "JavaScript", "CSS", "HTML"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#F3E8E2] text-[#4A3B32] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#E5D5C6] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/JovianSanjaya/hacknroll2026.git" className="text-amber-700 hover:text-amber-600 font-bold transition-colors"> Repository → </a>
                                <a href="https://hacknroll2026-ochre.vercel.app/" className="text-amber-700 hover:text-amber-600 font-bold transition-colors"> Website → </a>
                            </div>
                        </div>

                        {/* Coordinator Project */}
                        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-amber-900/10 hover:-translate-y-2 hover:shadow-2xl transition-all shadow-lg flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-3 text-amber-900">Coordinator of Tech Division - High School ICT Final Exam</h3>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                Designed and coordinated a website to display students’ projects and assignments for the High School Final Exam,
                                improving accessibility and organization for both students and teachers.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#F3E8E2] text-[#4A3B32] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#E5D5C6] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
