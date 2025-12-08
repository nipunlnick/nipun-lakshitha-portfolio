"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorGlow: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle particle creation to every 20ms
      // Throttle particle creation to every 8ms for denser trail
      if (now - lastSpawnTime.current > 8) {
        const newParticle = { id: now, x: e.clientX, y: e.clientY };
        setParticles((prev) => {
          const updated = [...prev, newParticle];
          if (updated.length > 50) updated.shift(); // Limit max particles for performance
          return updated;
        });
        lastSpawnTime.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: Math.random() * 0.5 + 0.8, // Check size
              opacity: 0.8,
              backgroundColor: "#FACC15", // neon-yellow
            }}
            animate={{
              y: particle.y - 120, // Higher rise
              x: particle.x + (Math.random() - 0.5) * 60, // Wider jitter
              scale: 0,
              opacity: 0,
              backgroundColor: "#DC2626", // red-600
            }}
            transition={{
              duration: 1.2, // Longer burn
              ease: "easeOut",
            }}
            className="absolute w-4 h-4 rounded-full blur-[2px]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorGlow;
