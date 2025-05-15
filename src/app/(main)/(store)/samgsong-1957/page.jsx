"use client"

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import KakaoMap from "../../../components/KakaoMap";


export default function page() {
  return (
    <main className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <img src="/images/(store)/s_1957.jpg" alt="삼송빵집 매장 이미지" className="object-cover w-full h-full" />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold tracking-wider text-white md:text-7xl">SAMSONG 1957</h1>
        </div>
      </section>

      {/* 로고 섹션 */}
     

      {/* 소개 섹션 */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-8">
             <img
                src="/icons/(store)/brand5-s1957.png"
                alt="SAMSONG 1957 로고"
                className="w-auto h-28" 
              />
              </div>
            <p className="mb-8 text-lg text-center text-gray-700">
              SAMSONG 1957은 삼송빵집 60년 업력의 노하우를 집대성한 브랜드로
              토탈 베이커리를 지향하며 다양한 종류의 제과 제빵 제품을 다루고 있습니다.
            </p>
          </div>
      </section>

    {/* YouTube 영상 */}
      <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/jC8B2WQtoWc?si=TgJEu_IEhCOyGOLV" 
          title="SAMSONG 1957 | 삼송1957 _ 토탈베이커리"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    
    
      {/* 상단 소개 3블럭 */}
      <section className="bg-white">
      <div className="grid grid-cols-1 text-center text-white md:grid-cols-3">
        <div className="bg-[#a36b3d] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold">토탈베이커리</h3>
          <p className="text-xl">제과 제빵 거의 대부분의 제품군을 제공하며 음료와 식사까지 연계한 브랜드 경험 제공</p>
        </div>
        <div className="bg-[#6e3b1e] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold">60년 노하우</h3>
          <p className="text-xl">긴 업력 동안 쌓인 제과 제빵 기술, 인력, 설비를 한 곳에 모은 브랜드</p>
        </div>
        <div className="bg-[#3b2a15] px-6 py-20">
          <h3 className="mb-2 text-4xl font-bold">랜드마크</h3>
          <p className="text-xl">매장, 제품, 서비스 모든 면에서 우수한 품질과 규모로 지역을 대표하는 장소로 자리 매김</p>
        </div>
      </div>
      </section>

      {/* 제품 카테고리 */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-2 text-4xl font-bold">SAMSONG 1957</h2>
            <h3 className="text-5xl font-bold text-[#333]">MENU</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/cookie-icon1.png" alt="과자빵" className="w-24 h-24 mb-6" />
               <h3 className="mb-4 text-4xl font-semibold">과자빵</h3>
              <p className="max-w-xs mx-auto text-xl text-gray-500">
                기존 삼송빵집 판매 제품 외에도 40종 이상의 단과자류 상품을 개발하여 제공합니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/bread-icon2.png" alt="식사빵" className="w-24 h-24 mb-6" />
              <h3 className="mb-4 text-4xl font-semibold">식사빵</h3>
               <p className="max-w-xs mx-auto text-xl text-gray-500">
                브랑스 제과 제빵 명품 장인 브랜드인 "BONGARD"의 장비를 사용하여 정통 유럽식 제품을 선보입니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/cake-icon3.png" alt="케이크, 디저트" className="w-24 h-24 mb-6" />
              <h3 className="mb-4 text-4xl font-semibold">케이크, 디저트</h3>
              <p className="max-w-xs mx-auto text-xl text-gray-500">
                차와 함께하는 디저트류에서 주문제작형 홀케이크까지 시즌에 맞춘 다양한 상품을 제공합니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/branch-icon4.png" alt="브런치" className="w-24 h-24 mb-6" />
              <h3 className="mb-4 text-4xl font-semibold">브런치</h3>
              <p className="max-w-xs mx-auto text-xl text-gray-500">
                검증된 베이커리 제품을 중심으로 눈과 입이 즐거운 한끼를 제공합니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/gift-icon6.png" alt="선물세트" className="w-24 h-24 mb-6" />
              <h3 className="mb-4 text-4xl font-semibold">선물세트</h3>
             <p className="max-w-xs mx-auto text-xl text-gray-500">
                삼송이 개발한 원두, 파운드, 쿠키 등 다양한 제품 구성으로 1957만의 선물세트를 선보입니다
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/icons/(store)/drink-icon5.png" alt="음료" className="w-24 h-24 mb-6" />
              <h3 className="mb-4 text-4xl font-semibold">음료</h3>
             <p className="max-w-xs mx-auto text-xl text-gray-500">
                까다로운 원료선정과 1957만의 레시피로 빵과 가장 조화로운 음료를 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 매장 위치 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">매장 안내</h2>
            <KakaoMap />

            <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold">삼송빵집 1957 대구점</h3>
              <div className="space-y-2">
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>대구광역시 수성구 동대로 252번길 24</span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>053-556-3030</span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>영업시간: 08:00 - 22:00 (연중무휴)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사이드 버튼 */}
      <div className="fixed right-0 z-50 transform -translate-y-1/2 top-1/2">
        <div className="flex flex-col items-center p-4 space-y-6 text-white bg-red-600">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="mt-2 text-sm">가맹안내</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="mt-2 text-sm">가맹문의</span>
            <span className="text-xs">1551-3039</span>
            <span className="text-xs">sbnc@ssbnc.kr</span>
          </div>
        </div>
      </div>
    </main>
  )
}
