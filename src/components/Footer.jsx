export const Footer = () => (
    <footer className="border-t border-line py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
            <p>© {new Date().getFullYear()} Glory Lion. Built with React & Tailwind.</p>
            <a href="#home" className="font-mono hover:text-accent-ink transition-colors">Back to top ↑</a>
        </div>
    </footer>
);
