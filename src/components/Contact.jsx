import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset(); // Reset form fields after sending
          setTimeout(() => setMessageSent(false), 3000); // Hide success message after 3 sec
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="text-white px-4 my-10 max-w-screen-md mx-auto">
      {/* Header Section */}
      <h2 className="font-bold sm:text-center mb-12">Shoot me a message</h2>

      {/* Form Section */}
      <div className="p-2rounded-lg">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          {/* Name and Email Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                name="to_name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent text-white border-0 border-b-2 border-white focus:outline-none focus:ring-0 placeholder-gray-400"
                required
              />
            </div>
            <div className="w-full">
              <input
                name="your_Email"
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 bg-transparent text-white border-0 border-b-2 border-white focus:outline-none focus:ring-0 placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              rows="3"
              placeholder="Execute message();"
              className="w-full p-3 bg-transparent text-white border-0 border-b-2 border-white focus:outline-none focus:ring-0 placeholder-gray-400"
              required
            ></textarea>
          </div>

          {/* Success Message */}
          {messageSent && (
            <p className="text-green-400 text-center">
              Message sent successfully! 🎉
            </p>
          )}

          {/* Submit Button */}
          <div className="text-center pb-4">
            <button
              type="submit"
              className="px-10 py-3  bg-[#e50914] text-white font-semibold rounded-lg shadow-md transition-all duration-200"
            >
              Shoot →
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Icons */}
      <div>
        <h4 className="text-center">Or You can also contact me at</h4>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-white hover:text-blue-700 transition-colors duration-300" // LinkedIn blue
            href="https://www.linkedin.com/in/manish-kumar-mandrai/"
          >
            <CiLinkedin className="w-6.5 h-6.5 md:w-8 md:h-8" />{" "}
            {/* Reduced size to 80% */}
          </a>
          <a
            href="https://x.com/ManishKumar3114?t=FqKTO6rQ9LfDA2gsHWiwaQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#000000]" // Twitter (X) black
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
