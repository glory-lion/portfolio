import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message:"",
    })
    const SERVICE_ID = "service_mfprmsm";
    const TEMPLATE_ID = "template_89twk6q";
    const PUBLIC_KEY = "drSwr2rleKLijpqmv";
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name:"", email:"", message:""});
        }).catch(()=>alert("Oops! Something went wrong. Please try again."));
    };

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-stone-700 
                bg-clip-text text-transparent mb-8 text-center">Get In Touch!</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value ={formData.name}className="w-full bg-amber-800/10 border border-amber-800/50
                        rounded px-4 py-3 text-black transition focus:outline-none focus:border-amber-800 focus:bg-amber-800/5"
                        placeholder="Name..." onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required value ={formData.email} className="w-full bg-amber-800/10 border border-amber-800/50
                        rounded px-4 py-3 text-black transition focus:outline-none focus:border-amber-800 focus:bg-amber-800/5"
                        placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" requiredvalue ={formData.message} rows={5} className="w-full bg-amber-800/10 border border-amber-800/50
                        rounded px-4 py-3 text-black transition focus:outline-none focus:border-amber-800 focus:bg-amber-800/5"
                        placeholder="Your Message..." onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                    </div>                    

                    <button type="submit" className="w-full bg-amber-900 text-white py-3 px-6 rounded font-medium
                                    transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(68,45,16,4)]">
                        Send Message
                    </button>

                </form>
            </div>
        </RevealOnScroll>

    </section>
}