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

export default function Page() {
  const images = [
    "/images/(store)/main1.png", 
    "/images/(store)/main2.png",
    "/images/(store)/main3.png",
    "/images/(store)/main4.png",
    "/images/(store)/main5.png",
  ]

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {

    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0)
    }
  }, [thumbsSwiper])

  return (
    <>
      <Header />
      <HeroSection />

    
      <nav className="bg-[#5C2E14] text-white py-2 px-4 flex justify-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Home size={16} />
          <span>매장안내</span>
          <span className="mx-2">▼</span>
          <span className="font-bold">삼송빵집 본점</span>
        </div>
      </nav>

  
      <div className="max-w-screen-xl mx-auto px-4 py-6">
    
        <div className="w-full mb-8">
       
          <div className="relative w-full mb-4 overflow-hidden">
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
              <SwiperSlide key={index}>
                <div className="relative w-full h-20 cursor-pointer rounded overflow-hidden border hover:border-[#5C2E14]">
                  <Image src={src || "/placeholder.svg"} alt={`썸네일 ${index + 1}`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Store details - Full width */}
        <StoreDetailTable />
      </div>

      <StoreLocationSection />
      <Footer />
    </>
  )
}
