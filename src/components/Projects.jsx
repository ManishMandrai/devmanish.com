import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat App",
      description:
        "A full-stack real-time chat platform built using Next.js, TypeScript, Convex, and Stream SDK—supporting instant messaging, channel management, live video calls, authentication via Clerk, and a fully responsive UI with Tailwind CSS.",
      skills: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Stream SDK",
        "Clerk",
        "Tailwind CSS",
      ],
      video: "", // Add YouTube link later
      liveLink: "https://hello-hii-chat-app.vercel.app/",
      github: "https://github.com/ManishMandrai/hello-hii",
    },
    {
      title: "Full Stack Ecommerce App",
      description:
        "A dynamic and responsive e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, product management, a shopping cart, and secure payment integration for ",
      skills: ["React.js", "Node", "MongoDB"],
      video: "https://www.youtube.com/watch?v=uPTxeoC_MuM",
      // liveLink: "https://manish-shoping-app.vercel.app/",
      github: "https://github.com/ManishMandrai/Manish.Shoping_App",
    },
    {
      title: "AI Chatbot - Gemini Clone",
      description:
        "An intelligent AI chatbot powered by Gemini, built using React. It provides real-time, context-aware responses, enhancing user interactions with natural language understanding and a seamless conversational experience.",
      skills: ["React.js", "AI", "Tailwind"],
      video: "https://www.youtube.com/watch?v=eezNM5SQpeo",
      liveLink: "https://gemini-clone-ashen-three.vercel.app/",
      github: "https://github.com/ManishMandrai/gemini-clone",
    },
    {
      title: "Chrome Extension",
      description:
        "Enhance your security with our Random Password Generator Chrome extension! Built with React.js, HTML, CSS, and JavaScript, this lightweight extension generates strong, unique passwords instantly. Customize length,  ",
      skills: ["React", "Tailwind", "HTML"],
      video: "https://www.youtube.com/watch?v=rp2ePB8gKYw",
      // liveLink: "https://liveproject3.com",
      github: "https://github.com/ManishMandrai/Password-Generator-Extension",
    },
  ];

  useEffect(() => {
    // Ensure Swiper attaches navigation buttons after rendering
    const swiperInstance = document.querySelector(".swiper").swiper;
    swiperInstance.params.navigation.prevEl = ".custom-swiper-prev";
    swiperInstance.params.navigation.nextEl = ".custom-swiper-next";
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, []);

  return (
    <div className="max-w-7xl mx-auto border-white relative">
      <h2 className=" px-4 pb-8 sm:pb-0">Personal Experiments</h2>
      <Swiper
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // slide every 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row lg:px-20 border-white  lg:py-20 px-4 py-12 items-center justify-between gap-8">
              {/* Project Details */}
              <div className="flex-1 flex flex-col gap-4 order-2 md:order-0">
                <h3>{project.title}</h3>
                <p className="text-gray-100 text-base text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center border-1 rounded-lg px-5 py-2 space-x-2 hover:bg-[#000000] hover:scale-105 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video Container with Hover Buttons */}
              <div className="group flex-1 order-0 md:order-1 relative w-full md:w-full h-80 md:h-80 lg:h-80">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      project.video.split("v=")[1]
                    }?autoplay=1&mute=1&loop=1&playlist=${
                      project.video.split("v=")[1]
                    }`}
                    className="w-full h-full"
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Desktop Buttons (Hover) */}
                  <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black border-2 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2  border-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Buttons (Always Visible) */}
              <div className="flex md:hidden order-1 gap-4 justify-center mt-4 w-full">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons (Hidden on small screens) */}
      <button className="custom-swiper-prev hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10  text-white p-3 rounded-full">
        ❮
      </button>
      <button className="custom-swiper-next hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full">
        ❯
      </button>
    </div>
  );
};

export default Projects;
