"use client";

import KakaoMap from "@/components/KakaoMap";

export default function StoreLocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">매장 안내</h2>

          <KakaoMap
            latitude={35.8714354}
            longitude={128.601445}
            title="삼송빵집 1957"
            address="대구 수성구 동대로 252번길 24"
            phone="053-556-3030"
          />


        {/* 통합 검색, 정보, 아이콘 카드 */}
          {/* 좌측: 지역/매장 검색 */}
            <div className="flex items-center w-full space-x-2 md:w-auto">
              <select className="px-4 py-2 text-sm border rounded">
                <option>지역별 매장보기</option>
                <option>서울</option>
                <option>경기</option>
                <option>부산</option>
                <option>강원</option>
                {/* 필요시 더 추가 */}
              </select>

              <div className="relative w-full md:w-[200px]">
                <input
                  type="text"
                  placeholder="매장명을 입력해주세요"
                  className="w-full px-4 py-2 text-sm border rounded"
                />
                <button className="absolute text-gray-500 -translate-y-1/2 right-2 top-1/2">
                  🔍
                </button>
              </div>
            </div>

      
          {/* 통합된 검색, 정보, 아이콘 카드 */}
          <div className="flex flex-col items-center justify-between p-4 mt-6 space-y-4 bg-white rounded-lg shadow-md md:flex-row md:space-y-0">
            {/* 좌측: 검색, 매장명 */}
            <div className="flex flex-col w-full md:flex-row md:items-center md:space-x-6 md:w-auto">
              <img src="/icons/(store)/markerStar.png" alt="예약" className="w-4 h-5" />
                <div className="mt-4 text-xl text-gray-700 md:mt-0 whitespace-nowrap">
                  <strong className="font-extrabold text-black">대구</strong> <h1 className="font-bold">1957 토탈 베이커리</h1>
                      <p className="text-sm">대구광역시 수성구 동대로 252번길 24</p>
                </div>
            </div>

            {/* 중앙: 아이콘 */}
            <div className="flex justify-center gap-4">
              <a href="#" className="flex flex-col items-center">
                <img src="/icons/(store)/ico1.png" alt="예약" className="w-12 h-15" />
              </a>
              <a href="#" className="flex flex-col items-center">
                <img src="/icons/(store)/ico9.png" alt="로드뷰" className="w-12 h-15" />
              </a>
              <a href="#" className="flex flex-col items-center">
                <img src="/icons/(store)/ico7.png" alt="지도" className="w-12 h-15" />
              </a>
              <a href="#" className="flex flex-col items-center">
                <img src="/icons/(store)/ico3.png" alt="주차가능" className="w-12 h-15" />
              </a>
            </div>

            {/* 우측: 전화번호 */}
            <div className="text-base font-semibold text-gray-800">
              053-768-3035
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
