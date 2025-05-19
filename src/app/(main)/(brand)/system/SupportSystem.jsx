"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function CertificateSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-cubic", // ✔️ 더 부드러운 이징
      once: false,
      mirror: true,
    });

    const refreshOnScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", refreshOnScroll);

    return () => {
      window.removeEventListener("scroll", refreshOnScroll);
    };
  }, []);
  const certificates = [
    {
      src: "/images/system_images/supprot_factory.png",
      alt: "R&D  기술연구소",
      caption: "R&D 기술연구소",
    },
    {
      src: "/images/system_images/supprot_eduservice.png",
      alt: "정기 서비스 교육",
      caption: "정기 서비스 교육",
    },
    {
      src: "/images/system_images/support_edu.png",
      alt: "정기 제빵 교육",
      caption: "정기 제빵 교육",
    },
    {
      src: "/images/system_images/support_event.png",
      alt: "시즌이벤트 지원",
      caption: "시즌이벤트 지원",
    },
    {
      src: "/images/system_images/support_cusumer.png",
      alt: "고객 만족도 조사사",
      caption: "고객 만족도 조사",
    },
  ];

  return (
    <section
      id="brand4-2-s-Margin-s-Part"
      className="relative flex justify-center w-full"
      style={{
        maxWidth: "1920px",
        height: "670.78px",
        padding: "50px 0 10px 0", // 줄임
        fontFamily: `'Pretendard', 'Noto Sans KR', sans-serif`,
        margin: "0 auto",
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full px-6 text-white mt-50 center max-w-8xl">
        <h2 className="text-5xl text-black mb-7 -mt-70" data-aos="fade-up">
          지원 시스템
        </h2>
        <p
          className="max-w-4xl mx-auto mb-20 text-black text-[18px]"
          data-aos="fade-up"
        >
          공인된 제품 우수성과 탄탄한 기술력은 물론 종합 베이커리 운영 인프라와
          노하우를 시스템화하였습니다.
        </p>

        <div className="flex flex-row items-center gap-3">
          {certificates.map(({ src, alt, caption }, idx) => (
            <div key={idx} className="flex flex-col items-center max-w-[400px]"data-aos="zoom-in">
              <img
                src={src}
                alt={alt}
                className="w-[260px] h-[260px] object-cover rounded-full shadow-lg"
              />
              <p className="mt-2 text-2xl font-bold text-black">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
