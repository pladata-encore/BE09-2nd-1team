'use client';
import React from "react";

export default function CornBreadInfo() {
  return (
    <>
      <div className="relative w-full h-[650px]">
        <img
          src="/images/products/product_main.jpg"
          alt="통옥수수빵"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">통옥수수빵</span>
        </div>
      </div>
      <div className="relative w-full h-[650px] mt-20">
        <img
          src="/images/cornbread/cornbread-bg.png"
          alt="통옥수수빵 소개 배경"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center flexitems-center">
          <span className="m-4 text-6xl font-bold text-white">통옥수수빵</span>
          <span className="m-4 text-xl text-white ml-5font-bold">
            한번 맛보면 헤어나올 수 없는 맛!
            <br /> 통옥수수와 특제 소스로 맛을 낸, 중독성으로 유명한 삼송빵집의
            베스트 메뉴
          </span>
        </div>
      </div>
      <div className="relative flex flex-col w-full h-full mt-20">
        <span className="m-4 text-6xl font-bold text-black">
          01. 소비자들이 붙인 별명으로 유명한 빵
        </span>
        <span className="m-4 ml-5 text-xl text-black">
          통옥수수빵은 한번 맛본 사람이라면 계속 생각난다는 뜻으로 <br />
          고객님들이 붙여준 '마약빵'이란 별명으로 더 유명합니다. <br />
          따듯하고 맛있는 빵에 몰두한 진심이 고객에게 닿아 <br />
          오늘의 삼송빵집이 있게한 대표 제품입니다.
        </span>
      </div>
      <div className="relative flex flex-col w-full h-full mt-5">
        <span className="m-4 text-6xl font-bold text-black">
          02. 고객 스스로 알린 통옥수수빵
        </span>
        <span className="m-4 ml-5 text-xl text-black">
          본사 주도적 마케팅을 통해 만들어진 명성이 아닌  <br />
          통옥수수빵을 맛보신 고객분들의 자발적인 입소문을 타고 <br />
          블로그, SNS, 방송으로 퍼지게 되어 전국에서 이름난 빵이 되었습니다.
        </span>
      </div>
      <div className="relative flex flex-col w-full h-full mt-5">
        <span className="m-4 text-6xl font-bold text-black">
          03. 고객 스스로 알린 통옥수수빵
        </span>
        <span className="m-4 ml-5 text-xl text-black">
          10년 전 통옥수수빵과 현재의 통옥수수빵은 다릅니다. <br />
          고객 여러분에게 늘 사랑받는 빵을 만들기 위해 <br />
          매해 맛의 깊이를 더해왔기 때문입니다. <br />
          오늘도 삼송BNC 제빵 연구실에서는 <br />
          통옥수수빵을 비롯한 모든 빵의 개량을 진행하고 있습니다.
        </span>
      </div>
    </>
  );
}
