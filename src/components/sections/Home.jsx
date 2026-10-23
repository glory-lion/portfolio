import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MagneticButton } from "../MagneticButton";
import { Globe } from "../fx/Globe";
import { heroFacts, resumeUrl, roles } from "../../data";
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
                        <span className="font-mono text-xs sm:text-sm text-muted">CS @ NUS · Surabaya → Singapore</span>
                    </motion.div>

                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="show"
                        className="font-serif text-5xl md:text-7xl font-semibold text-ink tracking-tight mb-4"
                        style={{ lineHeight: 1.05 }}
                    >
                        Hi, I'm <span className="italic text-accent-ink">Glory Lion</span>.
                    </motion.h1>

                    {/* Decorative only — the paragraph below carries the same message for screen readers */}
                    <motion.p
                        custom={1.5} variants={fadeUp} initial="hidden" animate="show"
                        aria-hidden
                        className="font-mono text-base md:text-lg text-ink mb-6"
                    >
                        <span className="text-muted">~/</span>
                        <span className="text-accent-ink">{role}</span>
                        <span className="animate-blink text-accent">▍</span>
                    </motion.p>

                    <motion.p
                        custom={2} variants={fadeUp} initial="hidden" animate="show"
                        className="text-muted text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        I’m a <span className="text-ink font-medium">software engineer</span> studying Computer Science
                        at NUS, and I like turning difficult problems into software that actually works. I’ve architected a
                        recruitment platform end to end as an intern, I lead technology at GDG NUS, and I once spent a
                        hackathon teaching a model to tell AI-generated images from real ones. Mostly, I can’t leave a
                        system alone until I understand how it works.
                    </motion.p>

                    <motion.ul
                        custom={2.5} variants={fadeUp} initial="hidden" animate="show"
                        className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-lg mx-auto lg:mx-0 text-left"
                    >
                        {heroFacts.map((fact) => (
                            <li key={fact.label} className="border-l-2 border-accent pl-3">
                                <p className="text-sm font-semibold text-ink leading-tight">{fact.label}</p>
                                <p className="text-xs text-muted">{fact.detail}</p>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        custom={3} variants={fadeUp} initial="hidden" animate="show"
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
                    >
                        <MagneticButton
                            href="#projects"
                            className="bg-primary text-on-primary py-3 px-7 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow"
                        >
                            See my work
                        </MagneticButton>
                        <MagneticButton
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-ink/25 text-ink py-3 px-7 rounded-full font-medium hover:border-accent hover:text-accent-ink transition-colors"
                        >
                            Resume ↗
                        </MagneticButton>
                        <MagneticButton
                            href="#contact"
                            className="text-ink py-3 px-4 font-medium underline decoration-accent/50 underline-offset-4 hover:text-accent-ink transition-colors"
                        >
                            Say hello
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* --- Globe: Surabaya → Singapore --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[440px] lg:max-w-[560px] mx-auto"
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
