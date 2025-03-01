import React from "react";

const SparkleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/80 rounded-full animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SparkleBackground;
