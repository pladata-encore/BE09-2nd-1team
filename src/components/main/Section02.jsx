"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Section02() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="flex flex-col py-[100px] min-h-screen bg-[#fffbf2] relative">
      <div className="mx-[30px]">
        <ul>
          <li data-aos="fade-up" data-aos-delay="100" className="text-[#512d1e] text-xl font-bold leading-6">
            3대를 이어온 대구를 대표하는 추억과 역사가 있는 빵집
          </li>
          <li data-aos="fade-up" data-aos-delay="200" className="pt-[40px] pb-[25px]">
            <Image src={"/images/main/mpart1-txt.png"} alt="Samsong-Bakey" width={700} height={146} />
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[#f5b335] text-[28px] font-bold leading-6 flex gap-5"
          >
            <span>#since 1967</span>
            <span>#3대 빵집</span>
            <span>#줄서서 먹는 빵집</span>
          </li>
        </ul>
      </div>
      <div className="mx-[30px] text-center pt-[100px]">
        <ul data-aos="flip-left" data-aos-delay="500" data-aos-duration="1000" className="gap-[50px] flex flex-col">
          <li className="font-['Cafe24Decobox'] text-[#512d1e] text-[32px] leading-9 font-bold">
            <p>since 1957</p>
          </li>
          <li className="text-lg leading-8 text-[#502c1d]">
            <p>
              1957년 대구 남문시장에서삼송제과로 시작된 삼송빵집은
              <br />
              3대를 이어 대구를 대표하는 추억과 역사의 빵집으로 많은 사랑을 받고 있습니다.
            </p>
          </li>
          <li className="text-lg leading-8 text-[#502c1d]">
            <p>
              대형 프렌차이즈점과 경쟁을 이겨내고 정직한 경영과 꾸준한 신제품 개발로
              <br />
              마침내 국내 최초로 구운 고로케를 개발, 통옥수수빵과 더불어 선풍적인 인기몰이를 하면서
              <br />
              현재, 한국을 대표하는 베이커리 브랜드인 “삼송빵집”이 되었습니다.
            </p>
          </li>
          <li data-aos="fade-up" data-aos-delay="600" className="mt-[100px]">
            <Link href="/greeting" className="bg-[#f5b335] rounded-[50px] py-[1em] px-[3em]">
              ABOUT SAMSONG
            </Link>
          </li>
        </ul>
      </div>

      {/* 애니메이션 이미지 */}
      <div
        className="
        absolute 
        top-0 
        right-0 
        before:bg-[url('/images/main/mpart1-img-rbg.png')]
        before:bg-contain before:bg-no-repeat
        before:absolute 
        before:top-0 
        before:right-[1%]
        before:animate-[spin_8s_linear_infinite] 
        before:z-10 
        before:block
        before:w-[500px]
        before:h-[500px]"
      >
        <Image
          src="/images/main/mpart1-img-r.png"
          alt="moving-img-1"
          width={500}
          height={500}
          className="relative z-20"
        />
      </div>
      <div
        className="
        before:bg-[url('/images/main/mpart1-img-l1bg.png')]
        before:bg-contain before:bg-no-repeat
        before:absolute 
        before:top-0
        before:left-0
        before:animate-[spin_8s_linear_infinite] 
        before:z-10 
        absolute 
        top-[35%]
        left-[-12%]
        before:block
        before:w-[500px]
        before:h-[500px]"
      >
        <Image
          src="/images/main/mpart1-img-l1.png"
          alt="moving-img-2"
          width={500}
          height={500}
          className="relative z-20"
        />
      </div>
      <div className="absolute bottom-0 animate-[bounce_2.5s_infinite] left-[25%]">
        <Image
          src="/images/main/mpart1-img-l2.png"
          alt="moving-img-3"
          width={180}
          height={160}
          className="relative z-20"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/images/main/mpart1-symbol.png"
          alt="moving-img-3"
          width={565}
          height={200}
          className="relative z-20"
        />
      </div>
    </section>
  );
}
