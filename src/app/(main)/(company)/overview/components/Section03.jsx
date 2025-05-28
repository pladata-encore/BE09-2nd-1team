"use client";
import React from "react";

export default function Section03() {
  return (
    <section className="pt-[4%] pb-[5%]">
      <div className="mt-[64px] bg-[url('/images/overview/intro2-bg.png'))] bg-[length:50%_auto] bg-no-repeat">
        <div className="w-[96%] mx-auto">
          <article className="pl-[3%] w-[50%] bg-white float-right text-center">
            <table className="w-full border-[#222] border-y-2">
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>회사명</th>
                  <td>(주)삼송비엔씨</td>
                </tr>
                <tr>
                  <th>대표이사</th>
                  <td>박성욱</td>
                </tr>
                <tr>
                  <th>사업자번호</th>
                  <td>720-87-00099</td>
                </tr>
                <tr>
                  <th>설립연도</th>
                  <td>2015년 5월 21일</td>
                </tr>
                <tr>
                  <th>소재지</th>
                  <td>대구시 수성구 용학로 25길 24</td>
                </tr>
                <tr>
                  <th>대표전화</th>
                  <td>
                    대표전화 053)556-3030 <br />
                    영업문의 053)768-3036 <br />
                    가맹문의 053)782-3032 <br />
                    마케팅문의 053)782-3031
                  </td>
                </tr>
                <tr>
                  <th>매출액</th>
                  <td>2023년 기준 연 190억</td>
                </tr>
                <tr>
                  <th>임직원수</th>
                  <td>본사 35명, 전국 매장 직원 300명</td>
                </tr>
                <tr>
                  <th>주요사업</th>
                  <td>
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
