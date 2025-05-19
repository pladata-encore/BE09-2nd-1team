"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import StoreLocationSection from "../samgsong-1957/components/StoreLocationSection"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import HeroSection from "./components/HeroSection"
import StoreDetailTable from "./components/StoreDetailTable"
import { Home } from "lucide-react"

import AOS from "aos";
import "aos/dist/aos.css";


export default function Page() {
  const images = [
    "/images/(store)/main1.png", 
    "/images/(store)/main2.png",
    "/images/(store)/main3.png",
    "/images/(store)/main4.png",
    "/images/(store)/main5.png",
  ]

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    AOS.init({ once: true }); // AOS 초기화
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0);
    }
  }, [thumbsSwiper]);

  useEffect(() => {

    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0)
    }
  }, [thumbsSwiper])

  return (
    <>
      <Header />
      <HeroSection />

    
      
        <div className="flex items-center text-sm font-medium">
        </div>
      
  
      <div className="max-w-screen-xl px-4 mx-auto py-30">
    
        <div
            className="w-full mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
       
          <div className="relative w-auto mb-5 overflow-hidden">
            <Swiper
              navigation
              modules={[Navigation, Thumbs]}
              spaceBetween={10}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
              initialSlide={0}
              className="rounded-md"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative w-full"
                    style={{ height: "calc(100vw * 0.5)", maxHeight: "600px", minHeight: "300px" }}
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`삼송빵집 본점 이미지 ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0} // Add priority to first image
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnail slider */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
            initialSlide={0}
            className="mb-10"
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="px-1">
                <div className="relative w-full h-20 cursor-pointer rounded overflow-hidden border hover:border-[#5C2E14] ">
                  <Image src={src || "/placeholder.svg"} alt={`썸네일 ${index + 1}`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        {/* Store details - Full width */}
        <StoreDetailTable />
      </div>

      <StoreLocationSection />
    
    </>
  )
}
