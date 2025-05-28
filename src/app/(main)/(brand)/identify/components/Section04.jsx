"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Section04() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="pt-[150px] pb-[100px] my-[100px] flex flex-wrap items-center bg-[#fefbf5]">
      <div className="flex flex-wrap items-center w-[96%]">
        <article data-aos="zoom-in" data-aos-delay="300" className="w-[50%] text-center">
          <h3 className="text-[70px] text-[#512d1e] leading-[84px] font-medium">
            <span className="text-[#f5b335] font-extrabold">고객만족</span>
            &nbsp; 차별화
          </h3>
          <p className="mt-[27px] text-[18px] leading-[25px]">
            "맛있고 건강한 빵"이라는 기본 원칙을 철저히 고수한 결과 <br /> 소비자의 만족과 신뢰를 모두 얻었습니다.
          </p>
          <h4>
            <span className="mt-[50px] mb-[30px] px-[50px] py-[15px] inline-block text-[30px] text-white bg-[#512d1e] leading-[36px] font-medium rounded-[60px]">
              모든 고객이 만족하는 고객신뢰추구
            </span>
          </h4>
          <ul className="inline-block text-left">
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">
                가성비 만족도 100%, 따뜻한 빵, 신선한 빵, 아이에게 먹이고 싶은 빵
              </p>
            </li>
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">SNS를 통하여 전파되는 줄서서 먹는 빵집 이야기</p>
            </li>
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">캐릭터, 애니메이션, 이벤트 등 다양한 매체로 고객과 소통</p>
            </li>
            <li className="px-[5px] pb-[5px] mb-[15px] border-b-[1px] border-dashed border-[#e9e9e9] relative before:w-[3px] before:h-[3px] before:rounded-[5px] before:absolute before:left-0 before:top-[11px] before:bg-[#222]">
              <p className="text-xl text-[#222] pl-[10px]">
                멤버쉽 서비스로 포인트 적립 및 할인혜택 부여, 전국적인 서비스 확대
              </p>
            </li>
          </ul>
          <Image
            src={"/images/identity/brand6-img2-2.png"}
            width={583}
            height={0}
            alt="brand6-img2-2"
            className="pt-[40px] mx-auto"
          />
        </article>
        <article data-aos="fade-right" data-aos-delay="400" className="pl-[5%] w-[50%] relative">
          <Image src={"/images/identity/brand6-img2_230607.png"} width={600} height={0} alt="brand6-img2_230607" />
          <div className="max-w-[380px] bg-[length:100%_auto] bg-[url('/images/identity/num02.png')] right-0 absolute top-[-12%] w-[50%] h-[220px] bg-no-repeat z-10"></div>
        </article>
      </div>
    </section>
  );
}
