import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { RevealOnScroll } from "../RevealOnScroll"
import { SectionHeading } from "../SectionHeading"
import emailjs from 'emailjs-com'

const SERVICE_ID = "service_mfprmsm";
const TEMPLATE_ID = "template_89twk6q";
const PUBLIC_KEY = "drSwr2rleKLijpqmv";

const inputClass =
    "peer w-full bg-bg border border-line rounded-xl px-5 pt-6 pb-2 text-ink transition-all placeholder-transparent " +
    "focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15";

const labelClass =
    "absolute left-5 top-2 text-xs text-muted transition-all pointer-events-none " +
    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-ink";

const Toast = ({ toast, onDone }) => {
    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(onDone, 4000);
        return () => clearTimeout(t);
    }, [toast, onDone]);

    return (
        <AnimatePresence>
            {toast && (
                <motion.div
                    role="status"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-xl font-medium text-sm ${
                        toast.type === "success" ? "bg-primary text-on-primary" : "bg-red-700 text-white"
                    }`}
                >
                    {toast.message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [sending, setSending] = useState(false)
    const [toast, setToast] = useState(null)
    const clearToast = useCallback(() => setToast(null), [])

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                setToast({ type: "success", message: "Message sent — thank you! I'll get back to you soon." });
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => setToast({ type: "error", message: "Oops! Something went wrong. Please try again." }))
            .finally(() => setSending(false));
    };

    return <section id="contact" className="py-24 md:py-32 px-6 bg-surface-2/50">
        <div className="max-w-2xl mx-auto">
            <SectionHeading eyebrow="04 · Contact" title="Let's work together" />

            <RevealOnScroll>
                <div className="p-8 md:p-10 bg-surface rounded-3xl shadow-sm border border-line">
                    <p className="text-muted text-center mb-8">
                        Have a project, an opportunity, or just want to say hi? My inbox is always open.
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required value={formData.name}
                                className={inputClass} placeholder="Name" onChange={handleChange} />
                            <label htmlFor="name" className={labelClass}>Name</label>
                        </div>

                        <div className="relative">
                            <input type="email" id="email" name="email" required value={formData.email}
                                className={inputClass} placeholder="Email" onChange={handleChange} />
                            <label htmlFor="email" className={labelClass}>Email</label>
                        </div>

                        <div className="relative">
                            <textarea id="message" name="message" required value={formData.message} rows={5}
                                className={`${inputClass} resize-none`} placeholder="Message" onChange={handleChange} />
                            <label htmlFor="message" className={labelClass}>Message</label>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={sending}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary text-on-primary py-4 px-6 rounded-full font-semibold text-lg
                                shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow disabled:opacity-60 cursor-pointer disabled:cursor-wait"
                        >
                            {sending ? "Sending…" : "Send Message"}
                        </motion.button>
                    </form>
                </div>
            </RevealOnScroll>
        </div>

        <Toast toast={toast} onDone={clearToast} />
    </section>
}
