"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Section02() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="pt-[4%] pb-[5%] w-[96%] mx-auto">
      <div className="flex ">
        <article className="w-[50%]">
          <h3
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[70px] font-black font-['Cafe24Decobox'] text-[#512d1e] leading-[84px]"
          >
            since <span className="text-[#f5b335]">1957</span>
          </h3>
          <h4
            data-aos="fade-left"
            data-aos-delay="200"
            className="py-[5%] text-[22px] text-[#222] font-bold leading-[35px]"
          >
            1957년 대구 남문시장에서 삼송제과로 시작된 <br />
            삼송빵집은 3대를 이어 대구를 대표하는 <br />
            추억과 역사의 빵집으로 많은 사랑을 받고 있습니다.
          </h4>
          <p data-aos="fade-left" data-aos-delay="300" className="mb-[5%] leading-[32px] text-[18px] text-[#686868]">
            정직한 경영과 성실한 제품 개발이 국내 최초의 오븐에 구운 고로케와 <br />
            통옥수수빵이 탄생과 성공으로 이어졌고 오늘날 한국을 대표하는 <br />
            베이커리 브랜드 중 하나인 “삼송빵집”을 있게 했습니다.
          </p>
          <p data-aos="fade-left" data-aos-delay="400" className="mb-[5%] leading-[32px] text-[18px] text-[#686868]">
            삼송비엔씨는 대형 프랜차이즈와 경쟁을 이겨낸 경험과 긴 업력의 <br />
            노하우를 바탕으로 2022년부터 가맹사업 전개, 생산시스템 확충, <br />
            해외 진출 등으로 더욱 단단한 성장의 발판을 준비하고 있습니다.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-[20px] text-[#222] font-semibold flex items-center"
          >
            대표이사 <span className="pl-[15px] text-[26px] tracking-[10px]">박성욱</span>
            <Image src={"/images/greeting/sign.png"} alt="sign" width={215} height={0} />
          </p>
        </article>
        <article className="w-[50%]">
          <Image
            src={"/images/greeting/intro_bakery.png"}
            alt="intro1-img"
            width={800}
            height={0}
            className="min-w-[800px]"
          />
        </article>
      </div>
    </section>
  );
}
