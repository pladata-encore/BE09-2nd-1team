"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import KakaoMap from "@/components/KakaoMap";
import CardSection from "./CardSection";
import { storeList } from "@/components/main/data/StoreList";

export default function StoreLocationSection() {
  const searchParams = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage =10;

  useEffect(()=>{
    const query = searchParams.get("query") ?? "";
    setSearchText(query);
  },[searchParams]);

const normalize = (text) =>
  text.toLowerCase().replace(/\s+/g, "").replace(/점/g, "");




    const filteredStores = storeList.filter((store) => {
    const regionMatch = selectedRegion
  ? normalize(store.title).includes(normalize(selectedRegion))
  : true;
    const normalizedTitle = normalize(store.title);
    const normalizedAddress = normalize(store.address);
    const normalizedSearch = normalize(searchText);
   const searchMatch =
      normalizedTitle.includes(normalizedSearch) || normalizedAddress.includes(normalizedSearch);
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
            <div className="flex items-center overflow-hidden border border-gray-300 rounded">
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
          <div className="flex justify-start mt-10 mb-12">
            <nav className="flex space-x-2">
              {/* 처음으로 이동 */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
              >
                «
              </button>

              {/* 페이지 번호 */}
              {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded transition
                      ${
                        isActive
                          ? "bg-gray-400 text-white font-bold"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* 마지막으로 이동 */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
              >
                »
              </button>
            </nav>
          </div>

        </div>
      </div>
    </section>
  );  
}
