import { lazy, Suspense, useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { useActiveSection, useTheme } from "./hooks";
import { navLinks } from "./data";

const SplashCursor = lazy(() => import("./components/fx/SplashCursor"));

const sectionIds = navLinks.map((link) => link.id);

// The fluid cursor only makes sense with a mouse, and is skipped for reduced motion
const wantsSplash =
  window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(sectionIds);
  const handleLoaded = useCallback(() => setIsLoaded(true), []);

  return (
    <MotionConfig reducedMotion="user">
      {!isLoaded && <LoadingScreen onComplete={handleLoaded} />}
      <div
        className={`relative min-h-screen bg-bg text-ink transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {wantsSplash && isLoaded && (
          <Suspense fallback={null}>
            <SplashCursor
              key={theme}
              theme={theme}
              // Light mode mixes like paint, so stay in one hue family to avoid muddy blends
              colors={theme === "dark" ? ["#d4b13f", "#e6c866"] : ["#2f6b4f", "#4e8a66"]}
              rainbow={false}
              intensity={0.55}
              size={0.8}
              zIndex={0}
            />
          </Suspense>
        )}
        <ScrollProgress />
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          active={active}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} />
        <main className="relative z-10">
          <Home theme={theme} />
          <About />
          <Skills theme={theme} />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
