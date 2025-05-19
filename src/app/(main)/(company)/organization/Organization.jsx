"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Organization({ src, alt }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* 상단 이미지 영역 */}
      <div className="relative w-full h-[580px] overflow-hidden bg-gray-900">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="조직도 페이지"
          className="object-cover w-full h-[580px] "
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <span
            className="text-[60px] font-bold text-white mt-30 drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            조직도
          </span>
        </div>
      </div>

      {/* 조직도 이미지 */}
      <section className="p-8 bg-white intro-animation">
        <div className="relative flex justify-center w-full overflow-hidden bg-white mt-30">
          <img
            src="/images/greeting/intro4-img_230627.png"
            alt=""
            className="object-contain w-auto w-[1135px] h-[724px] "
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
      </section>
    </>
  );
}
