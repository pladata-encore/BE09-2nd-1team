"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Aos from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Autoplay, EffectFade, Pagination]);

export default function Section01() {
  // 슬라이드 이미지
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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative flex items-center h-screen">
      <div className="w-full h-full">
        <Swiper
          effect="fade"
          speed={3000}
          loop
          followFinger={false}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
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

        {/* 텍스트 콘텐츠 */}
        <div className="absolute z-10 top-[15%] left-[5%] w-[92%] h-[300px] select-none text-white font-black leading-[150px]">
          <p data-aos="fade-left" data-aos-delay="100" className="text-[150px] text-shadow-soft font-['Cafe24Decobox']">
            SINCE <br /> 1957
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[35px] my-[35px] leading-[42px] tracking-[0.03em] font-bold"
          >
            1967년부터 고수한 전통방식 그대로,
          </p>
          <p data-aos="fade-left" data-aos-delay="300" className="text-[20px] leading-[32px] tracking-[0.6px]">
            긴 업력 동안 쌓인 제과 제빵 기술과 전통의 가치를 지키며
            <br />
            3대를 이어 현재에도 시장을 선도하고 있는 삼송빵집
          </p>
        </div>

        {/* 커스텀 페이지네이션 영역 */}
        <div className="absolute z-10 swiper-pagination bottom-10 left-1/2" />
      </div>
    </section>
  );
}
