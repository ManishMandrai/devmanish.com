import React from "react";
import { FaCertificate, FaQuoteLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import Img from '../assets/myappbroker.png'

const experienceData = [
  {
    id: 1,
    company: "MY APP BROKER ",
    url: "https://www.myappbroker.com/",
    type: "Freelancer - Full Stack Developer",
    dates: "Jan - Feb 2025",
    description:
      "Developed the MyAppBroker website from scratch using React.js, Firebase, and Node.js, ensuring a seamless, scalable, and fully functional platform. Key contributions included architecting the system, implementing real-time features, and optimizing performance.",
    tags: ["React", "JavaScript", "Firebase", "Tailwind"],
    certificateLink: "#",
    testimonialLink: "#",
    image: Img,
  },
];

const Experience = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-bold sm:text-center mb-12">Professional Experience</h2>
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className={`p-6 mb-12 border border-white/20 rounded-lg flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={exp.image} alt={exp.type} className="rounded-lg object-cover" />
              <div className="mt-4 text-center">
                <p className="font-medium">{exp.type}</p>
                <p className="text-sm text-gray-300">{exp.dates}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 md:px-8">
              <h3 className="mb-4 text-xl font-semibold">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 inline-flex items-center gap-1"
                >
                  {exp.company}
                  <FaExternalLinkAlt className="text-sm ml-1" />
                </a>
              </h3>
              <p className="mb-6 lg:max-w-[80%]">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 text-sm border border-[#00AEEF] rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                <Link to="/certificate" className="flex items-center gap-2 text-sm hover:text-blue-400">
                  <FaCertificate /> Certificate
                  <FaExternalLinkAlt className="text-xs ml-1" />
                </Link>
                <Link to="/testimonials" className="flex items-center gap-2 text-sm hover:text-green-400">
                  <FaQuoteLeft /> Testimonial
                  <FaExternalLinkAlt className="text-xs ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
