import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { ContainerScroll } from "../fx/ContainerScroll";
import { projects } from "../../data";

const TechTags = ({ tech }) => (
    <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
            <span key={t} className="font-mono text-xs bg-surface-2 text-ink py-1 px-3 rounded-full">
                {t}
            </span>
        ))}
    </div>
);

const ProjectLinks = ({ project }) => (
    <div className="flex gap-3">
        {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-ink/20 text-sm font-semibold text-ink hover:border-accent hover:text-accent-ink transition-colors">
                Repository ↗
            </a>
        )}
        {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:shadow-lg transition-shadow">
                Live site ↗
            </a>
        )}
    </div>
);

const ShowcaseHeader = ({ project, index, total }) => (
    <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
            <p className="font-mono text-xs text-accent-ink mb-3">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                {project.badge && <span className="ml-3 px-2.5 py-0.5 rounded-full bg-accent/15">{project.badge}</span>}
            </p>
            <h3 className="font-serif text-4xl md:text-6xl font-semibold text-ink tracking-tight mb-4">{project.title}</h3>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5">{project.description}</p>
            {project.points && (
                <ul className="text-muted text-sm space-y-1.5 max-w-2xl mb-5">
                    {project.points.map((point) => (
                        <li key={point} className="flex gap-2">
                            <span className="text-accent">▸</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
            <TechTags tech={project.tech} />
        </div>
        <ProjectLinks project={project} />
    </div>
);

export const Projects = () => {
    const showcased = projects.filter((p) => p.image);
    const others = projects.filter((p) => !p.image);

    return (
        <section id="projects" className="py-24 md:py-32 px-6 overflow-x-clip">
            <div className="max-w-6xl mx-auto">
                <SectionHeading eyebrow="03 · Work" title="Featured projects" />

                {showcased.map((project, i) => (
                    <ContainerScroll key={project.id} header={<ShowcaseHeader project={project} index={i} total={showcased.length} />}>
                        <motion.img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover object-top"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.6 }}
                            draggable={false}
                        />
                    </ContainerScroll>
                ))}

                <RevealOnScroll className="max-w-5xl mx-auto mt-24">
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent-ink mb-6 text-center">
                        More engineering work
                    </h3>
                </RevealOnScroll>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                    {others.map((project, i) => (
                        <RevealOnScroll key={project.id} delay={0.05 * i} className={i === 0 ? "md:col-span-2" : ""}>
                            <div className="relative h-full overflow-hidden rounded-3xl bg-primary text-on-primary p-8 md:p-10 flex flex-col">
                                <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
                                <span aria-hidden className="absolute -right-6 -bottom-10 font-serif italic text-[10rem] leading-none text-accent/20 select-none">
                                    &lt;/&gt;
                                </span>
                                <div className="relative flex flex-col flex-1">
                                    {project.role && <p className="font-mono text-xs text-accent mb-3">{project.role}</p>}
                                    <h3 className="font-serif text-3xl font-semibold mb-4">{project.title}</h3>
                                    <p className="opacity-80 leading-relaxed mb-6 max-w-2xl">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="font-mono text-xs border border-current/25 py-1 px-3 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {(project.repo || project.live) && (
                                        <div className="flex gap-4 mt-6 text-sm font-semibold">
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    Repository ↗
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    Live site ↗
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};
