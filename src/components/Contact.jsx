import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(() => {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 3000);
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 text-left">
        Let’s build something great together
      </h2>
      <p className="text-left text-[var(--text-primary)] opacity-70 mb-8 leading-relaxed max-w-lg">
        Whether you have a project idea, want to collaborate, or simply want to
        say hello — drop a message. I read everything.
      </p>

      {/* Form */}
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="to_name"
            placeholder="Your full name"
            className="
              w-full p-4 rounded-lg
              border border-[var(--btn-border)]
              bg-[var(--btn-bg)] backdrop-blur-md
              text-[var(--text-primary)]
              shadow-sm hover:shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-0
              placeholder-gray-400
            "
            required
          />

          <input
            type="email"
            name="your_Email"
            placeholder="you@example.com"
            className="
              w-full p-4 rounded
              border border-[var(--btn-border)]
              bg-[var(--btn-bg)] backdrop-blur-md
              text-[var(--text-primary)]
              shadow-sm hover:shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-0
              placeholder-gray-400
            "
            required
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="What’s this message about?"
          className="
            w-full p-4 rounded
            border border-[var(--btn-border)]
            bg-[var(--btn-bg)] backdrop-blur-md
            text-[var(--text-primary)]
            shadow-sm hover:shadow-md
            transition-all duration-200
            focus:outline-none focus:ring-0
            placeholder-gray-400
          "
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Write your message here..."
          className="
            w-full p-4 rounded
            border border-[var(--btn-border)]
            bg-[var(--btn-bg)] backdrop-blur-md
            text-[var(--text-primary)]
            shadow-sm hover:shadow-md
            transition-all duration-200
            focus:outline-none focus:ring-0
            placeholder-gray-400
          "
          required
        ></textarea>

        {/* Success */}
        {sent && (
          <p className="text-green-400 text-sm text-left font-medium">
            Your message has been delivered successfully! 🚀
          </p>
        )}

        <div className="flex justify-end">
          {/* Button */}
          <button
            type="submit"
            className="
            px-16 py-3 rounded cursor-pointer
            bg-[#e50914] text-white font-semibold
            shadow-md hover:shadow-lg
            transition-all duration-200
            "
          >
            Send Message →
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
