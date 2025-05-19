"use client"

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38.09px",
  height: "19px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "2px",
  fontSize: "14px",
  fontWeight: "bold",
  lineHeight: "19px",
  verticalAlign: "middle",
  marginRight: "4px",
};

const sectionStyle = {
  padding: "30px 0",
  position: "relative",
};

const LocationInfo = () => {
  useEffect(() => {
          Aos.init();
        }, []);
  return (
    <div className="w-[1400px] px-4 text-gray-800" style={{ paddingBottom: "60px" }} >
      {/* 본사 */}
      <section style={sectionStyle} data-aos="fade-up" data-aos-delay = "200">
        <div className="flex" >
          <h2 className="text-[18px] font-bold min-w-[60px]">본사</h2>
          <div className="ml-8">
            <p className="mb-1 text-[20px] font-black">
              대구광역시 수성구 욱학로 25길 24
            </p>
            <p className="text-sm text-gray-600">
              24, Yonghak-ro 25-gil, Suseong-gu, Daegu, Republic of Korea
            </p>
          </div>
        </div>
        <div className="absolute text-sm text-right bottom-4 right-6">
          <p>
            <span className="font-semibold">TEL</span> 053-556-3030
          </p>
          <p>
            <span className="font-semibold">FAX</span> 053-556-3038
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 지하철 */}
      <section style={sectionStyle} data-aos="fade-up" data-aos-delay = "300">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">지하철</h2>
          <ul className="ml-8 list-disc list-inside text-[16px] space-y-1">
            <li>3호선 지산역 [도보 10분]</li>
            <li>3호선 수성못역 [도보 15분]</li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 버스 */}
      <section style={{ ...sectionStyle, minHeight: "410px" }} data-aos="fade-up" data-aos-delay = "400">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">버스</h2>
          <ul className="ml-8 space-y-4 text-[16px] list-disc list-inside">
            <li className="flex items-center space-x-4">
              <span className="inline-block w-[160px]">불교한방병원 [앞1]</span>
              <span style={badgeStyle}>간선</span>
              <span style={{ lineHeight: "19px" }}>410-1</span>
            </li>

            <li className="flex items-center space-x-4">
              <span className="inline-block w-[160px]">불교한방병원 [건너1]</span>
              <span style={badgeStyle}>간선</span>
              <span style={{ lineHeight: "19px" }}>410</span>
            </li>

            <li className="flex items-start space-x-4">
              <span className="inline-block w-[160px]">불교한방병원 [앞2]</span>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>간선</span>
                  <span>410</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>지선</span>
                  <span>수성1</span>
                </div>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="inline-block w-[160px]">불교한방병원 [건너2]</span>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>간선</span>
                  <span>401</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>지선</span>
                  <span>수성1-1</span>
                </div>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="inline-block w-[160px]">두산스포츠 [건너]</span>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>간선</span>
                  <span>410-1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>지선</span>
                  <span>수성1</span>
                </div>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="inline-block w-[160px]">한샘교회 [건너]</span>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>간선</span>
                  <span>410, 564</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={badgeStyle}>지선</span>
                  <span>수성1-1, 수성3-1</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 차량 */}
      <section style={sectionStyle} data-aos="fade-up" data-aos-delay = "500">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">차량</h2>
          <div className="ml-8 text-[16px]">
            <p className="mb-1">삼송1957 매장 주차장 이용</p>
            <p className="text-sm text-gray-600">
              대구 수성구 수성못2길 26 삼송1957
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>
    </div>
  );
};

export default LocationInfo;
