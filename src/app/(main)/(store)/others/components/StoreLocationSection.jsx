"use client";

import { useState } from "react";
import KakaoMap from "@/components/KakaoMap";
import CardSection from "./CardSection";

export default function StoreLocationSection() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage =10;


  const storeList = [

            {
              title: "서울 청량리역사점",
              lat: 37.580178,
              lng: 127.046835,
              address: "서울 동대문구 왕산로 214 3층 317호",
              phone: "02-3707-1303",
            },
            {
              title: "부산 부산연산점",
              lat: 35.186556,
              lng: 129.079695,
              address: "부산 연제구 반송로 89",
              phone: "051-937-3030",
            },
            {
              title: "경기 평택점",
              lat: 36.994334,
              lng: 127.112222,
              address: "경기 평택시 평남로 703 1층 103호",
              phone: "031-654-3300",
            },
            {
              title: "대구 서대구점",
              lat: 35.871435,
              lng: 128.601445,
              address: "대구 서구 국채보상로 243",
              phone: "053-218-0450",
            },
            {
              title: "서울 강남 대치점",
              lat: 37.498095,
              lng: 127.053652,
              address: "서울 강남구 선릉로 319 1층 삼송빵집 강남대치점",
              phone: "02-556-9308",
            },
            {
              title: "인천 인천청라점",
              lat: 37.532786,
              lng: 126.659921,
              address: "인천 서구 중봉대로586번길 22 청라 엑슬루타워 137호",
              phone: "032-562-3082",
            },
            {
              title: "서울 마곡 발산점",
              lat: 37.558277,
              lng: 126.837749,
              address: "서울 강서구 공항대로 261",
              phone: "02-6465-1301",
            },
            {
              title: "경기 안산점",
              lat: 37.304237,
              lng: 126.856342,
              address: "경기 안산시 단원구 예술대학로 17 1층 105호",
              phone: "031-439-7264",
            },
            {
              title: "경기 역곡역사점",
              lat: 37.484529,
              lng: 126.811615,
              address: "경기 부천시 원미구 역곡로 1",
              phone: "0507-1376-2896",
            },
            {
              title: "전북 전주 서신점",
              lat: 35.825552,
              lng: 127.121372,
              address: "전북특별자치도 전주시 완산구 당산로 99 1층 107호",
              phone: "063-272-7006",
            }, 
              {
              title: "서울 상봉역점",
              address: "서울 중랑구 망우로 297 상봉역 1층",
              phone: "010-3805-3503",
              lat: 37.596014,
              lng: 127.085918,
            },
            {
              title: "울산 울산울주점",
              address: "울산 울주군 삼남읍 반구대로 643",
              phone: "052-254-5654",
              lat: 35.526192,
              lng: 129.178318,
            },
            {
              title: "강원 강릉경포점",
              address: "강원특별자치도 강릉시 해안로535번길 19 MGM 호텔 101호",
              phone: "033-655-6676",
              lat: 37.796842,
              lng: 128.911645,
            },
            {
              title: "서울 강남양재점",
              address: "서울 서초구 서초동 1366 1층",
              phone: "02-525-9308",
              lat: 37.483725,
              lng: 127.034393,
            },
            {
              title: "경기 김포구래점",
              address: "경기 김포시 구래동 6878-3 1층",
              phone: "031-997-4342",
              lat: 37.6449,
              lng: 126.6284,
            },
            {
              title: "경기 광명역사점",
              address: "경기 광명시 광명역로 21 광명역 서편맞이방",
              phone: "070-4066-5854",
              lat: 37.416074,
              lng: 126.884655,
            },
            {
              title: "대구 이시아폴리스점",
              address: "대구 동구 팔공로51길 15-6 비이동 1층 20호",
              phone: "053-382-9082",
              lat: 35.920096,
              lng: 128.636838,
            },
            {
              title: "서울 코엑스몰점",
              address: "서울 강남구 영동대로 513 스타필드 코엑스몰 B1층, O109호",
              phone: "02-564-3033",
              lat: 37.511097,
              lng: 127.059141,
            },
            {
              title: "제주 신제주점",
              address: "제주특별자치도 제주시 1100로 3348",
              phone: "064-743-3033",
              lat: 33.4861,
              lng: 126.4936,
            },
            {
              title: "서울 영등포역사점",
              address: "서울 영등포구 경인로 846 맞이방 3층, 지하층",
              phone: "02-2677-3006",
              lat: 37.51583,
              lng: 126.90745,
            },
            {
              title: "서울 잠실 광장점",
              address: "서울 송파구 올림픽로 지하 265",
              phone: "02-415-3033",
              lat: 37.511682,
              lng: 127.100125,
            },
            {
              title: "경기 평택점",
              address: "경기 평택시 평남로 703 1층 103호(비전동)",
              phone: "031-654-3300",
              lat: 36.994334,
              lng: 127.112222,
            },
            {
              title: "부산 부산연산점",
              address: "부산 연제구 반송로 89 1층(연산동)",
              phone: "051-937-3030",
              lat: 35.186556,
              lng: 129.079695,
            },
            {
              title: "대구 서대구점",
              address: "대구 서구 국채보상로 243",
              phone: "053-218-0450",
              lat: 35.871435,
              lng: 128.601445,
            },
            
          

  ];

    const filteredStores = storeList.filter((store) => {
    const regionMatch = selectedRegion ? store.title.includes(selectedRegion) : true;
    const searchMatch = store.title.includes(searchText) || store.address.includes(searchText);
    return regionMatch && searchMatch;
    
  });

  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  


  return (
    <section className="bg-gray-50">
      {/* 지도는 화면에 꽉 차게 보여줌 */}
      <div className="w-full">
        <KakaoMap markers={filteredStores} />
      </div>
  
      {/* 매장 검색 및 리스트 정보는 내부 박스로 정리 */}
      <div className="container px-4 mx-auto mt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">매장 안내</h2>
  
          {/* 지역/검색 필터 */}
          <div className="flex items-center w-full mt-4 space-x-2 md:w-auto">
            <select
              className="px-12 py-2 text-sm text-white bg-[#532E1C] border border-[#532E1C] rounded"
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setCurrentPage(1); // 필터 변경 시 페이지 초기화
              }}
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
            
            {/* 검색 통합 박스 */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              {/* 검색 조건 선택 (매장명) */}
              <select className="px-3 py-2 text-sm bg-white border-r border-gray-300 outline-none">
                <option value="store">매장명</option>
              </select>

              {/* 검색어 입력 */}
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="px-4 py-2 text-sm w-[200px] focus:outline-none"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
              />

              {/* 검색 아이콘 버튼 */}
              <button
                type="submit"
                className="px-4 text-gray-600 hover:text-black"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
  
          {/* 매장 카드 리스트 */}
          {currentStores.map((store, index) => (
            <CardSection key={index} store={store} />
          ))}
  
          {/* 페이지네이션 */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 text-sm border rounded ${
                  currentPage === i + 1 ? "bg-black text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </section>
  );  
}
