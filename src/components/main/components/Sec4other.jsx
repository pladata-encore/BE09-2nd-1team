"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import otherCardItems from "../data/Sec4product2";
import FlipCard from "./FlipCard";

export default function Sec4other() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={250}
        loop
        navigation={{
          nextEl: ".slide-button-next", // 다음 버튼
          prevEl: ".slide-button-prev", // 이전 버튼
        }}
        modules={[Navigation]}
        className="pb-[30px]"
      >
        {otherCardItems.map((item) => (
          <SwiperSlide key={item.id}>
            <FlipCard
              breadFrontImg={item.frontImgSrc}
              breadBackImg={item.backImgSrc || "/images/main/menu2-img1.png"} // back 이미지 없을 경우 기본값
              titleKo={item.title_ko}
              titleEn={item.title_en}
              backContent={item.backContent || "설명이 준비 중입니다."}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-[40px] cursor-pointer">
        <div className="bg-[url('/images/main/arrow_prev.png')] slide-button-prev h-[26px] w-[67px] border-r-1"></div>
        <div className="bg-[url('/images/main/arrow_next.png')] slide-button-next h-[26px] w-[67px]"></div>
      </div>
    </div>
  );
}