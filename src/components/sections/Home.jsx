
import { RevealOnScroll } from "../RevealOnScroll";
import photo from "../../assets/profile_final.jpg";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-[#FFFDF9] px-6 md:px-20"
        >
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center relative z-10">
                    {/* --- Left: Profile Image --- */}
                    <div className="md:w-1/3 flex justify-center md:justify-end mb-10 md:mb-0 relative">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[90px] rounded-full -z-10"></div>

                        <img
                            src={photo}
                            alt="Glory Lion"
                            className="w-52 h-52 md:w-64 md:h-64 object-cover object-center rounded-full shadow-2xl border-4 border-amber-900/10 relative z-10"
                        />
                    </div>

                    {/* --- Right: Text Content --- */}
                    <div className="text-center md:text-left z-10 px-4 md:w-3/4 md:pl-16">
                        <h1
                            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-800 bg-clip-text text-transparent 
                        md:whitespace-nowrap tracking-tight"
                            style={{ lineHeight: "1.1" }}
                        >
                            Hi, I'm Glory Lion!
                        </h1>

                        <p className="text-stone-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            I’m a self-taught website designer based in Indonesia, currently
                            pursuing a degree in Computer Science at the <span className="text-amber-700 font-medium">National University of Singapore (NUS)</span>.
                            For me, it’s not just about writing code, it’s about creating meaningful experiences.
                        </p>

                        {/* --- Buttons --- */}
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="#projects"
                                className="bg-amber-900 text-amber-50 py-3 px-8 rounded-full font-medium transition-all duration-300 
                            hover:bg-amber-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/20"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="border border-amber-900/30 text-amber-900 py-3 px-8 rounded-full font-medium transition-all
                            duration-300 hover:bg-amber-50 hover:-translate-y-1 hover:border-amber-900/60"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <span className="text-amber-900 text-2xl">↓</span>
            </div>
        </section >
    );
};
