"use client";

import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import StoreLocationSection from "../samgsong-1957/components/StoreLocationSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroSection from "./components/HeroSection";
import StoreDetailTable from "./components/StoreDetailTable";

export default function Page() {
  const images = [
    "/images/(store)/main1.png",
    "/images/(store)/main2.png",
    "/images/(store)/main3.png",
    "/images/(store)/main4.png",
    "/images/(store)/main5.png",
  ];

  return (
    <>
      <Header />
      <HeroSection />

      {/* Breadcrumb */}
      <nav className="bg-[#5C2E14] text-white py-2 px-4 flex justify-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>🏠</span>
          <span>매장안내</span>
          <span className="mx-2">▼</span>
          <span className="font-bold">삼송빵집 본점</span>
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-screen-lg px-4 py-6 mx-auto">
       
        <div className="relative w-full mb-6 overflow-hidden rounded-md">
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-video">
                  <Image
                    src={src}
                    alt={`삼송빵집 본점 이미지 ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      <StoreDetailTable />

      </main>

      <StoreLocationSection />
      <Footer />
    </>
  );
}
