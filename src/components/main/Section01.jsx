"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, EffectFade, Pagination]);

export default function Section01() {
  const slideItems = [
    {
      id: 1,
      imgSrc: "/images/main/m_visual1.jpg",
      imgAlt: "메인슬라이드-1",
    },
    {
      id: 2,
      imgSrc: "/images/main/m_visual2.jpg",
      imgAlt: "메인슬라이드-1",
    },
  ];

  return (
    <section className="relative flex items-center h-screen">
      <div className="w-full h-full">
        <Swiper
          effect="fade"
          speed={3000}
          loop={true}
          followFinger={false}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="w-full h-full"
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <Image src={item.imgSrc} alt={item.imgAlt} fill className="object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-10 top-[15%] left-[5%] w-[1300px] h-[300px] text-white font-black leading-[150px]">
          <p className="text-[150px] select-none text-shadow-soft font-['Cafe24Decobox']">
            SINCE <br /> 1957
          </p>
        </div>

        {/* 커스텀 페이지네이션 영역 */}
        <div className="absolute z-10 swiper-pagination bottom-10 left-1/2" />
      </div>
    </section>
  );
}
