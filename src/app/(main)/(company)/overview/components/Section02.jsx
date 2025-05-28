"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "../style/overview.css";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Section02() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="relative w-[96%] mx-auto pt-[7%] pb-[5%]">
      <h4
        data-aos="fade-up"
        data-aos-delay="100"
        className="mb-[36px] text-[36px] font-semibold text-[#222] leading-[54px]"
      >
        전국 46개 매장 · 일 100만개의 빵 · 300여명의 직원
      </h4>
      <h3 data-aos="fade-up" data-aos-delay="200" className="text-[70px] text-[#512d1e] leading-[84px] font-medium">
        <span className="text-[#ffb21f] font-extrabold">한국을 대표</span>
        하는
        <br />
        베이커리 <span className="text-[#ffb21f] font-extrabold">브랜드</span>로 성장했습니다.
      </h3>
      <div className="mt-[64px]">
        <div className="w-[96%] mx-auto flex">
          <article className="w-[50%]">
            <Image src={"/images/overview/intro2-bg.png"} width={800} height={0} alt="intro2" />
          </article>
          <article data-aos="fade-up" data-aos-delay="300" className="pl-[3%] w-[50%] bg-white float-right text-center">
            <table className="w-full border-[#222] border-y-2">
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th className="th">회사명</th>
                  <td className="td">(주)삼송비엔씨</td>
                </tr>
                <tr>
                  <th className="th">대표이사</th>
                  <td className="td">박성욱</td>
                </tr>
                <tr>
                  <th className="th">사업자번호</th>
                  <td className="td">720-87-00099</td>
                </tr>
                <tr>
                  <th className="th">설립연도</th>
                  <td className="td">2015년 5월 21일</td>
                </tr>
                <tr>
                  <th className="th">소재지</th>
                  <td className="td">대구시 수성구 용학로 25길 24</td>
                </tr>
                <tr>
                  <th className="th">대표전화</th>
                  <td className="td">
                    대표전화 053)556-3030 <br />
                    영업문의 053)768-3036 <br />
                    가맹문의 053)782-3032 <br />
                    마케팅문의 053)782-3031
                  </td>
                </tr>
                <tr>
                  <th className="th">매출액</th>
                  <td className="td">2023년 기준 연 190억</td>
                </tr>
                <tr>
                  <th className="th">임직원수</th>
                  <td className="td">본사 35명, 전국 매장 직원 300명</td>
                </tr>
                <tr>
                  <th className="th">주요사업</th>
                  <td className="td">
                    제과제빵 음료제조 및 판매 <br />
                    제과제빵 경영컨설팅, 프랜차이즈 사업 <br />
                    제과제빵 교육연구지원 서비스업 <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </section>
  );
}
