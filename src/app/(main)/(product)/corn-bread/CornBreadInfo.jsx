"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../product/ProductCard";
import products from "../product/product";

export default function CornBreadInfo() {
  const pathname = usePathname();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, [pathname]);

  const cornBreadItems = products.slice(0, 2);

  return (
    <>
      <div className="relative w-full h-[580px]">
        <img
          src="/images/products/product_main.jpg"
          alt="통옥수수빵"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          data-aos="fade-up"
        >
          <span className="text-6xl font-bold text-white">통옥수수빵</span>
        </div>
      </div>
      <div className="relative w-full h-[430px] mt-23">
        <img
          src="/images/cornbread/cornbread-bg.png"
          alt="통옥수수빵 소개 배경"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-left">
          <span
            className="ml-8 text-6xl font-bold mt-25 text-amber-300"
            data-aos="fade-up"
          >
            통옥수수빵
          </span>
          <span
            className="mt-5 ml-8 text-xl text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            한번 맛보면 헤어나올 수 없는 맛!
            <br /> 통옥수수와 특제 소스로 맛을 낸, 중독성으로 유명한 삼송빵집의
            베스트 메뉴
          </span>
        </div>
      </div>
      <div className="relative flex flex-row items-center w-full h-full mb-24">
        {/* 이미지 영역 */}
        <div className="flex-shrink-0 mt-5 ml-8">
          <img
            src="/images/cornbread/cornbread-img.png"
            alt="통옥수수빵 상세 소개"
            className="object-cover w-150 h-200 md-12"
          />
        </div>
        {/* 텍스트 영역 */}
        <div className="flex flex-col flex-grow gap-12 mt-12 mb-12 mr-10 ml-15">
          {/* 1번 */}
          <div
            className="flex flex-row items-start"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="text-[80px] font-light text-[#e5c87d] leading-none select-none mr-8">
              01
            </span>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                소비자들이 붙인 별명으로 유명한 빵
              </h2>
              <p className="text-lg leading-relaxed text-gray-500 md:text-xl">
                통옥수수빵은 한번 맛본 사람이라면 계속 생각난다는 뜻으로
                <br />
                고객님들이 붙여준 '마약빵'이란 별명으로 더 유명합니다.
                <br />
                따듯하고 맛있는 빵에 몰두한 진심이 고객에게 닿아
                <br />
                오늘의 삼송빵집이 있게한 대표 제품입니다.
              </p>
            </div>
          </div>
          {/* 2번 */}
          <div
            className="flex flex-row items-start"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <span className="text-[80px] font-light text-[#e5c87d] leading-none select-none mr-8">
              02
            </span>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                고객 스스로 알린 통옥수수빵
              </h2>
              <p className="text-lg leading-relaxed text-gray-500 md:text-xl">
                본사 주도적 마케팅을 통해 만들어진 명성이 아닌
                <br />
                통옥수수빵을 맛보신 고객분들의 자발적인 입소문을 타고
                <br />
                블로그, SNS, 방송으로 퍼지게 되어 전국에서 이름난 빵이
                되었습니다.
              </p>
            </div>
          </div>
          {/* 3번 */}
          <div
            className="flex flex-row items-start"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <span className="text-[80px] font-light text-[#e5c87d] leading-none select-none mr-8 ">
              03
            </span>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                어제와 오늘이 다른 통옥수수빵
              </h2>
              <p className="text-lg leading-relaxed text-gray-500 md:text-xl">
                10년 전 통옥수수빵과 현재의 통옥수수빵은 다릅니다.
                <br />
                고객 여러분에게 늘 사랑받는 빵을 만들기 위해
                <br />
                매해 맛의 깊이를 더해왔기 때문입니다.
                <br />
                오늘도 삼송BNC 제빵 연구실에서는
                <br />
                통옥수수빵을 비롯한 모든 빵의 개량을 진행하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 제품 카드 영역 */}
      <div className="ml-5">
        <ProductCard items={cornBreadItems} />
      </div>
    </>
  );
}
