import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Link that drifts slightly toward the cursor while hovered
export const MagneticButton = ({ href, children, className = "", strength = 0.3 }) => {
    const ref = useRef(null);
    const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
    const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * strength);
        y.set((e.clientY - rect.top - rect.height / 2) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ x, y }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.96 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.a>
    );
};
