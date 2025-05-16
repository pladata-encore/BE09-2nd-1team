"use client"


import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CertificateSection() {
  useEffect(() => {
      AOS.init({
         duration: 2000, // ✔️ 1000 → 1500 으로 부드럽게
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
    { src: "/images/system_images/document1.png", alt: "상표 등록 1", caption: "상표 등록" },
    { src: "/images/system_images/document2.png", alt: "상표 등록 2", caption: "상표 등록" },
    { src: "/images/system_images/document3.png", alt: "상표 등록 3", caption: "상표 등록" },
    { src: "/images/system_images/document4.png", alt: "통옥수수빵 제조법", caption: "통옥수수빵 제조법" },
    { src: "/images/system_images/document5.png", alt: "구운 고로케 제조법", caption: "구운 고로케 제조법" },
  ];

  return (
    <section
      id="brand4-2-s-Margin-s-Part"
      className="relative flex justify-center w-full"
      style={{
        maxWidth: "1920px",
        height: "787.78px",
        backgroundColor: "#686868",
        padding: "100px 0",
        fontFamily: `'Pretendard', 'Noto Sans KR', sans-serif`,
        margin: "0 auto",
      }}
    >
      {/* 배경 이미지 - img 태그 사용 */}
      <img
        src="/images/system_images/documentbanner.png"
        alt="배경 이미지"
        className="absolute inset-0 object-cover w-full h-full "
        style={{ top: 0, left: 0 }}
      />

      {/* 내용물 */}
      <div className="relative flex flex-col items-center justify-center w-full px-6 text-center text-white max-w-8xl"data-aos ="fade-up">
        <h2 className="text-5xl font-bold mb-7">지적재산권 및 특허권</h2>
        <p className="max-w-2xl mx-auto mb-12 text-1xl">
          공인된 제품우수성과 탄탄한 기술력은 물론 종합 베이커리 운영 인프라와 노하우를 시스템화하였습니다.
        </p>

        {/* 인증서 이미지 리스트 가로 스택 */}
        <div className="flex flex-row items-center gap-3"data-aos="fade-up">
          {certificates.map(({ src, alt, caption }, idx) => (
            <div key={idx} className="flex flex-col items-center max-w-[264px]">
              <img src={src} alt={alt} className="w-[264px] h-[373px] rounded shadow-lg" />
              <p className="mt-2 text-2xl">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
