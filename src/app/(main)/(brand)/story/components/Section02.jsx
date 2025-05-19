"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Section02() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="w-[96%] pt-[6%] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Image
          data-aos="zoom-in"
          data-aos-delay="100"
          src={"/images/story/brand1-sym.png"}
          width={440}
          height={136}
          alt="삼송빵집"
        />
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[33px] text-[26px] text-[#222] font-normal leading-[36px] text-center"
        >
          대구 최고의 브랜드이자 60~70년대 대구 빵집의 전성기를 열었고
          <br />
          3대를 이어 현재에도 시장을 선도하는 대구 대표 베이커리 브랜드 삼송빵집입니다.
        </h2>
      </div>

      {/* 1957년 삼송제과 */}
      <div className="my-[100px] flex">
        <div
          data-aos="flip-left"
          data-aos-delay="300"
          className="w-[50%] h-[434px] relative before:content-[''] before:w-[270px] before:h-[170px] before:bg-[#f5b335] before:absolute before:right-[-3%] before:top-[-20px] before:z-[-1]"
        >
          <Image src="/images/story/brand1-img1.png" fill alt="1957 삼송제과" />
        </div>
        <div className="w-[50%] pb-[5%] pl-[5%] relative table">
          <p className="text-[170px] text-[#f1efef] leading-[170px] absolute right-0 top-0 z-[-1] font-['Cafe24Decobox'] font-black">
            1957
          </p>
          <ul className="table-cell align-bottom">
            <li data-aos="fade-up" data-aos-delay="400" className="text-[30px] font-semibold text-[#222]">
              1957년 삼송제과
            </li>
            <li data-aos="fade-up" data-aos-delay="400" className="pt-[18px] text-[#686868] leading-[28px] text-[18px]">
              남문시장에 '삼송제과'로 시작하여 3대를 이어오며 <br /> 대구를 대표하는 추억과 역사의 빵집입니다.
            </li>
          </ul>
        </div>
      </div>

      {/* 고로케 */}
      <div className="my-[100px] flex">
        <div className="w-[50%] pb-[5%] pr-[5%] relative table">
          <p className="text-[170px] text-[#f1efef] leading-[170px] absolute right-[5%] bottom-[-25px] z-[-1] font-['Cafe24Decobox'] font-black">
            2008
          </p>
          <ul className="table-cell">
            <li data-aos="fade-up" data-aos-delay="600" className="text-[30px] font-semibold text-[#222]">
              2008년 오븐에 구운 고로케
            </li>
            <li data-aos="fade-up" data-aos-delay="600" className="pt-[18px] text-[#686868] leading-[28px] text-[18px]">
              끊임없는 제품 개발로 국내 최초로 구운 고로케를 개발하여 <br /> 월빙 시대를 선도했습니다.
            </li>
          </ul>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="500"
          className="w-[50%] h-[434px] relative before:content-[''] before:w-[270px] before:h-[170px] before:bg-[#f5b335] before:absolute before:left-[-3%] before:top-[-20px] before:z-[-1]"
        >
          <Image src="/images/story/brand1-img2.png" fill alt="1957 삼송제과" />
        </div>
      </div>

      {/* 통옥수수빵 */}
      <div className="my-[100px] flex">
        <div
          data-aos="flip-left"
          data-aos-delay="700"
          className="w-[50%] h-[434px] relative before:content-[''] before:w-[270px] before:h-[170px] before:bg-[#f5b335] before:absolute before:right-[-3%] before:top-[-20px] before:z-[-1]"
        >
          <Image src="/images/story/brand1-img3.png" fill alt="1957 삼송제과" />
        </div>
        <div className="w-[50%] pb-[5%] pl-[5%] relative table">
          <p className="text-[170px] text-[#f1efef] leading-[170px] absolute right-0 top-0 z-[-1] font-['Cafe24Decobox'] font-black">
            2009
          </p>
          <ul className="table-cell align-bottom">
            <li data-aos="fade-up" data-aos-delay="800" className="text-[30px] font-semibold text-[#222]">
              2009 통옥수수빵 출시
            </li>
            <li data-aos="fade-up" data-aos-delay="800" className="pt-[18px] text-[#686868] leading-[28px] text-[18px]">
              2009년 개발된 새로운 맛과 형태의 통옥수수빵은 <br /> 선풍적인 인기로 일명 '마약빵' 시대를 열었습니다.
            </li>
          </ul>
        </div>
      </div>

      {/* 삼송 BNC */}
      <div className="my-[100px] flex">
        <div className="w-[50%] pb-[5%] pr-[5%] relative table">
          <p className="text-[170px] text-[#f1efef] leading-[170px] absolute right-[5%] bottom-[-25px] z-[-1] font-['Cafe24Decobox'] font-black">
            2015
          </p>
          <ul className="table-cell">
            <li data-aos="fade-up" data-aos-delay="1000" className="text-[30px] font-semibold text-[#222]">
              2015년 (주)삼송BNC
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1000"
              className="pt-[18px] text-[#686868] leading-[28px] text-[18px]"
            >
              (주)삼송비엔씨의 설립으로 '줄 서서 먹는 빵집', <br /> '마약옥수수빵'의 이야기는 전국으로 퍼지고 있습니다.
            </li>
          </ul>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="900"
          className="w-[50%] h-[434px] relative before:content-[''] before:w-[270px] before:h-[170px] before:bg-[#f5b335] before:absolute before:left-[-3%] before:top-[-20px] before:z-[-1]"
        >
          <Image src="/images/story/brand1-img4_230607.jpg" fill alt="1957 삼송제과" />
        </div>
      </div>

      {/* 삼송빵집 가맹사업 전개 */}
      <div className="my-[100px] flex">
        <div
          data-aos="flip-left"
          data-aos-delay="1100"
          className="w-[50%] h-[434px] relative before:content-[''] before:w-[270px] before:h-[170px] before:bg-[#f5b335] before:absolute before:right-[-3%] before:top-[-20px] before:z-[-1]"
        >
          <Image src="/images/story/brand1-img5.png" fill alt="1957 삼송제과" />
        </div>
        <div className="w-[50%] pb-[5%] pl-[5%] relative table">
          <p className="text-[170px] text-[#f1efef] leading-[170px] absolute right-0 top-0 z-[-1] font-['Cafe24Decobox'] font-black">
            2022
          </p>
          <ul className="table-cell align-bottom">
            <li data-aos="fade-up" data-aos-delay="1200" className="text-[30px] font-semibold text-[#222]">
              2022년 삼송빵집 가맹사업 전개
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1200"
              className="pt-[18px] text-[#686868] leading-[28px] text-[18px]"
            >
              자동생산 공장 설립과 가맹사업으로 <br /> 더 많은 지역에서 고객들을 만나 볼 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
