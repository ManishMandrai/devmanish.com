import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMobile,
  FaPlug,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import {
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import Photo from "../assets/manish.png";

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Responsiveness", icon: FaMobile },
      { name: "RESTful API ", icon: FaPlug },
    ],
  },
  {
    title: "Backend Development & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful API ", icon: FaCode },
      { name: "Authentication ", icon: FaShieldAlt },
    ],
  },
  {
    title: "Databases & State Management",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "Mongoose", icon: FaDatabase },
    ],
  },
  {
    title: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Testing, Debugging & Deployment",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Chrome Tools", icon: FaCode },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Hostinger", icon: FaServer },
    ],
  },
];

const About = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state of the clicked section
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl py-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Column - About Section */}
        <div className="flex-1">
          <div className="flex justify-center mb-6">
            <img
              className="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-teal-500 shadow-md"
              src={Photo}
              alt="Manish Kumar"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">Manish Kumar</h1>
            <h4 className="text-lg  mb-6">
              Full-Stack Developer | C++ Programmer
            </h4>
            <p className="leading-relaxed mb-4">
              Hi, I'm Manish Kumar, a passionate and detail-oriented Full-Stack
              Web Developer and C++ Programmer. As a final-year college student,
              I have hands-on experience in building dynamic and scalable web
              applications using the MERN stack. My strong problem-solving
              skills and deep understanding of algorithms enable me to write
              efficient and optimized code.
            </p>
            <p className=" leading-relaxed mb-4">
              With a keen eye for detail and a strong grasp of both front-end
              and back-end technologies, I enjoy crafting seamless user
              experiences and robust server-side architectures. I stay up to
              date with emerging technologies and continuously refine my skills
              to develop high-quality, scalable solutions.
            </p>
            <p className=" leading-relaxed mb-6">
              I'm eager to collaborate with innovative teams, solve complex
              challenges, and contribute to impactful projects. Let's connect
              and create something amazing together! 🚀
            </p>
          </div>

          <div className="flex justify-center space-x-6 text-2xl mt-6">
  
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-300 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-300 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Column - Skills Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {skillsCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <div
                  className="flex items-center justify-between cursor-pointer p-3  rounded-lg transition-all"
                  onClick={() => toggleSection(index)}
                >
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                  <FiChevronDown
                    className={`transition-transform ${
                      openSections[index] ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openSections[index] && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border p-4 rounded-xl">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-center border rounded-lg p-3 space-x-2  hover:scale-105 transition-all cursor-pointer"
                      >
                        {skill.icon ? (
                          <skill.icon className="text-xl" />
                        ) : (
                          <FaCode className="text-xl" />
                        )}
                        <span className="text-sm font-medium ">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
