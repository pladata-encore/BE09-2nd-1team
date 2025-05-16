"use client";

import { useState } from "react";
import KakaoMap from "@/components/KakaoMap";
import CardSection from "./CardSection";

export default function StoreLocationSection() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");


  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">매장 안내</h2>

          <KakaoMap
          markers={[
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
              title: "대구 서대구점",
              lat: 35.871435,
              lng: 128.601445,
              address: "대구 서구 국채보상로 243",
              phone: "053-218-0450",
            },
          ]}
        />

          {/* 지역/검색 필터 */}
          <div className="flex items-center w-full mt-4 space-x-2 md:w-auto">
            <select
              className="px-4 py-2 text-sm border rounded"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="absolute text-gray-500 -translate-y-1/2 right-2 top-1/2">🔍</button>
            </div>
          </div>
          <CardSection />
  
        </div>
      </div>
    </section>
  );
}
