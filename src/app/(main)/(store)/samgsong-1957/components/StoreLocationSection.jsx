"use client";
import KakaoMap from "@/components/KakaoMap";

export default function StoreLocationSection() {
  return (
    <section className="bg-gray-50 mb-24"
             data-aos="fade-up"
             data-aos-delay="100"
    data-aos-duration="800">
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

   
      <div className="container px-4 mx-auto mt-10">
        <div className="max-w-5xl mx-auto">
          {/* 검색 영역 */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {/* 지역 필터 - 갈색 버튼 */}
            <select
              className="px-6 py-2 text-sm text-white bg-[#532E1C] border border-[#532E1C] rounded"
              defaultValue=""
            >
              <option value="">지역별 매장보기</option>
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

            {/* 검색 필터 박스 - 매장명 + input + 아이콘 */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full md:w-auto">
              <select className="px-3 py-2 text-sm bg-white border-r border-gray-300 outline-none">
                <option value="store">매장명</option>
              </select>
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="px-4 py-2 text-sm w-full md:w-[200px] focus:outline-none"
              />
              <button className="px-4 text-gray-600 hover:text-black">
                <i className="fa fa-search" aria-hidden="true"></i>
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
              <a
                  href="https://naver.me/FfW0iVPX"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="네이버 예약"
                >
                <img src="/icons/(store)/ico1.png" alt="예약" className="w-12 h-15" />
              </a>
              <a
                href="https://naver.me/xdk3kzp3"
                target="_blank"
                rel="noopener noreferrer"
                title="네이버 로드뷰"
              >
                <img src="/icons/(store)/ico9.png" alt="로드뷰" className="w-12 h-15" />
              </a>
               <a
                  href="https://naver.me/53Xl4qI0"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="네이버 지도"
                >
                <img src="/icons/(store)/ico7.png" alt="지도" className="w-12 h-15" />
              </a>
              <a href="#" className="flex flex-col items-center">
                <img src="/icons/(store)/ico3.png" alt="주차가능" className="w-12 h-15" />
              </a>
            </div>

            {/* 전화번호 */}
            <div className="text-base font-semibold text-gray-800">
              <a
                href="tel:053-768-3035"
                className="text-sm flex items-center gap-2 hover:text-blue-600"
              >
                <i className="fa fa-phone" aria-hidden="true"></i>
                 📞 053-768-3035
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
