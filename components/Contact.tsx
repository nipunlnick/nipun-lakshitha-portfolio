"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 md:px-10 max-w-4xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-yellow/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Interested in working together or have a question? I'm always open
              to discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-orange border border-white/5 shrink-0 group-hover:scale-110 group-hover:text-neon-yellow group-hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="text-sm md:text-base group-hover:text-white transition-colors">
                  pvnipunlakshitha@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-orange border border-white/5 shrink-0 group-hover:scale-110 group-hover:text-neon-yellow group-hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span className="text-sm md:text-base group-hover:text-white transition-colors">
                  +94 77 87 97 936
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-orange border border-white/5 shrink-0 group-hover:scale-110 group-hover:text-neon-yellow group-hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <span className="text-sm md:text-base group-hover:text-white transition-colors">
                  Galle, Sri Lanka
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-yellow to-orange-600 text-neutral-900 font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </form>
        </div>
      </motion.div>

      <footer className="mt-20 text-center text-neutral-600 text-sm">
        <p>
          © {new Date().getFullYear()} Nipun Lakshitha. Built with React &
          Tailwind.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
