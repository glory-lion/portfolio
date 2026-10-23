import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Adapted from Aceternity UI's Container Scroll Animation: the screen starts
// steeply tilted back and flattens into view as it scrolls to the centre.
export const ContainerScroll = ({ id, header, children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

    const rotateX = useTransform(scrollYProgress, [0, 1], [38, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
    const headerY = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
    const glow = useTransform(scrollYProgress, [0.5, 1], [0, 0.5]);

    return (
        <div ref={ref} id={id} className="relative py-10 md:py-16 scroll-mt-16" style={{ perspective: "1200px" }}>
            <motion.div style={{ y: headerY, opacity: headerOpacity }} className="max-w-5xl mx-auto mb-10">
                {header}
            </motion.div>

            <motion.div
                style={{ rotateX, scale, transformOrigin: "50% 0%" }}
                className="relative max-w-5xl mx-auto rounded-[28px] border-4 border-[#2a3f33] bg-[#16241c] p-2 md:p-4 shadow-[0_9px_20px_#0000004a,0_37px_37px_#00000042,0_84px_50px_#00000026]"
            >
                <motion.div
                    aria-hidden
                    style={{ opacity: glow }}
                    className="absolute -inset-10 -z-10 rounded-[48px] bg-accent/40 blur-3xl"
                />
                <div className="flex gap-1.5 px-2 pb-2 md:pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c9a227]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5e7d68]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3c5446]" />
                </div>
                <div className="overflow-hidden rounded-2xl bg-surface-2 aspect-[16/10]">{children}</div>
            </motion.div>
        </div>
    );
};
