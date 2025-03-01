import React, { useState, useEffect } from "react";
import testimonialsData from "../data/Testimonial.json";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className="text-white p-4 min-h-screen mx-auto">
      <div className="text-center">
        <h2 className="font-bold sm:text-center mb-12">
          Stories from those I've worked with
        </h2>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border-2 border-white/50 p-4 rounded-lg shadow-xl max-w-lg w-full"
          >
            <div className="flex justify-center mb-6">
              <img
                className="h-32 w-32 rounded-full border-2"
                src={testimonial.image}
                alt={testimonial.name}
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold ">{testimonial.company}</h3>
              <h4 className=" text-gray-200">
                {testimonial.name}{" "}
                <span className="text-sm text-gray-400">
                  {testimonial.position}
                </span>
              </h4>
              <p className="mt-4 text-gray-300 italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
