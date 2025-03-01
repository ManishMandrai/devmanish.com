import { useState, useEffect } from "react";

const texts = ["Full Stack Dev", "UI/UX Designer", "Software Engineer"];

const TextChange = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const speed = isDeleting ? 50 : 100; // Typing and deleting speed

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      
      if (!isDeleting) {
        // Typing effect
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting effect
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // Move to the next word
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index]);

  return (
    <span>{text}|</span>
  );
};

export default TextChange;
