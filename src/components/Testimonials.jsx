import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Img from "../assets/erth.png";

const testimonials = [
  {
    id: 1,
    name: "Sukoshal Jain",
    position: "Co-Founder",
    company: "My APP Broker",
    image: Img,
    testimonial:
      "Manish did an amazing job on our website! The design is sleek, the performance is fast, and everything works flawlessly. He was super responsive and made all the changes we requested quickly. Highly recommend for any web development needs!",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-8 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
              <div className="bg-[url('/wood-texture.jpg')] bg-cover bg-center text-white p-4 rounded-lg shadow-md mt-4 w-full">
                <p className="text-md font-medium">{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
