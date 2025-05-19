import React from "react";

export default function Organization({ src, alt }) {
  return (
    <>
      {/* 상단 이미지 영역 */}
      <div className="relative w-full h-[580px] overflow-hidden bg-gray-900">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="조직도 페이지"
          className="object-cover w-full h-full animate-fade-in"
        />
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <span className="text-6xl font-bold text-white drop-shadow-lg">
            조직도
          </span>
        </div>
      </div>

      {/* 조직도 이미지 */}
      <section className="p-8 bg-white intro-animation">
        <div className="relative w-full h-[600px] overflow- justify-center bg-gray-900">
          <img
            src="/images/greeting/intro4-img_230627.png"
            alt=""
            className="object-contain w-auto max-w-full h-auto max-h-[600px] animate-fade-in"
          />
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in"></div>
        </div>
      </section>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="/images/greeting/intro4-img_230627.png"
          style={{ width: "auto", height: "723px" }}
          //listly-xywh="623.125,710.234375,1135,723.984375"
          alt="Centered Image"
        />
      </div> */}
    </>
  );
}
