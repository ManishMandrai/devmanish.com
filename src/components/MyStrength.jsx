import { useEffect, useRef, useState } from "react";
import { FaPaintBrush, FaCode } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { SiFigma, SiCanva, SiAdobeillustrator, SiTailwindcss, SiReact, SiJavascript, SiNodedotjs, SiFirebase } from "react-icons/si";
import gsap from "gsap";
import Bg from "../assets/ss01.png";

const SkillTag = ({ icon: Icon, name }) => (
  <span className="flex items-center justify-center border border-[#00AEEF] rounded-lg px-5 sm:px-3 py-2 space-x-1 hover:bg-[#010101] hover:scale-105 transition-colors">
    <Icon /> <span>{name}</span>
  </span>
);



export default function MyStrength() {
  const svgPathRef = useRef(null);
  const containerRef = useRef(null);
  const finalPath = "M 10 100 Q 550 100 990 100";
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!svgPathRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const newPath = `M 10 100 Q ${x} ${y} 990 100`;
      
      gsap.to(svgPathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgPathRef.current, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 sm:px-8 relative overflow-hidden">
        <h2 className="sm:text-center mb-12 relative z-10">What I Bring to the Table</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-50 relative z-10">
          <div className="border border-white/20 lg:p-8 p-4 shadow-md h-fit object-cover backdrop-blur-lg rounded-xl inline-flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <FaPaintBrush className="text-3xl text-blue-400" />
              <h3 className="text-2xl font-medium relative">
                Design
                <span className="block h-1 w-30 bg-blue-400 rounded-full mt-1"></span>
              </h3>
            </div>
            <p>I'm a UI/UX web designer passionate about creating intuitive and visually engaging digital experiences. I focus on blending aesthetics with functionality to design seamless, user-friendly interfaces that enhance interaction and engagement.</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <SkillTag icon={SiFigma} name="Figma" />
              <SkillTag icon={SiCanva} name="Canva" />
              <SkillTag icon={SiAdobeillustrator} name="Illustrator" />
              <SkillTag icon={SiTailwindcss} name="Tailwind" />
            </div>
          </div>

          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <Sparkles className="text-yellow-400 opacity-20 text-6xl animate-pulse" />
          </div>

          <div className="border border-white/20 p-8 shadow-md backdrop-blur-lg rounded-xl sm:mt-30">
            <div className="flex sm:justify-end space-x-3 mb-4">
              <FaCode className="text-3xl text-green-400" />
              <h3 className="text-2xl font-medium relative">
                Engineering
                <span className="block h-1 w-45 bg-green-400 rounded-full mt-1"></span>
              </h3>
            </div>
            <p className="sm:text-right">I'm a web developer passionate about building responsive and high-performance websites. I focus on clean code, seamless functionality, and user-friendly experiences to create dynamic and engaging digital solutions.</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <SkillTag icon={SiReact} name="React" />
              <SkillTag icon={SiNodedotjs} name="Node.js" />
              <SkillTag icon={SiFirebase} name="Firebase" />
              <SkillTag icon={SiJavascript} name="JavaScript" />
            </div>
          </div>
        </div>

{/* 
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="relative h-full w-full">
            <div className="absolute left-1/4  top-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-400/30 to-green-400/30 rounded-full transform -translate-y-1/2"></div>
          </div>
        </div> */}




        {/* Elastic Connector Line - Adjusted to the correct position */}
        <div className="absolute hidden sm:inline left-1/4 top-1/2 w-1/2 h-1 pointer-events-none">
          <svg width="500" height="150" >
            <path ref={svgPathRef} d={finalPath} stroke="white" fill="transparent" />
          </svg>
        </div>




      </div>
      <div>
        

        <div className="lg:px-100 sm:px-40 px-8 -z py-0 my-0">
          <img src={Bg} alt="" className="opacity-20" />
        </div>
      </div>
    </div>
  );
}