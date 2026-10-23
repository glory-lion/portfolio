import { RevealOnScroll } from "./RevealOnScroll";

export const SectionHeading = ({ eyebrow, title }) => (
    <RevealOnScroll className="mb-12 md:mb-16 text-center">
        <p className="font-serif italic text-lg text-accent-ink mb-2">{eyebrow}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink tracking-tight">{title}</h2>
        <div className="mx-auto mt-5 h-px w-16 bg-accent" />
    </RevealOnScroll>
);
