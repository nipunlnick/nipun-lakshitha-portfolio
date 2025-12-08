"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Megaphone,
  Calendar,
  Code,
  ArrowRight,
  TrendingUp,
  Ticket,
  Smartphone,
  Globe,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Social Media Management & Content Creation",
    image: "/Image/SGMediaLab.png",
    company: "SG Media Lab",
    role: "Founder",
    description:
      "Strategic content creation, automation, and analytics to grow your brand presence on Facebook & Instagram.",
    tags: ["Content Strategy", "Automation", "Analytics"],
    gradient: "from-pink-500 to-purple-500",
    textColor: "text-pink-500",
    hoverColor: "group-hover:text-pink-500",
    links: [
      { url: "mailto:sandugraphics1@gmail.com", icon: Mail },
      { url: "https://www.instagram.com/sandugraphics", icon: Instagram },
      { url: "https://www.facebook.com/sandugraphicsFB", icon: Facebook },
    ],
  },
  {
    id: 2,
    title: "Event Planning & Management",
    image: "/Image/Eventz.png",
    company: "EventZ by Roma and Nick",
    role: "Co-Founder",
    description:
      "End-to-end event coordination, logistics management, and digital promotion for seamless experiences.",
    tags: ["Logistics", "Promotion", "Coordination"],
    gradient: "from-yellow-500 to-green-500",
    textColor: "text-green-500",
    hoverColor: "group-hover:text-green-500",
  },
  {
    id: 3,
    title: "Custom Software & AI Solutions",
    image: "/Image/Voxicore.png",
    company: "Voxicore",
    role: "Co-Founder",
    description:
      "Tailored Web, Mobile, and Desktop applications built to solve specific business problems.",
    tags: ["Web Apps", "Mobile Apps", "SaaS", "AI", "Electronics"],
    gradient: "from-blue-800 to-cyan-500",
    textColor: "text-cyan-400",
    hoverColor: "group-hover:text-cyan-400",
    links: [
      { url: "https://voxicore.com", icon: Globe },
      { url: "https://www.instagram.com/voxicore.digital", icon: Instagram },
      { url: "https://www.facebook.com/voxicore.digital", icon: Facebook },
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Freelance <span className="text-neon-yellow">Services</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Delivering high-quality digital solutions tailored to your business
          needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Neon Gradient Border/Glow Effect on Hover */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
            />

            <div className="relative h-full bg-neutral-900/80 border border-white/10 p-8 rounded-2xl overflow-hidden backdrop-blur-xl group-hover:bg-neutral-900/90 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                {/* Logo Image */}
                <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden relative shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {service.company && (
                  <div>
                    <h4
                      className={`${service.textColor} font-bold text-lg leading-tight`}
                    >
                      {service.company}
                    </h4>
                    <p className="text-sm text-neutral-500 font-mono">
                      {service.role}
                    </p>
                  </div>
                )}
              </div>

              <h3
                className={`text-xl font-bold text-white mb-4 ${service.hoverColor} transition-colors`}
              >
                {service.title}
              </h3>

              <p className="text-neutral-400 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-full border border-neutral-700 group-hover:border-neutral-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {service.links && (
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {service.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                      <link.icon size={18} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
