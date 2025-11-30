import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MediaCarousel({ media = [] }) {
  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtube")) return u.searchParams.get("v");
      if (u.hostname === "youtu.be") return u.pathname.slice(1);
      return "";
    } catch {
      return "";
    }
  };

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={12}
      slidesPerView={1}
      className="rounded-xl overflow-hidden"
    >
      {media.map((m, i) => {
        return (
          <SwiperSlide key={i}>
            {/* ✨ Unified 16:9 container for ALL slides */}
            <div className="w-full aspect-video bg-neutral-200 rounded-xl overflow-hidden">
              {/* Video */}
              {m.type === "video" ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getYoutubeId(m.url)}?rel=0&modestbranding=1`}
                  allowFullScreen
                />
              ) : (
                /* Image */
                <img
                  src={m.url}
                  alt="slide"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
