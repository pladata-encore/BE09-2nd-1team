"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Section06() {
  return (
    <section className="pt-[150px] pb-[100px] my-[100px] flex flex-wrap items-center bg-[#fefbf5]">
      <div className="flex flex-wrap items-center w-[96%]">
        <article data-aos="zoom-in" data-aos-delay="700" className="w-[50%] text-center">
          <h3 className="text-[70px] text-[#512d1e] leading-[84px] font-medium">
            <span className="text-[#f5b335] font-extrabold">나눔</span>
            &nbsp; 차별화
          </h3>
          <p className="mt-[27px] text-[18px] leading-[25px]">
            공익 TV 프로그램 후원과 학교 공기관, 기업 그리고 어려운 이웃 등 <br />
            지역민에게 꾸준한 CSR활동을 위한 삼송 나누리 프로젝트를 진행하고 있습니다.
          </p>
          <h4>
            <span className="mt-[50px] mb-[30px] px-[50px] py-[15px] inline-block text-[30px] text-white bg-[#512d1e] leading-[36px] font-medium rounded-[60px]">
              안정적 성장 및 이익 사회 환원의 착한 기업
            </span>
          </h4>
          <ul className="inline-block text-left">
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">지역별 제한으로 대구의 대표 빵집이라는 브랜드 희소성 고수</p>
            </li>
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">지역밀착형 점포 운영으로 매장 내실 집중화</p>
            </li>
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">사회환원 및 이익 기여 활동 지역과 함께 전개</p>
            </li>
          </ul>
          <Image
            src={"/images/identity/brand6-img4-2_230607.png"}
            width={583}
            height={0}
            alt="brand6-img4-2_230607"
            className="pt-[40px] mx-auto"
          />
        </article>
        <article data-aos="fade-right" data-aos-delay="800" className="pl-[5%] w-[50%] relative">
          <Image src={"/images/identity/brand6-img4.png"} width={600} height={0} alt="brand6-img4" />
          <div className="max-w-[390px] bg-[length:100%_auto] bg-[url('/images/identity/num04.png')] right-0 absolute top-[-12%] w-[50%] h-[220px] bg-no-repeat z-10"></div>
        </article>
      </div>
    </section>
  );
}
