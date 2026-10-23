import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MagneticButton } from "../MagneticButton";
import { Globe } from "../fx/Globe";
import { roles } from "../../data";
import photo from "../../assets/profile_final.jpg";

// Types, pauses, then deletes each role in turn
const useTypewriter = (words, { typeMs = 70, deleteMs = 40, holdMs = 1600 } = {}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];

        if (!deleting && text === word) {
            const t = setTimeout(() => setDeleting(true), holdMs);
            return () => clearTimeout(t);
        }
        if (deleting && text === "") {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
            return;
        }

        const t = setTimeout(
            () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
            deleting ? deleteMs : typeMs
        );
        return () => clearTimeout(t);
    }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

    return text;
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export const Home = ({ theme }) => {
    const role = useTypewriter(roles);
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)`;

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-24 pb-16"
        >
            <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
            <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

            <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_1fr] items-center gap-6 lg:gap-4 relative z-10">
                {/* --- Text --- */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        custom={0} variants={fadeUp} initial="hidden" animate="show"
                        className="inline-flex items-center gap-3 mb-6 pl-1 pr-4 py-1 rounded-full bg-surface border border-line shadow-sm"
                    >
                        <img src={photo} alt="Glory Lion" className="w-9 h-9 rounded-full object-cover" />
                        <span className="font-mono text-sm text-accent-ink min-w-[14ch] text-left">
                            {role}<span className="animate-blink">▍</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="show"
                        className="font-serif text-5xl md:text-7xl font-semibold text-ink tracking-tight mb-6"
                        style={{ lineHeight: 1.05 }}
                    >
                        Hi, I'm <span className="italic text-accent-ink">Glory Lion</span>.
                    </motion.h1>

                    <motion.p
                        custom={2} variants={fadeUp} initial="hidden" animate="show"
                        className="text-muted text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        I’m a self-taught website designer from Surabaya, Indonesia, currently pursuing a degree in Computer
                        Science at the <span className="text-ink font-medium">National University of Singapore (NUS)</span>.
                        For me, it’s not just about writing code, it’s about creating meaningful experiences.
                    </motion.p>

                    <motion.div
                        custom={3} variants={fadeUp} initial="hidden" animate="show"
                        className="flex flex-wrap justify-center lg:justify-start gap-4"
                    >
                        <MagneticButton
                            href="#projects"
                            className="bg-primary text-on-primary py-3 px-8 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow"
                        >
                            View Projects
                        </MagneticButton>
                        <MagneticButton
                            href="#contact"
                            className="border border-ink/25 text-ink py-3 px-8 rounded-full font-medium hover:border-accent hover:text-accent-ink transition-colors"
                        >
                            Contact Me
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* --- Globe: Surabaya → Singapore --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative order-1 lg:order-2 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[560px] mx-auto"
                >
                    <div aria-hidden className="absolute inset-[12%] rounded-full bg-accent/20 blur-[80px]" />
                    <Globe theme={theme} />
                    <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted whitespace-nowrap">
                        Surabaya → Singapore · drag to spin
                    </p>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                aria-label="Scroll to About"
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-ink/30 justify-center pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
            >
                <motion.span
                    className="w-1 h-2 rounded-full bg-accent"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                />
            </motion.a>
        </section>
    );
};
