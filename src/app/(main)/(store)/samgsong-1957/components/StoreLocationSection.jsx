"use client";
import KakaoMap from "@/components/KakaoMap";

export default function StoreLocationSection() {
  return (
    <section className="bg-gray-50">
      {/* 지도를 화면에 꽉 차게 보여줌 */}
      <div className="w-full">
        <KakaoMap
          latitude={35.8714354}
          longitude={128.601445}
          title="삼송빵집 1957"
          address="대구 수성구 동대로 252번길 24"
          phone="053-556-3030"
        />
      </div>

      {/* 아래 정보 영역은 최대 너비 제한 적용 */}
      <div className="container px-4 mx-auto mt-10">
        <div className="max-w-5xl mx-auto">
          {/* 검색 영역 */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <select className="px-4 py-2 text-sm border rounded">
              <option>지역별 매장보기</option>
              <option value="서울">서울</option>
              <option value="대전">대전</option>
              <option value="대구">대구</option>
              <option value="부산">부산</option>
              <option value="광주">광주</option>
              <option value="인천">인천</option>
              <option value="울산">울산</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="충남">충남</option>
              <option value="충북">충북</option>
              <option value="경북">경북</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="제주">제주</option>
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

          {/* 매장 정보 카드 */}
          <div className="flex flex-col items-center justify-between p-4 mt-6 space-y-4 bg-white rounded-lg shadow-md md:flex-row md:space-y-0">
            {/* 매장명 */}
            <div className="flex flex-col w-full md:flex-row md:items-center md:space-x-6 md:w-auto">
              <img
                src="/icons/(store)/markerStar.png"
                alt="예약"
                className="w-4 h-5"
              />
              <div className="mt-4 text-xl text-gray-700 md:mt-0 whitespace-nowrap">
                <strong className="font-extrabold text-black">대구</strong>{" "}
                <h1 className="font-bold">1957 토탈 베이커리</h1>
                <p className="text-sm">대구광역시 수성구 동대로 252번길 24</p>
              </div>
            </div>

            {/* 아이콘 */}
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

            {/* 전화번호 */}
            <div className="text-base font-semibold text-gray-800">
              053-768-3035
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
