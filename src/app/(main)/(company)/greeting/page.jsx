import React from "react";

export default function page() {
  return (
    <>
      {/* <div className="absolute inset-0 flex flex-col justify-center flexitems-center">
        
        <span className="m-4 text-xl text-white ml-5font-bold">
          <br />
        </span>
      </div> */}
      <div className="relative w-full h-[500px]">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="인사말"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">인사말</span>
        </div>
      </div>
      <p></p>
      <div classname="absolute relative flex flex-row w-full h-full ">
        <div>
          <h3
            data-aos="fade-left"
            data-aos-delay="100"
            class="aos-init aos-animate"
          >
            <span className="m-4 font-serif text-4xl font-bold fade-left text-brown">
              since
            </span>
            <span className="m-4 font-serif text-4xl font-bold fade-left text-yellow">
              1957
            </span>
          </h3>
        </div>
        <div className="flex flex-row">
          <h3
            data-aos="fade-left"
            data-aos-delay="100"
            class="aos-init aos-animate"
          ></h3>
          <span className="m-4 ml-5 text-xl font-bold text-black">
            1957년 대구 남문시장에서 삼송제과로 시작된 삼송빵집은 3대를 이어
            대구를 대표하는 추억과 역사의 빵집으로 많은 사랑을 받고 있습니다.
          </span>
        </div>
        <div className="flex flex-row">
          <span className="m-4 ml-5 text-xl font-bold text-black">
            정직한 경영과 성실한 제품 개발이 국내 최초의 오븐에 구운 고로케와
            통옥수수빵이 탄생과 성공으로 이어졌고 오늘날 한국을 대표하는
            베이커리 브랜드 중 하나인 “삼송빵집”을 있게 했습니다.
          </span>
        </div>
        <div className="flex flex-row">
          <span className="m-4 ml-5 text-xl font-bold text-brown">
            정직한 경영과 성실한 제품 개발이 국내 최초의 오븐에 구운 고로케와
            통옥수수빵이 탄생과 성공으로 이어졌고 오늘날 한국을 대표하는
            베이커리 브랜드 중 하나인 “삼송빵집”을 있게 했습니다.
          </span>
          <div className="flex flex-row">
            <span>대표이사 박성욱</span>
          </div>
        </div>
        <div>
          <img
            src="\images\greeting\intro_bakery.png"
            alt=""
            className="p-4 bg-blue-500 object-cover w-[300px] h-full "
          />
        </div>
      </div>
    </>
  );
}
