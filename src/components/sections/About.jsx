import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return <section id="about" className="py-20 bg-#fffef9">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-800 bg-clip-text text-transparent inline-block">
                    About Me
                </h2>

                <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                    Beyond striving for academic excellence, I actively participate in various activities to strengthen my leadership and
                    communication skills. I believe that true success comes from balancing both technical expertise and soft skills, as they are equally
                    essential for personal and professional growth.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <div className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 text-left border border-amber-900/10 hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl p-3 bg-amber-50 rounded-2xl">🎓</span>
                            <h3 className="text-2xl font-bold text-amber-900">Education</h3>
                        </div>

                        <div className="space-y-8 text-stone-600">
                            <div className="relative pl-2 border-l-4 border-amber-200">
                                <h4 className="font-bold text-lg text-stone-800">
                                    National University of Singapore (2025-2029)
                                </h4>
                                <p className="text-sm font-medium text-amber-700 mb-2">A freshman majoring in Computer Science</p>
                            </div>

                            <div className="relative pl-2 border-l-4 border-amber-200">
                                <h4 className="font-bold text-lg text-stone-800">
                                    St. Louis 1 Senior High School, Surabaya (2022-2025)
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-3 space-y-2 marker:text-amber-600">
                                    <li>22/23 and 24/25 Valedictorian</li>
                                    <li>Top-10 ranking student every semester</li>
                                    <li>Vice President of Sports and Health Department 22/23</li>
                                    <li>Head of IT Fest 24' Committee</li>
                                    <li>Coordinator of Prom Night 25' Monetary Affairs</li>
                                    <li>Head of Physics Team for Study Excursion 24'</li>
                                </ul>
                            </div>

                            <div className="relative pl-2 border-l-4 border-amber-200">
                                <h4 className="font-bold text-lg text-stone-800">
                                    Petra 1 Junior High School, Surabaya (2019-2022)
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-3 space-y-2 marker:text-amber-600">
                                    <li>Graduated in top 5 students overall</li>
                                    <li>President of Student Council 21/22</li>
                                    <li>Treasurer of English Club 21/22</li>
                                    <li>Treasurer of Music Club 21/22</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Current Activity Card */}
                    <div className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 text-left border border-amber-900/10 hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl p-3 bg-amber-50 rounded-2xl">💻</span>
                            <h3 className="text-2xl font-bold text-amber-900">
                                Current Activity
                            </h3>
                        </div>

                        <div className="space-y-8 text-stone-600">
                            <div className="group">
                                <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                                    Google Developer Group - Technology Associate
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-2 marker:text-amber-600">
                                    <li>Responsible for developing and maintaining Developer Group’s websites and event platforms</li>
                                    <li>Plan and deliver technical workshops</li>
                                </ul>
                            </div>

                            <div className="group">
                                <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                                    PINUS Technology Associate
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-2 marker:text-amber-600">
                                    <li>Responsible for developing technical projects under the PINUS organization</li>
                                    <li>Build and maintain digital solutions for the Indonesian student community at NUS</li>
                                </ul>
                            </div>

                            <div className="group">
                                <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                                    Perhimpunan Pelajar Indonesia di Singapura (PPIS) - Tech Subcommittee
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-2 marker:text-amber-600">
                                    <li>Responsible for developing and maintaining the organization’s websites and event platforms</li>
                                </ul>
                            </div>

                            <div className="group">
                                <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                                    Raffles Hall - Tech Crew
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-2 marker:text-amber-600">
                                    <li>Assisted in managing technical equipment and providing Audio Visual support for hall events</li>
                                </ul>
                            </div>

                            <div className="group">
                                <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                                    Raffles Hall - Sports Management Committee
                                </h4>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-2 marker:text-amber-600">
                                    <li>Served as team manager for the Road Relay team, supporting athletes throughout trainings to ensure strong team performance and spirit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>

};