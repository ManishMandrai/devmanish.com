import React from "react";

// Images (ADD YOUR FILE PATHS HERE)
import vinyl from "../assets/vinyl.png";
import songCover from "../assets/album.webp";
import Kohli from "../assets/virat.png";
import { FaSpotify } from "react-icons/fa";

const cardStyle =
  "p-3 md:p-6 relative overflow-hidden rounded-xl border backdrop-blur-md shadow-sm hover:shadow-md transition-all bg-[var(--btn-bg)] border-[var(--btn-border)] text-[var(--text-primary)] h-[340px] md:h-[340px]";

const CardSection = () => {
  return (
    <div className="w-full py-16  flex justify-center p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
        {/* 1️⃣ CODING GEAR */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-4">💻 My Machine</h3>

          <p className="text-sm">
            Xiaomi Notebook Pro — the laptop that powers all my builds.
          </p>

          <ul className="mt-4 text-sm space-y-1 list-disc pl-5">
            <li>Intel Core i5 11th Gen</li>
            <li>Intel Iris Xe Graphics</li>
            <li>QHD+ 2560×1600 IPS Display</li>
            <li>512GB PCIe NVMe SSD</li>
            <li>Up to 16GB DDR4 RAM</li>
            <li>Wi-Fi 6 & Thunderbolt 4</li>
            <li>Premium Aluminum Chassis</li>
          </ul>
        </div>

        {/* 2️⃣ INSPIRATION */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold ">🔥 Inspiration</h3>

          <p className="text-xl  mt-3 text-end leading-relaxed">
            Self-belief and hard work will <br /> always earn you success.
            <br />
            <br />
            {/* Virat’s discipline and mindset influence how I improve as a developer. */}
          </p>

          <img
            src={Kohli}
            className="absolute  right-0 sm:right-8 bottom-[-20px] w-[380px] md:w-[320px] pointer-events-none"
          />
        </div>

        {/* 3️⃣ LAST PLAYED */}
        {/* 3️⃣ LAST PLAYED */}
        <div className={cardStyle}>
          <div className="flex items-center gap-2 mb-3">
            <FaSpotify className="text-4xl text-green-500" />
            <span className="font-semibold text-2xl ">That Debug My Life</span>
          </div>

          <p className="text-sm leading-relaxed ">
            Currently vibing On —  <br />
            <span className="font-semibold ">DL91 FM</span>
            <br />
            by{" "}
            <span className="font-semibold ">
              DL91 Era, Hurricane & Seedhe Maut
            </span>
          </p>

          {/* Centered vinyl */}
          <img
            src={vinyl}
            className="
      pointer-events-none 
      absolute left-1/2 bottom-4
      -translate-x-1/2 
      w-40  
    "
          />

          {/* Centered Album Cover */}
          <a
            href="https://open.spotify.com/album/2Jc0evKv7asNZMx32rQHrF?si=bn-OpxTTTsi3GR2k-8Barg"
            target="_blank"
            rel="noopener noreferrer"
            className="
      absolute left-1/2 bottom-4
      -translate-x-1/2 translate-y-1/2
    "
          >
            <img
              src={songCover}
              className="
        w-48  
        rounded-xl shadow-2xl 
        hover:scale-120 transition
      "
            />
          </a>
        </div>

        {/* 4️⃣ BOOKS */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-1 opacity-90">
            📚 Fueling My Mind
          </h3>

          <p className="text-xs opacity-60 mb-3">
            Books shaping my thinking and growth.
          </p>

          <ul className="text-sm opacity-80 space-y-1 list-disc pl-5">
            {/* Current book highlighted */}
            <li className="font-semibold text-green-500">
              Sapiens —  Yuval Noah Harari 
            </li>

            <li>Deep Work —  Cal Newport</li>
            <li>Master Your Emotions </li>
            <li>The Almanack of Naval Ravikant</li>
            <li>Ikigai —  Héctor García & Francesc Miralles</li>
            <li>Atomic Habits —  James Clear</li>
            <li>Bhagavad Gita —  Maharishi Ved Vyasa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
