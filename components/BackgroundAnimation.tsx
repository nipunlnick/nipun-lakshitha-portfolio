"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  opacity: number;
  fadeSpeed: number;
}

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Ember colors: mix of oranges, reds, and yellows
    const colors = [
      "255, 69, 0", // OrangeRed
      "255, 140, 0", // DarkOrange
      "255, 165, 0", // Orange
      "255, 215, 0", // Gold
      "220, 20, 60", // Crimson
    ];

    const createParticle = (
      x?: number,
      y?: number,
      isMouse?: boolean
    ): Particle => {
      const size = Math.random() * (isMouse ? 2.5 : 3) + 1; // Size between 1 and 4
      const pX = x !== undefined ? x : Math.random() * canvas.width;
      const pY = y !== undefined ? y : canvas.height + size; // Start just below screen
      const speedY = Math.random() * (isMouse ? 2 : 1.5) + 0.5; // Upward speed
      const speedX = (Math.random() - 0.5) * (isMouse ? 1.5 : 0.5); // Slight drift
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.2; // Initial opacity
      const fadeSpeed = Math.random() * (isMouse ? 0.02 : 0.002) + 0.001;

      return { x: pX, y: pY, size, speedY, speedX, color, opacity, fadeSpeed };
    };

    const initParticles = () => {
      // Create some initial particles scattered on screen so it's not empty start
      const initialCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < initialCount; i++) {
        const p = createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
        particles.push(p);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(e.clientX, e.clientY, true));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles occasionally
      if (Math.random() < 0.15) {
        // Spawn rate
        particles.push(createParticle());
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.y -= p.speedY; // Move up
        p.x += p.speedX; // Drift side to side
        p.opacity -= p.fadeSpeed; // Fade out

        // Draw particle (glowing orb)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Optional: Add a glow effect
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = `rgba(${p.color}, 0.5)`;

        // Remove dead particles
        if (p.opacity <= 0 || p.y < -10) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-neutral-950"
    />
  );
};

export default BackgroundAnimation;
