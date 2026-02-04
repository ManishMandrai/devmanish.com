import React, { useRef, useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const HireMe = () => {
  const form = useRef();
  const [copied, setCopied] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => console.log("FAILED...", error.text)
      );
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className=" max-w-screen-md min-h-screen mt-28 p-2 mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-bold sm:text-center text-left px-2">
          Let's Build Together
        </h2>
        <p className="text-gray-300 sm:text-center text-left p-2">
          Turning ideas into stunning and functional digital experiences.
        </p>
      </div>

      {/* Form Section */}
      <div className="p-4 rounded-lg">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                name="to_name"
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 bg-transparent text-white border-b-2 border-gray-600 focus:border-blue-400 focus:outline-none placeholder-gray-400 transition-colors"
                required
              />
            </div>
            <div className="w-full">
              <input
                name="your_Email"
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 bg-transparent text-white border-b-2 border-gray-600 focus:border-blue-400 focus:outline-none placeholder-gray-400 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              rows="3"
              placeholder="Messages..."
              className="w-full p-3 bg-transparent text-white border-b-2 border-gray-600 focus:border-blue-400 focus:outline-none placeholder-gray-400 transition-colors"
              required
            ></textarea>
          </div>

          {/* Success Message */}
          {messageSent && (
            <p className="text-green-400 text-center">
              Message sent successfully! 🎉
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/manish-kumar-mandrai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
        >
          <FaLinkedin className="text-lg" />
          <span>LinkedIn</span>
        </a>

        <button
          onClick={() => copyToClipboard("+91 84352 1300", "phone")}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200"
        >
          <FaPhone className="text-lg" />
          <span>{copied === "phone" ? "Copied!" : "+91 84352 13004 "}</span>
        </button>

        <button
          onClick={() =>
            copyToClipboard("manishkumarmandrai@gmail.com", "email")
          }
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200"
        >
          <FaEnvelope className="text-lg" />
          <span>{copied === "email" ? "Copied!" : "Email Me"}</span>
        </button>
      </div>

      <div className="text-center mt-8 text-gray-400 text-lg">
        <p>Let's discuss over coffee or chai! ☕</p>
      </div>
    </div>
  );
};

export default HireMe;
