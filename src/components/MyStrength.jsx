import { FaLaptopCode, FaServer } from "react-icons/fa";
import ThreeLaptop from "./ThreeLaptop";

const MacWindow = ({ icon: Icon, title, desc, bullets }) => (
  <div className="rounded-xl border  bg-white/5 dark:bg-black/20 backdrop-blur-md overflow-hidden">

    {/* MacOS Title Bar */}
    <div className="flex items-center gap-2 px-4 py-2 border-b  dark:bg-black/30">
      <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
      <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
      <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
      <span className="ml-3 flex items-center gap-2 font-medium">
        <Icon className="w-4 h-4" />
        {title}
      </span>
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <p className="text-sm leading-relaxed">{desc}</p>

      <ul className="space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="w-2 h-2 rounded-full mt-1 bg-gray-400"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function MyStrength() {
  return (
    <section className="w-full p-4 min-h-screen items-center py-4 ">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-sm tracking-wide font-semibold mb-4">
          The Craft Behind My Work
        </h2>

      </div>

      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">


        {/* LEFT SIDE (CONTENT) */}
        <div className="order-2 md:order-2 space-y-10">

          {/* Better Heading */}

          {/* Cards */}
          <div className="space-y-4">
            <MacWindow
              icon={FaLaptopCode}
              title="Frontend Engineering"
              desc="Crafting clean, interactive, scalable interfaces using modern component architecture."
              bullets={[
                "Component-driven UI (React, Next.js)",
                "Responsive layouts with real-world UX",
                "SSR, routing & state management",
                "Smooth animations & micro-interactions",
              ]}
            />

            <MacWindow
              icon={FaServer}
              title="Backend Systems"
              desc="Designing durable server logic, APIs, and integrations that scale with traffic and product needs."
              bullets={[
                "REST APIs, auth & validation",
                "Database modeling & optimization",
                "Deployment-ready backend logic",
                "Secure & reliable architecture",
              ]}
            />
          </div>
        </div>

        {/* RIGHT SIDE (3D MODEL) */}
        <div className="order-1 md:order-1 flex justify-center  md:justify-end">
          <div className="w-full  h-[360px] sm:h-[480px] md:h-[600px] max-w-xl sm:pt-28 ">
            <ThreeLaptop  />
          </div>
        </div>

      </div>
    </section>
  );
}
