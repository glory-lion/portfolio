import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const SERVICE_ID = "service_mfprmsm";
    const TEMPLATE_ID = "template_89twk6q";
    const PUBLIC_KEY = "drSwr2rleKLijpqmv";
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="w-full max-w-2xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-amber-900/10 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-800 
                bg-clip-text text-transparent mb-8 text-center tracking-tight">Get In Touch!</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative group">
                        <input type="text" id="name" name="name" required value={formData.name}
                            className="w-full bg-white/50 border border-amber-900/10 rounded-xl px-5 py-4 text-stone-800 transition-all 
                        focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 placeholder-stone-400 group-hover:border-amber-500/30"
                            placeholder="Name..." onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>

                    <div className="relative group">
                        <input type="email" id="email" name="email" required value={formData.email}
                            className="w-full bg-white/50 border border-amber-900/10 rounded-xl px-5 py-4 text-stone-800 transition-all 
                        focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 placeholder-stone-400 group-hover:border-amber-500/30"
                            placeholder="example@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>

                    <div className="relative group">
                        <textarea id="message" name="message" requiredvalue={formData.message} rows={5}
                            className="w-full bg-white/50 border border-amber-900/10 rounded-xl px-5 py-4 text-stone-800 transition-all 
                        focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 placeholder-stone-400 resize-none group-hover:border-amber-500/30"
                            placeholder="Your Message..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>

                    <button type="submit" className="w-full bg-amber-900 text-amber-50 py-4 px-6 rounded-full font-bold text-lg
                                    transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/20 hover:bg-amber-800">
                        Send Message
                    </button>

                </form>
            </div>
        </RevealOnScroll>

    </section>
}