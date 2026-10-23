import { useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { IconCloud } from "../fx/IconCloud";
import { otherLanguages, skills } from "../../data";

// simpleicons.org slugs for each skill shown in the cloud
const iconSlugs = [
    "python", "openjdk", "typescript", "javascript", "go", "php", "react", "nextdotjs",
    "laravel", "fastapi", "nodedotjs", "tailwindcss", "postgresql", "supabase",
    "githubactions", "git", "github", "vercel", "firebase",
];

const SkillRow = ({ skill, index }) => (
    <motion.li
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 py-7 border-t border-line first:border-t-0"
    >
        <span className="font-serif italic text-2xl text-accent-ink/60 group-hover:text-accent-ink transition-colors leading-none pt-1">
            {String(index + 1).padStart(2, "0")}
        </span>
        <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink tracking-tight">{skill.area}</h3>
            <p className="mt-2 flex flex-wrap gap-y-1 text-ink/80 leading-relaxed">
                {skill.tools.map((tool, i) => (
                    <span key={tool} className="whitespace-nowrap">
                        {tool}
                        {i < skill.tools.length - 1 && <span className="text-accent mx-2">/</span>}
                    </span>
                ))}
            </p>
            <p className="mt-3 flex flex-wrap items-baseline gap-y-1 text-sm text-muted">
                <span className="font-serif italic text-accent-ink mr-2">used in</span>
                {skill.usedIn.map((use, i) => (
                    <span key={use.label} className="whitespace-nowrap">
                        <a href={use.href} className="text-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent hover:text-accent-ink transition-colors">
                            {use.label}
                        </a>
                        {i < skill.usedIn.length - 1 && <span className="mx-1.5">·</span>}
                    </span>
                ))}
            </p>
        </div>
    </motion.li>
);

export const Skills = ({ theme }) => {
    const dark = theme === "dark";
    const images = useMemo(
        () => iconSlugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${dark ? "ece7d8" : "1f3b2d"}`),
        [dark]
    );

    return (
        <section id="skills" className="py-24 md:py-32 px-6 bg-surface-2/50">
            <div className="max-w-6xl mx-auto">
                <SectionHeading eyebrow="02 — Skills" title="What I build with" />

                <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
                    <RevealOnScroll className="lg:sticky lg:top-28">
                        <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[420px] mx-auto">
                            <div aria-hidden className="absolute inset-[18%] rounded-full bg-accent/15 blur-[60px]" />
                            <IconCloud images={images} />
                        </div>
                        <p className="text-center font-mono text-[11px] text-muted mt-2">drag to spin</p>
                    </RevealOnScroll>

                    <div>
                        <ol>
                            {skills.map((skill, i) => (
                                <SkillRow key={skill.area} skill={skill} index={i} />
                            ))}
                        </ol>
                        <RevealOnScroll>
                            <p className="mt-2 pt-6 border-t border-line text-sm text-muted">
                                <span className="font-serif italic text-accent-ink mr-2">also comfortable in</span>
                                {otherLanguages.join(", ")}
                            </p>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};
