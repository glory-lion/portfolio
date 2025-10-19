
import { RevealOnScroll } from "../RevealOnScroll";
import photo from "../../assets/photo.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#FFFDF9] px-6 md:px-20"
    >
        <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center">
            {/* --- Left: Profile Image --- */}
            <div className="md:w-1/3 flex justify-center md:justify-end mb-10 md:mb-0">
                <img
                    src={photo}
                    alt="Glory Lion"
                    className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-amber-900/50"
                />
            </div>

            {/* --- Right: Text Content --- */}
            <div className="text-center md:text-left z-10 px-4 md:w-3/4 md:pl-16">
                <h1
                className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent 
                md:whitespace-nowrap"
                style={{ lineHeight: "1.2" }}
                >
                Hi, I'm Glory Lion!
                </h1>

                <p className="text-amber-900 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                I’m a self-taught website designer based in Indonesia, currently
                pursuing a degree in Computer Science at the National University
                of Singapore (NUS). I’m always looking for ways to grow in the
                ever-evolving tech landscape. For me, it’s not just about writing
                code, it’s about creating meaningful experiences and staying
                endlessly curious.
                </p>

                {/* --- Buttons (animation kept) --- */}
                <div className="flex justify-center md:justify-start space-x-4">
                <a
                    href="#projects"
                    className="bg-amber-950 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(68,45,16,0.3)]"
                >
                    View Projects
                </a>

                <a
                    href="#contact"
                    className="border border-amber-900/50 text-amber-900 py-3 px-6 rounded font-medium transition-all
                    duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(68,45,16,0.3)] hover:bg-amber-900/10"
                >
                    Contact Me
                </a>
                </div>
            </div>
            </div>
        </RevealOnScroll>
    </section>
  );
};
