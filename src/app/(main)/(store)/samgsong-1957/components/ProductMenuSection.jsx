"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductMenuSection(){

    useEffect(() => {
        AOS.init({
          duration: 600,
          offset: 120,
          delay: 100,
          easing: "ease-out-quad",
          once: false,
        });
      }, []);

    return(
        <>

     {/* 상단 소개 3블럭 */}
      <section className="bg-white">
      <div className="grid grid-cols-1 text-center text-white md:grid-cols-3">
        <div className="bg-[#a36b3d] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="200">토탈베이커리</h3>
          <p className="text-xl" 
             data-aos="zoom-in"
             data-aos-delay="200">제과 제빵 거의 대부분의 제품군을 제공하며 음료와 식사까지 연계한 브랜드 경험 제공</p>
        </div>
        <div className="bg-[#6e3b1e] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="400">60년 노하우</h3>
          <p className="text-xl"
             data-aos="zoom-in"
             data-aos-delay="400">긴 업력 동안 쌓인 제과 제빵 기술, 인력, 설비를 한 곳에 모은 브랜드</p>
        </div>
        <div className="bg-[#3b2a15] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="600">랜드마크</h3>
          <p className="text-xl"
             data-aos="zoom-in"
             data-aos-delay="600">매장, 제품, 서비스 모든 면에서 우수한 품질과 규모로 지역을 대표하는 장소로 자리 매김</p>
        </div>
      </div>
      </section>

     {/* 제품 카테고리 */}
   
        <section className="py-16 bg-white">
        <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-16 text-center" data-aos="fade-left" data-aos-delay="200">
            <h2 className="mb-2 text-3xl font-bold">SAMSONG 1957</h2>
            <h3 className="text-5xl font-bold text-[#333]" data-aos="fade-left" data-aos-delay="400">MENU</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {[
                {
                img: "/icons/(store)/cookie-icon1.png",
                alt: "과자빵",
                title: "과자빵",
                desc: "기존 삼송빵집 판매 제품 외에도 40종 이상의 단과자류 상품을 개발하여 제공합니다",
                },
                {
                img: "/icons/(store)/bread-icon2.png",
                alt: "식사빵",
                title: "식사빵",
                desc: '브랑스 제과 제빵 명품 장인 브랜드인 "BONGARD"의 장비를 사용하여 정통 유럽식 제품을 선보입니다',
                },
                {
                img: "/icons/(store)/cake-icon3.png",
                alt: "케이크, 디저트",
                title: "케이크, 디저트",
                desc: "차와 함께하는 디저트류에서 주문제작형 홀케이크까지 시즌에 맞춘 다양한 상품을 제공합니다",
                },
                {
                img: "/icons/(store)/branch-icon4.png",
                alt: "브런치",
                title: "브런치",
                desc: "검증된 베이커리 제품을 중심으로 눈과 입이 즐거운 한끼를 제공합니다",
                },
                {
                img: "/icons/(store)/gift-icon6.png",
                alt: "선물세트",
                title: "선물세트",
                desc: "삼송이 개발한 원두, 파운드, 쿠키 등 다양한 제품 구성으로 1957만의 선물세트를 선보입니다",
                },
                {
                img: "/icons/(store)/drink-icon5.png",
                alt: "음료",
                title: "음료",
                desc: "까다로운 원료선정과 1957만의 레시피로 빵과 가장 조화로운 음료를 제공합니다",
                },
            ].map((item, index) => (
                <div
                key={index}
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={800 + index * 200} // 순차적으로 800, 1000, 1200, ...
                >
                <img src={item.img} alt={item.alt} className="w-24 h-24 mb-6" />
                <h3 className="mb-4 text-4xl font-semibold">{item.title}</h3>
                <p className="max-w-xs mx-auto text-xl text-gray-500">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        </>
    )
}