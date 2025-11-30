// src/components/MediaCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MediaCarousel({ media = [] }) {
  // helper: extract YouTube embed id
  const getYoutubeId = (url) => {
    try {
      if (!url) return null;
      const urlObj = new URL(url);
      if (urlObj.hostname.includes("youtube")) {
        return urlObj.searchParams.get("v");
      }
      // handle short youtu.be links
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      }
      return null;
    } catch {
      return null;
    }
  };

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={16}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {media.map((m, idx) => {
          if (m.type === "video") {
            const id = getYoutubeId(m.url);
            const src = id ? `https://www.youtube.com/embed/${id}?rel=0&showinfo=0` : m.url;
            return (
              <SwiperSlide key={idx}>
                <div className="w-full h-[420px] md:h-[500px] bg-black">
                  <iframe
                    className="w-full h-full"
                    src={src}
                    title={`video-${idx}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            );
          }

          // image
          return (
            <SwiperSlide key={idx}>
              <div className="w-full h-[420px] md:h-[500px] bg-gray-100 flex items-center justify-center">
                <img
                  src={m.url}
                  alt={`slide-${idx}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
