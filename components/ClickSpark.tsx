"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
}

const ClickSpark: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev, newSpark]);

      // Remove spark after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {sparks.map((spark) => (
          <SparkBurst key={spark.id} x={spark.x} y={spark.y} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const SparkBurst: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const particleCount = 50;
  const particles = Array.from({ length: particleCount });

  return (
    <div
      className="absolute top-0 left-0"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
          animate={{
            x: (Math.random() - 0.5) * 300, // Increased spread X
            y: (Math.random() - 0.5) * 300, // Increased spread Y
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute rounded-full bg-neon-yellow shadow-[0_0_15px_rgba(250,204,21,0.8)]"
          style={{
            width: Math.random() * 6 + 2 + "px", // Random size 2-8px
            height: Math.random() * 6 + 2 + "px",
          }}
        />
      ))}
      {/* Central Flash */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white blur-sm"
      />
    </div>
  );
};

export default ClickSpark;
