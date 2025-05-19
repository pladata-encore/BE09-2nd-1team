"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection(){

  useEffect(()=>{
    AOS.init({
      duration :600,
      offset:120,
      delay:100,
      easing:"ease-out-quad",
      once:false,
    });
  },[]);

    return(
        <>
          {/* 히어로 섹션 */}
      <section className="relative h-[580px] w-full">
        <div className="absolute inset-0">
          <img src="/images/(store)/s_1957.jpg" alt="삼송빵집 매장 이미지" className="object-cover w-full h-full" />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold tracking-wider text-white md:text-7xl"
              data-aos="fade-up"
              data-aos-delay="300"
              >SAMSONG 1957</h1>
        </div>
      </section>


      {/* 소개 섹션 */}
      <section className="py-33 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-8"
               data-aos="flip-left"
               data-aos-delay="200">
             <img
                src="/icons/(store)/brand5-s1957.png"
                alt="SAMSONG 1957 로고"
                className="w-auto h-47" 
              />
              </div>
            <p className="mb-20 text-xl text-center text-black"
                data-aos="fade-up"
                data-aos-dalay="400">
              SAMSONG 1957은 삼송빵집 60년 업력의 노하우를 집대성한 브랜드로<br />
              토탈 베이커리를 지향하며 다양한 종류의 제과 제빵 제품을 다루고 있습니다.
            </p>
          </div>
      </section>
        </>
    );
}

