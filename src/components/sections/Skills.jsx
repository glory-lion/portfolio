import { useMemo } from "react";
import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import MagicBento from "../fx/MagicBento";
import { IconCloud } from "../fx/IconCloud";
import { skills } from "../../data";

// simpleicons.org slugs for each skill shown in the cloud
const iconSlugs = [
    "python", "openjdk", "typescript", "javascript", "go", "php", "react", "nextdotjs",
    "laravel", "fastapi", "nodedotjs", "tailwindcss", "postgresql", "supabase",
    "githubactions", "git", "github", "vercel", "firebase",
];

const Tile = ({ label, children }) => (
    <div className="flex flex-col h-full">
        <p className="font-serif italic text-base text-accent-ink mb-4">{label}</p>
        {children}
    </div>
);

const Chips = ({ items }) => (
    <div className="flex flex-wrap gap-2 mt-auto">
        {items.map((skill) => (
            <span key={skill} className="px-3.5 py-1.5 rounded-full bg-surface-2 text-ink text-sm font-medium">
                {skill}
            </span>
        ))}
    </div>
);

export const Skills = ({ theme }) => {
    const dark = theme === "dark";
    const images = useMemo(
        () => iconSlugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${dark ? "ece7d8" : "1f3b2d"}`),
        [dark]
    );
    const [languages, frameworks, tools] = skills;

    const items = [
        {
            id: "cloud",
            colSpan: 2,
            rowSpan: 2,
            content: (
                <Tile label="Tech stack · drag to spin">
                    <div className="relative flex-1 min-h-0">
                        <IconCloud images={images} />
                    </div>
                </Tile>
            ),
        },
        { id: "languages", colSpan: 2, content: <Tile label={languages.group}><Chips items={languages.items} /></Tile> },
        { id: "frameworks", colSpan: 2, content: <Tile label={frameworks.group}><Chips items={frameworks.items} /></Tile> },
        { id: "tools", colSpan: 2, content: <Tile label={tools.group}><Chips items={tools.items} /></Tile> },
        {
            id: "currently",
            colSpan: 2,
            content: (
                <Tile label="Currently">
                    <p className="font-serif text-2xl md:text-3xl text-ink leading-snug mt-auto">
                        Leading tech at <span className="italic text-accent-ink">GDG NUS</span>, building for MKP,
                        and teaching AI ethics at NUS.
                    </p>
                </Tile>
            ),
        },
    ];

    return (
        <section id="skills" className="py-24 md:py-32 px-6 bg-surface-2/50">
            <div className="max-w-6xl mx-auto">
                <SectionHeading eyebrow="02 — Skills" title="Tools of the trade" />
                <RevealOnScroll>
                    <MagicBento
                        items={items}
                        columns={4}
                        rowHeight={190}
                        gap={16}
                        radius={24}
                        theme={dark ? "dark" : "light"}
                        glowColor={dark ? "#d4b13f" : "#c9a227"}
                        spotlightRadius={320}
                        enableStars
                        particleCount={18}
                        enableTilt
                        style={{
                            "--mb-surface": "var(--surface)",
                            "--mb-edge": "var(--line)",
                            "--mb-ink": "var(--ink)",
                            "--mb-muted": "var(--muted)",
                            "--mb-line": "var(--line)",
                            "--mb-well": "var(--surface-2)",
                        }}
                    />
                </RevealOnScroll>
            </div>
        </section>
    );
};
