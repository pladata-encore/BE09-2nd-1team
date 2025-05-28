"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Section05() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="pt-[100px] flex flex-wrap items-center w-[96%] mx-auto">
      <article data-aos="zoom-in" data-aos-delay="100" className="pl-[5%] w-[50%] relative">
        <Image src={"/images/identity/brand6-img3.png"} width={600} height={0} alt="brand6-img3" />
        <div className="max-w-[380px] bg-[length:100%_auto] bg-[url('/images/identity/num03.png')] left-0 absolute top-[-12%] w-[50%] h-[220px] bg-no-repeat"></div>
      </article>
      <article data-aos="fade-left" data-aos-delay="200" className="w-[50%] text-center">
        <h3 className="text-[70px] text-[#512d1e] leading-[84px] font-medium">
          <span className="text-[#f5b335] font-extrabold">운영</span>
          &nbsp; 차별화
        </h3>
        <p className="mt-[27px] text-[18px] leading-[25px]">
          매일, 매시간 갓 구운 빵을 전하기 위해 <br /> 판매공간보다 넓은 제빵공간과 다수의 숙련된 제빵사를 중심으로
          운영됩니다.
        </p>
        <h4>
          <span className="mt-[50px] mb-[30px] px-[50px] py-[15px] inline-block text-[29px] text-white bg-[#512d1e] leading-[36px] font-medium rounded-[60px]">
            삼송빵집 방식 그대로, 전국 각 매장의 수작업 생산
          </span>
        </h4>
        <ul className="inline-block text-left">
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">직원채용→관리까지 본사 경영/현장 교육 실시</p>
          </li>
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">신입직원교육(필수 7일 이상)</p>
          </li>
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">정기 제빵 교육(분기별) 실시</p>
          </li>
          <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
            <p className="text-xl text-[#222] pl-[10px]">매 시간 새 빵을 만드는 소량 다빈도 제조</p>
          </li>
        </ul>
        <Image
          src={"/images/identity/brand6-img3-2.png"}
          width={583}
          height={0}
          alt="brand6-img3-2"
          className="pt-[40px] mx-auto"
        />
      </article>
    </section>
  );
}
