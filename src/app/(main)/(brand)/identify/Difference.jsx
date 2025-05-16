import React from "react";

export default function Identify() {
  return (
    <div className="text-gray-800 bg-white">
      {/* B.I Section */}
      <div className="flex items-start justify-between p-16 mt-20">
        {/* Title */}
        <div className="w-1/3" style={{ transform: "translateX(-240px)" }}>
          <h1 className="text-[48px] font-bold text-gray-900">B.I</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Brand Identity
          </h2>
        </div>

        {/* Logos: 로고1(크게), 로고2(텍스트 포함) */}
        <div className="flex flex-row gap-10 w-[1000px]">
          {/* 로고 1 - 크게 */}
          <div className="w-[600px] h-[809px] overflow-hidden flex items-center justify-center">
            <img
              src="/images/identi_images/brand-cunsumer-differnt1.png"
              alt="삼송빵집 로고 1"
              className="object-contain w-full h-full"
            />
          </div>

          {/* 로고 2 - 텍스트 박스 포함 */}
          <div className="flex flex-col justify-start w-[380px] text-center">
            {/* 텍스트 박스 */}
            <div className="p-4 mb-6">
              <p className="mb-6 text-[70px] font-extrabold leading-none">
                <span className="text-yellow-500">고객만족</span> 차별화
              </p>
              <p className="text-[18px] leading-relaxed text-gray-700">
                건강하고 맛있는 빵의 원칙 아래 매달 새로운 제품을 개발하고
                <br />그 중 철저한 내부검증을 통해 선발된 제품을 출시하고 있습니다.
              </p>
              {/* 강조 문구 */}
              <div className="inline-block bg-[#4b2d1e] text-white px-8 py-3 rounded-full mb-10 text-xl font-semibold whitespace-nowrap">
                60년간 이어온 전통과 끊임없는 신제품 개발
              </div>

              {/* 리스트 */}
              <ul className="max-w-xl mx-auto space-y-4 text-base text-gray-700 list-disc pl-5 text-left">
                <li>국내 독점 아이템 개발 및 특허권 확보</li>
                <li>신선한 재료만을 아끼지 않고 넣어 만든 알찬 상품</li>
                <li>천연당, 신소재활용한 제품 개발의 끊임없는 R&D</li>
              </ul>
            </div>

            {/* 이미지 */}
            <div className="h-[250px] overflow-hidden flex items-center justify-center">
              <img
                src="/images/identi_images/brand6-img1-2_230616.png"
                alt="삼송빵집 로고 2"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#512d1e] my-12" />
    </div>
  );
}
