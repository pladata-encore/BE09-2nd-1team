"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Section03() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="pt-[100px] flex flex-wrap items-center w-[96%] mx-auto">
      <article data-aos="zoom-in" data-aos-delay="500" className="pl-[5%] w-[50%] relative">
        <Image src={"/images/identity/brand6-img1.png"} width={600} height={0} alt="brand6-img1" />
        <div className="max-w-[320px] bg-[length:100%_auto] bg-[url('/images/identity/num01.png')] left-0 absolute top-[-12%] w-[50%] h-[220px] bg-no-repeat"></div>
      </article>
      <article data-aos="fade-left" data-aos-delay="600" className="w-[50%] text-center">
        <h3 className="text-[70px] text-[#512d1e] leading-[84px] font-medium">
          <span className="text-[#f5b335] font-extrabold">고객만족</span>
          &nbsp; 차별화
        </h3>
        <p className="mt-[27px] text-[18px] leading-[25px]">
          건강하고 맛있는 빵의 원칙 아래 매달 새로운 제품을 개발하고 <br />그 중 철저한 내부검증을 통해 선발된 제품을
          출시하고 있습니다.
        </p>
        <h4>
          <span className="mt-[50px] mb-[30px] px-[50px] py-[15px] inline-block text-[30px] text-white bg-[#512d1e] leading-[36px] font-medium rounded-[60px]">
            60년간 이어온 전통과 끊임없는 신제품 개발
          </span>
        </h4>
        <ul className="inline-block text-left">
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">국내 독점 아이템 개발 및 특허권 확보</p>
          </li>
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">신선한 재료만을 아끼지 않고 넣어 만든 알찬 상품</p>
          </li>
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">천연당, 신소재활용한 제품 개발의 끊임없는 R&D</p>
          </li>
        </ul>
        <Image
          src={"/images/identity/brand6-img1-2_230616.png"}
          width={583}
          height={0}
          alt="brand6-img1-2_230616"
          className="pt-[40px] mx-auto"
        />
      </article>
    </section>
  );
}
