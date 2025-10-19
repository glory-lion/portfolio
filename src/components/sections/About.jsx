import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return <section id="about" className="py-20 bg-#fffef9">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent inline-block">
                About Me
                </h2>


                <p className="text-amber-900 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                Beyond striving for academic excellence, I actively participate in various activities to strengthen my leadership and 
                communication skills. I believe that true success comes from balancing both technical expertise and soft skills, as they are equally 
                essential for personal and professional growth.
                </p>

                
                <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 text-left border border-amber-100">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🎓</span>
                    <h3 className="text-2xl font-bold text-amber-800">Education</h3>
                    </div>

                    <div className="space-y-6 text-gray-700">
                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        National University of Singapore (2025-2029)
                        </h4>
                        <p className="text-sm">A freshman majoring in Computer Science</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        St. Louis 1 Senior High School, Surabaya (2022-2025)
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>22/23 and 24/25 Valedictorian</li>    
                        <li>Top-10 ranking student every semester</li>
                        <li>Vice President of Sports and Health Department 22/23</li>
                        <li>Head of IT Fest 24' Committee</li>
                        <li>Coordinator of Prom Night 25' Monetary Affairs</li>
                        <li>Head of Physics Team for Study Excursion 24'</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        Petra 1 Junior High School, Surabaya (2019-2022)
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Graduated in top 5 students overall</li>
                        <li>President of Student Council 21/22</li>
                        <li>Treasurer of English Club 21/22</li>
                        <li>Treasurer of Music Club 21/22</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 text-left border border-amber-100">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">💻</span>
                    <h3 className="text-2xl font-bold text-amber-800">
                        Current Activity
                    </h3>
                    </div>

                    <div className="space-y-6 text-gray-700">
                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        Google Developer Group - Technology Associate
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                            <li>Responsible for developing and maintaining Developer Group’s websites and event platforms</li> 
                            <li>Plan and deliver technical workshops</li> 
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        PINUS Technology Associate
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Responsible for developing technical projects under the PINUS organization</li>    
                        <li>Build and maintain digital solutions for the Indonesian student community at NUS</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        Raffles Hall - Tech Crew
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Assisted in managing technical equipment and providing Audio Visual support for hall events</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        Raffles Hall - Block 3 Committee
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Organized social events to strengthen community bonding among residents</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                        Raffles Hall - Sports Management Committee
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1 space-y-1">
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