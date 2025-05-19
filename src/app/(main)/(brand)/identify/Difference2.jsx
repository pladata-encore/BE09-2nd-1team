"use client"

import React,{useEffect} from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Identify() {
  useEffect(() => {
      Aos.init();
    }, []);
  return (
    <div className="relative text-gray-800 bg-[#fefbf5] w-[2258.82px] h-[1058.99px]">
      {/* 우측 상단 겹치는 이미지 (좌우 반전 → 오른쪽으로 이동) */}
      <img
        src="/images/identi_images/num02.png"
        alt="장식 이미지"
        className="absolute top-10 right-70 w-[380px] h-[220px] z-10"
      data-aos = "zoom-in" data-aos-delay="100"/>

      {/* Logo Section */}
      <div className="relative z-0 flex justify-center gap-10 p-16 mt-20">
        {/* 텍스트 및 로고2 박스 (왼쪽으로 이동) */}
        <div className="w-[800px] h-[809px] flex flex-col items-center justify-center p-6"data-aos = "fade-right" data-aos-delay="100">
          <div className="flex flex-col items-center text-center">
            <p className="mb-6 text-[70px] leading-none">
              <span className="font-extrabold text-yellow-500">고객만족</span>
              차별화
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mb-6 max-w-[600px]">
              "맛있고 건강한 빵"이라는 기본 원칙을 철저히 고수한 결과
              <br />
              소비자의 만족과 신뢰를 모두 얻었습니다.
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-[507.47px] h-[66px] bg-[#4b2d1e] text-white rounded-full text-[30px] font-semibold whitespace-nowrap flex items-center justify-center">
                모든 고객이 만족하는 고객신뢰추구
              </div>
            </div>

            <ul className="max-w-[600px] space-y-4 text-[20px]  text-left text-gray-700 list-disc pl-5">
              <li>
                가성비 만족도 100%, 따뜻한 빵, 신선한 빵, 아이에게 먹이고 싶은
                빵
              </li>
              <li>SNS를 통하여 전파되는 줄서서 먹는 빵집 이야기</li>
              <li>캐릭터, 애니메이션, 이벤트 등 다양한 매체로 고객과 소통</li>
              <li>
                멤버쉽 서비스로 포인트 적립 및 할인혜택 부여, 전국적인 서비스
                확대
              </li>
            </ul>
          </div>

          {/* 로고 2 이미지 */}
          <div className="mt-15 h-[250px] w-full flex items-center justify-center">
            <img
              src="/images/identi_images/brand-cunsumer-differnt3.png"
              alt="삼송빵집 로고 2"
              className="object-contain h-full"
            />
          </div>
        </div>

        {/* 로고 1 박스 (오른쪽으로 이동) */}
        <div className="w-[800px] h-[809px] flex items-center justify-center"data-aos = "zoom-in" data-aos-delay="100">
          <img
            src="/images/identi_images/brand-cunsumer-differnt2.png"
            alt="삼송빵집 로고 1"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

    </div>
  );
}
