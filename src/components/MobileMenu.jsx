import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data";

export const MobileMenu = ({ menuOpen, setMenuOpen, active }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bg/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center md:hidden"
        >
          {navLinks.map(({ id, label }, i) => (
            <motion.a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * i } }}
              exit={{ opacity: 0, y: 10 }}
              className={`font-serif text-4xl my-3 ${active === id ? "text-accent-ink" : "text-ink"}`}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
