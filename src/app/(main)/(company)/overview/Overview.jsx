"use client";

import React from "react";

export default function OverView() {
  return (
    <>
      {/*상단 이미지*/}
      <div>
        <div className="relative w-full h-[580px]">
          <img
            src="/images/greeting/s_visual6.jpg"
            alt="기업개요"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 top-0 flex items-center justify-center animate-fade-in">
          <span className="text-6xl font-bold text-white drop-shadow-lg">
            기업개요
          </span>
        </div>
      </div>

      <div className="min-h-screen">
        {/*중단 텍스트*/}
        <div className="mt-20 mull ml-items-start text-7xl">
          <p className="text-3xl font-bold text-brown-500 text-semibold">
            전국 46개 매장 · 일 100만개의 빵 · 300여명의 직원
          </p>
          <br />
          <div className="text-brown-500">
            <span className="mt-1 font-bold text-yellow-500">한국을 대표</span>
            <span>하는</span>
            <br />
            <span>베이커리</span>
            <span className="font-bold text-yellow-500">브랜드</span>
            <span>로 성장했습니다.</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          {/* 하단 왼쪽 이미지 */}
          <div className="relaxtive w-1/2 h-[500px]">
            <img
              src="/images/greeting/intro2-bg.png"
              alt="기업개요"
              className="object-cover w-full h-full"
            />
          </div>

          {/* 하단 오른쪽 테이블 */}
          <div className="relative w-1/2 ml-10 overflow-hidden">
            <table className="w-full border-collapse">
              <tr className="border-b-4 border-black"></tr>
              <tr>
                <td className="p-4 text-center border border-black-300">
                  회사명
                </td>
                <td className="p-4 text-left border border-gray-300">
                  (주)삼송비앤씨
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300 text-centers">
                  대표이사
                </td>
                <td className="p-4 text-left border border-gray-300">박성욱</td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  사업자번호
                </td>
                <td className="p-4 text-left border border-gray-300">
                  720-87-00099
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  설립연도
                </td>
                <td className="p-4 text-left border border-gray-300">
                  2015년 5월 21일
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  소재지
                </td>
                <td className="p-4 text-left border border-gray-300">
                  대구시 수성구 용학로 25길 24
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  대표전화
                </td>
                <td className="p-4 text-left border border-gray-300">
                  대표전화 053)556-3030 <br />
                  영업문의 053)768-3036 <br />
                  가맹문의 053)782-3032 <br />
                  마케팅문의 053)782-3031
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  매출액
                </td>
                <td className="p-4 text-left border border-gray-300">
                  2023년 기준 연 190억
                </td>
              </tr>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  임직원수
                </td>
                <td className="p-4 text-left border border-gray-300">
                  본사 35명, 전국 매장 직원 300명
                </td>
              </tr>
              <tr className="border-b-4 border-black">
                <td className="p-4 text-center border border-gray-300">
                  주요사업
                </td>
                <td className="p-4 text-left border border-gray-300">
                  제과제빵 음료제조 및 판매
                  <br />
                  제과제빵 경영컨설팅, 프랜차이즈 사업
                  <br />
                  제과제빵 교육연구지원 서비스업
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
