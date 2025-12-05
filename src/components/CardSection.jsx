import React from "react";

// Images (ADD YOUR FILE PATHS HERE)
import vinyl from "../assets/vinyl.png";
import songCover from "../assets/album.jpg";
import Kohli from "../assets/virat.png";
import { FaSpotify } from "react-icons/fa";


const cardStyle =
  "p-6 md:p-6 relative overflow-hidden rounded-xl border backdrop-blur-md shadow-sm hover:shadow-md transition-all bg-[var(--btn-bg)] border-[var(--btn-border)] text-[var(--text-primary)] h-[340px] md:h-[340px]";


const CardSection = () => {
  return (
    <div className="w-full py-16  flex justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">

        {/* 1️⃣ CODING GEAR */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-4 opacity-90">💻 Coding Gear</h3>

          <p className="text-sm opacity-80">
            Xiaomi Notebook Pro 120G — my daily workhorse.
          </p>

          <ul className="mt-4 text-sm opacity-70 space-y-1">
            <li>• 2.5K 120Hz Display</li>
            <li>• Intel Core i5 12th Gen</li>
            <li>• Nvidia MX550 GPU</li>
            <li>• 16GB LPDDR5 RAM</li>
            <li>• 512GB NVMe SSD</li>
            <li>• Aluminum CNC Body</li>
          </ul>
        </div>

        {/* 2️⃣ INSPIRATION */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold opacity-90">🔥 Inspiration</h3>

          <p className="text-sm opacity-80 mt-3 text-end leading-relaxed">
            “Self-belief and hard work will always earn you success.”
            <br /><br />
            {/* Virat’s discipline and mindset influence how I improve as a developer. */}
          </p>

          <img
            src={Kohli}
            className="absolute bottom-0 right-0 w-[120%] opacity-95 pointer-events-none"
          />

        </div>

        {/* 3️⃣ LAST PLAYED */}
        <div className={cardStyle}>
          <div className="flex items-center gap-2 mb-3">
            <FaSpotify className=" text-3xl text-green-500" />
            <h3 className="font-semibold opacity-90">Last Played</h3>
          </div>

          <p className="text-sm opacity-80  leading-relaxed">
            Last Played <span className="font-semibold opacity-100">Thrift Shop</span>
            <br />
            Song by{" "}
            <span className="font-semibold opacity-100">
              Macklemore & Ryan Lewis
            </span>
          </p>

          <div className="absolute bottom-6 right-24 opacity-40">
            <img src={vinyl} className="w-32" />
          </div>

          <a
            href="https://open.spotify.com/track/1CmUZGtH29Kx36C1Hleqlz?si=48ea501873de4ee8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[-50px] right-28"
          >
            <img
              src={songCover}
              className="w-[100px] rounded-xl shadow-xl pointer-events-auto hover:scale-105 transition"
            />
          </a>


        </div>

        {/* 4️⃣ BOOKS */}
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-3 opacity-90">📚 Books </h3>



          <ul className="text-sm opacity-80 space-y-2">
            <li><span className="text-green-500">•</span> Atomic Habits – James Clear</li>
            <li><span className="text-green-500">•</span> Deep Work – Cal Newport</li>
            <li><span className="text-green-500">•</span> Rework – Jason Fried</li>
            <li><span className="text-green-500">•</span> Can't Hurt Me – David Goggins</li>
            <li><span className="text-green-500">•</span> The Subtle Art – Mark Manson</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CardSection;
