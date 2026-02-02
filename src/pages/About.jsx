import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Photo from "../assets/manish.png";
import BarGraph from "../components/BarGraph";
import SkillsAssemble from "../components/SkillsAssemble";
import { Car } from "lucide-react";
import CardSection from "../components/CardSection";
import Contact from "../components/Contact";


const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20 overflow-hidden">
      <div className="w-full max-w-6xl py-8 rounded-lg flex flex-col gap-12">
        {/* ---------- TOP SECTION (PHOTO + INTRO) ---------- */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
          {/* LEFT - PHOTO */}
          <div className="md:w-2/5 flex  items-center justify-center">
            <img
              className="h-56 w-56 md:h-64 md:w-64 rounded-full border-2 border-teal-500 shadow-md object-cover"
              src={Photo}
              alt="Manish Kumar"
            />
          </div>

          {/* RIGHT - INTRO TEXT */}
          <div className="md:w-3/5 px-2">
            <h1 className="text-4xl font-bold mb-2">Manish Kumar</h1>
            <h4 className="text-lg text-teal-600 mb-4">
              Software Engineer • Full-Stack Developer
            </h4>

            <p className="leading-relaxed mb-3">
              I'm a software engineer who enjoys crafting clean, dependable, and
              user-centered web experiences. I work comfortably across the MERN
              stack, turning ideas into smooth, well-structured products that
              look polished and perform consistently from frontend to backend.
            </p>

            <p className="leading-relaxed">
              I thrive in full-stack development, blending intuitive UI/UX with
              thoughtful architecture and efficient logic. Every project is a
              chance to learn, refine, and improve—whether it's adopting new
              tools, optimizing workflows, or solving real user problems. Driven
              by curiosity and a desire to grow, I love building meaningful
              products and taking on challenges that push my skills forward.
            </p>

            {/* Socials */}
            <div className="flex space-x-6 text-2xl mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-teal-500 hover:text-teal-300  transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-teal-500 hover:text-teal-300  transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-2 text-gray-700 mt-8">
          <div>
            <h3 className="font-semibold text-xl">
                What technologies I work with?
            </h3>
            <p>
              I primarily work with the MERN stack for full-stack development,
              along with tools like Tailwind, Prisma, and various REST APIs. I
              also use Puppeteer and Node.js for automation workflows. Depending
              on the project, I adapt quickly to new libraries and tools to
              deliver the best results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
               How do I approach building a project?
            </h3>
            <p>
              I start by understanding the problem clearly, breaking it into
              structured tasks, and planning a scalable architecture. I focus on
              clean UI design, smooth UX, and efficient backend logic.
              Throughout development, I iterate, test, and refine until the
              solution feels solid, reliable, and user-friendly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              What type of work excites me the most?
            </h3>
            <p>
              I enjoy projects that challenge my logic and creativity—whether
              it's full-stack apps, automation tools, or performance
              improvements. Anything that involves solving real-world problems,
              optimizing systems, or building seamless user experiences
              motivates me to push my skills further.
            </p>
          </div>
          
        </div>
        {/* <BarGraph/> */}
        <SkillsAssemble/>
        <CardSection/>
 <div>
           <Contact/>
 </div>
        
      </div>
    </div>
  );
};

export default About;
