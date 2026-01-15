"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c83e27c5-78c0-41aa-b4c8-77fa247d2768", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Contact
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Get In Touch
          </h2>
          
          {/* UPDATED ANIMATION: Continuous Focus */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: [1, 1.03, 1] // Pulses slightly to keep attention
            }}
            viewport={{ once: false, margin: "-50px" }} // 'once: false' means it triggers EVERY time you scroll here
            transition={{ 
                duration: 0.8, // Smooth entrance
                scale: {
                    duration: 2, // Slow breathing effect
                    repeat: Infinity, // Never stops
                    ease: "easeInOut"
                }
            }}
            className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 lg:mx-auto transition-colors duration-300 font-medium"
          >
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
          </motion.p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <div className="space-y-8 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700/50 shadow-sm h-fit">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Contact Information</h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Feel free to reach out via email or connect on professional networks. I am currently open to full-stack and DevOps engineering roles.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                </div>
                <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Email Me</p>
                    <a href="mailto:nohrikhalilullah@gmail.com" className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        nohrikhalilullah@gmail.com
                    </a>
                </div>
              </div>

              {/* WhatsApp - Add your number here */}
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                </div>
                <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">WhatsApp</p>
                    <a href="https://wa.me/923421520614" target="_blank" className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        Chat on WhatsApp
                    </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                </div>
                <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Location</p>
                    <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        Karachi, Pakistan (Remote Available)
                    </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex gap-4">
                <a href="https://linkedin.com/in/khalilullah-dev" target="_blank" className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all">
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/Khalilullah-Nohri" target="_blank" className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                    <Github size={20} />
                </a>
            </div>

          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700/50 shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send me a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-center space-y-4">
                <CheckCircle className="text-green-500 w-16 h-16" />
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Message Sent!</h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-blue-500 dark:text-white transition-colors outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-blue-500 dark:text-white transition-colors outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-blue-500 dark:text-white transition-colors outline-none resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="flex items-center text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-4 text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;