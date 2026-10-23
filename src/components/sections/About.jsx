import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";
import { certifications, education, experienceGroups, otherInvolvement } from "../../data";

const ease = [0.22, 1, 0.36, 1];

const Dot = () => (
    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all" />
);

const Points = ({ points }) => (
    <ul className="mt-3 space-y-1.5 text-muted text-sm leading-relaxed">
        {points.map((point) => (
            <li key={point} className="flex gap-2">
                <span className="text-accent mt-0.5">▸</span>
                <span>{point}</span>
            </li>
        ))}
    </ul>
);

const GroupLabel = ({ children }) => (
    <h3 className="font-serif italic text-lg text-accent-ink mb-6">{children}</h3>
);

const Timeline = ({ items }) => (
    <ol className="relative border-l-2 border-line ml-3 space-y-10">
        {items.map((item, i) => (
            <motion.li
                key={`${item.title}-${item.subtitle}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.45, ease }}
                className="relative pl-8 group"
            >
                <Dot />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-serif text-xl font-semibold text-ink group-hover:text-accent-ink transition-colors">
                        {item.title}
                    </h4>
                    {item.period && <span className="font-mono text-xs text-muted">{item.period}</span>}
                </div>
                {item.subtitle && <p className="text-sm font-medium text-accent-ink mt-1">{item.subtitle}</p>}
                {item.points.length > 0 && <Points points={item.points} />}
            </motion.li>
        ))}
    </ol>
);

const Tags = ({ items, className = "" }) => (
    <div className={`flex flex-wrap gap-2 ${className}`}>
        {items.map((t) => (
            <span key={t} className="font-mono text-xs bg-surface-2 text-ink py-1 px-3 rounded-full">
                {t}
            </span>
        ))}
    </div>
);

// Role leads, organisation second — what was done matters more than where.
// Featured roles sit in a tinted card so the strongest experience reads first.
const RoleTimeline = ({ items, offset = 0 }) => (
    <ol className="relative border-l-2 border-line ml-3 space-y-10">
        {items.map((item, i) => (
            <motion.li
                key={`${item.org}-${item.role}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * (offset + i), duration: 0.45, ease }}
                className="relative pl-8 group"
            >
                <Dot />
                <div
                    className={
                        item.featured
                            ? "-mt-3 rounded-2xl border border-accent/40 bg-accent/[0.06] p-5 md:p-6"
                            : ""
                    }
                >
                    {item.featured && (
                        <p className="font-serif italic text-sm text-accent-ink mb-1">★ Highlight</p>
                    )}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4
                            className={`font-serif font-semibold text-ink group-hover:text-accent-ink transition-colors ${
                                item.featured ? "text-2xl" : "text-xl"
                            }`}
                        >
                            {item.role}
                        </h4>
                        {item.period && <span className="font-mono text-xs text-muted">{item.period}</span>}
                    </div>
                    <p className="text-sm font-medium text-accent-ink mt-1">
                        {item.href ? (
                            <a href={item.href} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
                                {item.org} ↗
                            </a>
                        ) : (
                            item.org
                        )}
                    </p>
                    {item.summary && <p className="text-ink mt-3 leading-relaxed">{item.summary}</p>}
                    {item.highlights && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {item.highlights.map((h) => (
                                <span key={h} className="font-mono text-xs bg-accent/15 text-accent-ink py-1 px-3 rounded-full">
                                    {h}
                                </span>
                            ))}
                        </div>
                    )}
                    <Points points={item.points} />
                    {item.tech && <Tags items={item.tech} className="mt-4" />}
                </div>
            </motion.li>
        ))}
    </ol>
);

const Certifications = () => (
    <div className="mt-14">
        <GroupLabel>Certifications</GroupLabel>
        <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
                <a
                    key={cert.title}
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border border-line bg-surface-2/50 p-5 hover:border-accent transition-colors"
                >
                    <p className="font-serif text-lg font-semibold text-ink group-hover:text-accent-ink transition-colors">
                        {cert.title} <span className="text-accent">↗</span>
                    </p>
                    <p className="text-sm text-muted mt-1">
                        {cert.issuer}
                        {cert.period && <span className="font-mono text-xs"> · {cert.period}</span>}
                    </p>
                </a>
            ))}
        </div>
    </div>
);

const EducationPanel = () => (
    <>
        <Timeline items={education} />
        <Certifications />
    </>
);

const ExperiencePanel = () => {
    let offset = 0;
    return (
        <div className="space-y-14">
            {experienceGroups.map((group) => {
                const start = offset;
                offset += group.items.length;
                return (
                    <section key={group.id}>
                        <GroupLabel>{group.label}</GroupLabel>
                        <RoleTimeline items={group.items} offset={start} />
                    </section>
                );
            })}

            <section>
                <GroupLabel>Other Leadership & Involvement</GroupLabel>
                <ul className="divide-y divide-line border-y border-line">
                    {otherInvolvement.map((item) => (
                        <li key={`${item.org}-${item.role}`} className="py-3 grid md:grid-cols-[minmax(0,16rem)_1fr] gap-x-6 gap-y-0.5">
                            <p className="text-sm">
                                <span className="font-semibold text-ink">{item.role}</span>
                                <span className="text-muted"> · {item.org}</span>
                                {item.period && <span className="block font-mono text-xs text-muted mt-0.5">{item.period}</span>}
                            </p>
                            <p className="text-sm text-muted">{item.note}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

const tabs = [
    { id: "experience", label: "Experience & Leadership", Panel: ExperiencePanel },
    { id: "education", label: "Education", Panel: EducationPanel },
];

export const About = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const { Panel } = tabs.find((t) => t.id === activeTab);

    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionHeading eyebrow="01 — About" title="A bit about me" />

                <RevealOnScroll>
                    <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-14 text-center">
                        I grew up in Surabaya and came to Singapore to study Computer Science at NUS, with a minor in
                        Quantitative Finance. What keeps me going is figuring out how a system works, then building something
                        useful with it. These days that means shipping production code, leading the developers around me,
                        and teaching AI ethics, where explaining an idea clearly matters as much as getting it right.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                    <div className="bg-surface rounded-3xl border border-line shadow-sm p-6 md:p-10">
                        <div role="tablist" className="inline-flex p-1 rounded-full bg-surface-2 mb-10 max-w-full">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={activeTab === tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative isolate px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                                        activeTab === tab.id ? "text-on-primary" : "text-muted hover:text-ink"
                                    }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.span
                                            layoutId="about-tab"
                                            className="absolute inset-0 rounded-full bg-primary -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                        />
                                    )}
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                role="tabpanel"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Panel />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
