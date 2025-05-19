"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../style/rollingBadges.css";

export default function Section03() {
  // AOS 초기화
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="flex flex-col py-[100px] min-h-screen mx-[30px]">
      <div className="text-[#512d1e] leading-3">
        <p data-aos="fade-up" data-aos-delay="100" className="text-xl font-bold">
          꾸준히 사랑받고 있는 삼송 대표 메뉴
        </p>
        <h2 data-aos="fade-up" data-aos-delay="200" className="pt-[35px] text-6xl font-bold">
          <span className="text-7xl">통옥수수빵,</span>
          얼마나 팔릴까?
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="pt-[20px] font-semibold opacity-40">
          ※ 2017년 12월 기준
        </p>
      </div>
      <div className="relative text-center">
        <h2
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="mt-[15px] text-[150px] text-[#f5b335] font-black font-['Roboto'] leading-[1.2em] tracking-[-0.03em]
          before:bg-[url('/images/main/mpart2-bubble.png')]
          before:bg-contain before:bg-no-repeat
          before:absolute 
          before:animate-[bounce_2.5s_infinite]
          before:bottom-[90%]
          before:right-[5%]
          before:w-[145px]
          before:h-[145px]"
        >
          <span>11,500,000,000</span>
        </h2>
        <ul data-aos="fade-up" data-aos-delay="1500" className="flex justify-center pt-[30px]">
          <li className="p-[15px] text-[32px] text-[#512d1e] font-bold">
            일년에 <br className="hidden" />
            <span className="text-5xl font-['Roboto] font-black tracking-[-0.03em]">7,191,546</span>개
          </li>
          <li className="p-[15px] text-[32px] text-[#512d1e] font-bold">
            하루에 일년에 <br className="hidden" />
            <span className="text-5xl font-['Roboto] font-black tracking-[-0.03em]">19,702</span>개
          </li>
        </ul>
        <div className="flex justify-between">
          <ul id="left" className="flex justify-between gap-5">
            <li data-aos="zoom-in" data-aos-delay="1800" className="flex flex-col items-center">
              <Image src="/images/main/mpart2-icon1.png" alt="tower-img" width={150} height={140} />
              <div>
                <p
                  className="relative mt-[10px] mb-[25px] bg-[#512d1e] py-[0.7em] text-white px-[1.5em] rounded-[50px] font-normal
                before:content-[''] 
                before:absolute 
                before:top-full 
                before:left-1/2 
                before:-translate-x-1/2 
                before:border-8 
                before:border-solid 
                before:border-t-[#512d1e] 
                before:border-x-transparent 
                before:border-b-0 
                before:w-0 
                before:h-0"
                >
                  일간 제품 판매량
                </p>
                <p className="text-2xl text-[#512d1e] font-bold">63빌딩 7개 높이</p>
              </div>
            </li>
            <li data-aos="zoom-in" data-aos-delay="1900" className="flex flex-col items-center">
              <Image src="/images/main/mpart2-icon2.png" alt="ground-img" width={150} height={140} />
              <div>
                <p
                  className="relative mt-[10px] mb-[25px] bg-[#512d1e] py-[0.7em] text-white px-[1.5em] rounded-[50px] font-normal
                before:content-[''] 
                before:absolute 
                before:top-full 
                before:left-1/2 
                before:-translate-x-1/2 
                before:border-8 
                before:border-solid 
                before:border-t-[#512d1e] 
                before:border-x-transparent 
                before:border-b-0 
                before:w-0 
                before:h-0"
                >
                  연간 옥수수 재배 면적
                </p>
                <p className="text-2xl text-[#512d1e] font-bold">야구장 5배 넓이</p>
              </div>
            </li>
          </ul>
          <ul id="right" className="flex justify-between gap-5">
            <li data-aos="zoom-in" data-aos-delay="2000" className="flex flex-col items-center">
              <Image src="/images/main/mpart2-icon3.png" alt="tower-img" width={150} height={140} />
              <div>
                <p
                  className="relative mt-[10px] mb-[25px] bg-[#512d1e] py-[0.7em] text-white px-[1.5em] rounded-[50px] font-normal
                before:content-[''] 
                before:absolute 
                before:top-full 
                before:left-1/2 
                before:-translate-x-1/2 
                before:border-8 
                before:border-solid 
                before:border-t-[#512d1e] 
                before:border-x-transparent 
                before:border-b-0 
                before:w-0 
                before:h-0"
                >
                  연간 밀가루 사용량
                </p>
                <p className="text-2xl text-[#512d1e] font-bold">지하철 3량 부피</p>
              </div>
            </li>
            <li data-aos="zoom-in" data-aos-delay="2100" className="flex flex-col items-center">
              <Image src="/images/main/mpart2-icon4.png" alt="ground-img" width={150} height={140} />
              <div>
                <p
                  className="relative mt-[10px] mb-[25px] bg-[#512d1e] py-[0.7em] text-white px-[1.5em] rounded-[50px] font-normal
                before:content-[''] 
                before:absolute 
                before:top-full 
                before:left-1/2 
                before:-translate-x-1/2 
                before:border-8 
                before:border-solid 
                before:border-t-[#512d1e] 
                before:border-x-transparent 
                before:border-b-0 
                before:w-0 
                before:h-0"
                >
                  연간 제품 판매량
                </p>
                <p className="text-2xl text-[#512d1e] font-bold">서울~부산 왕복</p>
              </div>
            </li>
          </ul>
          <div className="absolute bottom-0 left-[32%] z-20">
            <Image src={"/images/main/mpart2-img.png"} width={526} height={262} alt="옥수수빵" />
          </div>
        </div>
        <div className="absolute bottom-[-100px] left-[-3%] bg-[#f5b335] leading-[50px]">
          <ul className="flex overflow-hidden animate-infinite-scroll whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <li key={i} className="px-4">
                <span className="text-[28px] font-['Cafe24Decobox'] text-[#ffdb8e] py-[15px]">
                  How many flaked corn breads are sold?
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
