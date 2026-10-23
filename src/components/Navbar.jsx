import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data";

const SunIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
);

export const ThemeToggle = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="w-10 h-10 grid place-items-center rounded-full border border-line text-ink hover:border-accent hover:text-accent-ink transition-colors cursor-pointer"
    >
        <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
    </button>
);

export const Navbar = ({ menuOpen, setMenuOpen, active, theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${
                scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line shadow-sm" : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-serif text-2xl font-semibold tracking-tight text-ink">
                        glory<span className="text-accent">.</span>lion
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`relative isolate px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                    active === id ? "text-on-primary" : "text-muted hover:text-ink"
                                }`}
                            >
                                {active === id && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-primary -z-10"
                                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                    />
                                )}
                                {label}
                            </a>
                        ))}
                        <div className="ml-3">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button
                            className="w-10 h-10 grid place-items-center text-ink text-xl cursor-pointer z-50"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
