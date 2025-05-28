"use client";
import Image from "next/image";
import React from "react";

export default function Section02() {
  return (
    <section className="pt-[5%] pb-[4%]">
      <div className="w-[96%] mx-auto">
        <div className="mb-[50px]">
          <dl className="flex flex-wrap py-[70px]">
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>B.I</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Brand identityty</span>
            </dt>
            <dd>
              <Image src={"/images/identity/brand2-sig-kr.png"} width={800} height={0} alt="brand2-sig-kr" />
              <Image src={"/images/identity/brand2-sig-en.png"} width={800} height={0} alt="brand2-sig-en" />
            </dd>
          </dl>
          <dl className="border-t-2 border-[#512d1e]"></dl>
          <dl
            className="flex flex-wrap py-[70px] relative
            "
          >
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>심볼</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Symbol</span>
            </dt>
            <dd>
              <Image src={"/images/identity/brand2-symbol.png"} width={184} height={0} alt="brand2-symbol" />
              <span
                className="absolute
                bottom-0 right-0
                text-right text-[140px]
                text-[#f5b335] font-extrabold
                whitespace-pre opacity-[0.06]
                leading-none"
              >
                SAMSOMG <br /> BAKERY
              </span>
            </dd>
          </dl>
          <dl className="border-t-2 border-[#512d1e]"></dl>
          <dl className="flex flex-wrap py-[70px]">
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>삼송프렌즈</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Character</span>
            </dt>
            <dd>
              <Image src={"/images/identity/brand2-cha.png"} width={800} height={0} alt="brand2-cha" />
            </dd>
          </dl>
          <dl className="border-t-2 border-[#512d1e]"></dl>
          <dl className="flex flex-wrap py-[70px]">
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>컬러시스템</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Color System</span>
            </dt>
            <dd>
              <Image src={"/images/identity/brand2-clr.png"} width={800} height={0} alt="brand2-Color-System" />
            </dd>
          </dl>
          <dl className="border-t-2 border-[#512d1e]"></dl>
        </div>
      </div>
    </section>
  );
}
