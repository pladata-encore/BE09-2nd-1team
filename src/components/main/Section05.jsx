"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

SwiperCore.use([Autoplay]);

export default function Section05() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!searchKeyword.trim()) return;
    router.push(`/store?query=${encodeURIComponent(searchKeyword)}`);
  };

  const slideItems = [
    {
      id: 1,
      title: "평택점",
      addr: "경기 평택시 평남로 703 1층 103호(비전동)",
      tel: "031-654-3300",
      imgSrc: "/images/main/sec5-slide-1.png",
      imgAlt: "sec5-slide-1.png",
    },
    {
      id: 2,
      title: "부산연산점",
      addr: "부산 연제구 반송로 89 1층(연산동)",
      tel: "051-937-3030",
      imgSrc: "/images/main/sec5-slide-2.png",
      imgAlt: "sec5-slide-2.png",
    },
    {
      id: 3,
      title: "성남금광점",
      addr: "경기 성남시 중원구 광명로 322 ",
      tel: "031-733-3387",
      imgSrc: "/images/main/sec5-slide-3.jpg",
      imgAlt: "sec5-slide-3.jpg",
    },
    {
      id: 4,
      title: "속초점",
      addr: "강원특별자치도 속초시 동해대로 4030 113~114호 삼송빵집 속초점",
      tel: "033-635-3088",
      imgSrc: "/images/main/sec5-slide-4.jpg",
      imgAlt: "sec5-slide-4.jpg",
    },
    {
      id: 5,
      title: "강남 대치점",
      addr: "서울 강남구 선릉로 319 1층 삼송빵집 강남대치점",
      tel: "02-556-9308",
      imgSrc: "/images/main/sec5-slide-5.png",
      imgAlt: "sec5-slide-5.png",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="flex flex-col pb-[100px] min-h-screen ">
      <article className="bg-[url(/images/main/mstore-bg.png)] py-[100px] text-center">
        <div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[60px] font-bold leading-[72px] text-white">
            <span className="text-[70px] font-extrabold text-[#f5b335] ">줄서서 먹는</span>
            삼송빵집
          </h2>
        </div>
        <ul className="flex justify-center flex-wrap mt-[20px] text-white">
          <li
            data-aos="zoom-in"
            data-aos-delay="400"
            className="py-[5px] px-[30px] text-[30px] font-bold leading-[39px]"
          >
            서울·경인 <span className="text-[40px] font-['Cafe24Decobox'] text-[#f5b335]">26</span>개점
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="600"
            className="py-[5px] px-[30px] text-[30px] font-bold leading-[39px]"
          >
            대구·경상 <span className="text-[40px] font-['Cafe24Decobox'] text-[#f5b335]">15</span>개점
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="700"
            className="py-[5px] px-[30px] text-[30px] font-bold leading-[39px]"
          >
            충청·전라 <span className="text-[40px] font-['Cafe24Decobox'] text-[#f5b335]">3</span>개점
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="800"
            className="py-[5px] px-[30px] text-[30px] font-bold leading-[39px]"
          >
            강원·제주 <span className="text-[40px] font-['Cafe24Decobox'] text-[#f5b335]">3</span>개점
          </li>
        </ul>
      </article>
      <div className="relative w-[1600px] mx-auto">
        <div
          data-aos="flip-up"
          data-aos-delay="400"
          className="w-[90%] bg-[#afa09a] max-w-[784px] leading-[80px] ml-[20%] mt-[-40px] rounded-[50px] flex"
        >
          <input
            type="text"
            className="h-[80px] w-[calc(100%-80px)] border-none outline-none leading-[80px] text-white text-[20px] px-[30px]"
            placeholder="내 주변 가까운 삼송빵집을 찾아보세요!"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className="absolute top-0 right-0 cursor-pointer bg-[url(/images/main/msearch.png)] w-[80px] h-[80px]"
          ></button>
        </div>
        <article className="py-[60px] flex flex-wrap">
          <div className="w-[calc(100%-1222px)]">
            <h3
              data-aos="fade-left"
              data-aos-delay="200"
              className="pt-[35px] text-[60px] text-[#512d1e] font-bold leading-[72px] "
            >
              <span className="text-[70px] text-[#f5b335] font-extrabold">신규</span> <br />
              오픈매장
            </h3>
            <p
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-[18px] leading-[25.2px] pt-[20px] font-semibold text-[#512d1e] opacity-40"
            >
              줄서서 먹는 화제의 삼송빵집! <br /> 점주님의 새로운 도전을 축하드립니다.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="w-[1222px]">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop
              navigation={{
                nextEl: ".slide-button-next", // 다음 버튼
                prevEl: ".slide-button-prev", // 이전 버튼
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="pb-[30px]"
            >
              {slideItems.map((item) => (
                <SwiperSlide>
                  <a href="#!">
                    <Image src={item.imgSrc} alt={item.imgAlt} width={378} height={251} className="rounded-[10px]" />
                    <h3 className="mt-[20px] mb-[10px] text-[24px] font-bold text-[#512d1e]">{item.title}</h3>
                    <p className="flex font-semibold text-[#847169]">
                      <MapPin size={16} fill="#512d1e" />
                      <span className="pl-[10px]">{item.addr}</span>
                    </p>
                    <p className="flex font-semibold text-[#847169] mt-[7px] font-['Cafe24Decobox'] leading-[23px] items-center">
                      <Phone size={16} fill="#512d1e" color="#512d1e" />
                      <span className="pl-[10px]">{item.tel}</span>
                    </p>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-[75%] left-[-31%] flex justify-center cursor-pointer">
              <div className="bg-[url('/images/main/store_prev.png')] slide-button-prev h-[60px] w-[60px]"></div>
              <div className="bg-[url('/images/main/store_next.png')] slide-button-next h-[60px] w-[60px]"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
