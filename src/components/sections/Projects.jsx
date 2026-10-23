import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
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
                {project.liveLabel ?? "Live site"} ↗
            </a>
        )}
    </div>
);

// CI/CD flow drawn as connected stages, so the delivery work reads at a glance
const Pipeline = ({ steps, targets }) => (
    <div className="mb-5 max-w-2xl">
        <ol className="flex flex-col sm:flex-row items-start sm:items-center font-mono text-xs">
            {steps.map((step, i) => (
                <li key={step} className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-accent/50 bg-accent/10 text-accent-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {step}
                    </span>
                    {/* vertical connector when stacked on phones, horizontal once the stages fit in one row */}
                    {i < steps.length - 1 && <span aria-hidden className="w-px h-3 ml-4 sm:w-5 sm:h-px sm:mx-1 bg-accent/60" />}
                </li>
            ))}
        </ol>
        {targets && <p className="font-mono text-xs text-muted mt-2">GitHub Actions · runs for {targets}</p>}
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
            {project.pipeline && <Pipeline steps={project.pipeline} targets={project.pipelineTargets} />}
            <TechTags tech={project.tech} />
        </div>
        <ProjectLinks project={project} />
    </div>
);

export const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 px-6 overflow-x-clip">
            <div className="max-w-6xl mx-auto">
                <SectionHeading eyebrow="03 — Work" title="Featured projects" />

                {projects.map((project, i) => (
                    <ContainerScroll key={project.id} header={<ShowcaseHeader project={project} index={i} total={projects.length} />}>
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

            </div>
        </section>
    );
};
