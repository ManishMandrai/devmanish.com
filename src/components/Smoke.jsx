import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmokeCursor = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });

      // Generate thick smoke particles
      const particleCount = 5; // Number of particles per frame
      const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
        id: Date.now() + i,
        x: clientX + (Math.random() - 0.5) * 50, // Wider spread
        y: clientY + (Math.random() - 0.5) * 50,
        size: Math.random() * 30 + 20, // Larger particles for thicker smoke
        life: 1, // Full opacity initially
        speed: Math.random() * 0.8 + 0.5, // Slower movement
        angle: Math.random() * Math.PI * 2, // Random direction
      }));

      setParticles((prev) => [...prev, ...newParticles]);
    };

    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed, // Move in random direction
            y: p.y + Math.sin(p.angle) * p.speed,
            life: p.life - 0.01, // Fade out over time
            size: p.size * 0.97, // Shrink slowly
          }))
          .filter((p) => p.life > 0) // Remove dead particles
      );
      animationFrame = requestAnimationFrame(updateParticles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Smoke Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 3,
            x: Math.cos(particle.angle) * 50, // Wider spread
            y: Math.sin(particle.angle) * 100,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `rgba(255, 255, 255, ${particle.life * 0.8})`,
            filter: `blur(${particle.size * 0.5}px)`,
            boxShadow: `0 0 ${particle.size * 1.2}px rgba(255, 255, 255, ${
              particle.life * 0.6
            })`,
          }}
        />
      ))}

      {/* Cursor Core */}
      <motion.div
        className="absolute  rounded-full mix-blend-overlay"
        style={{
          left: mousePos.x - 24,
          top: mousePos.y - 24,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SmokeCursor;