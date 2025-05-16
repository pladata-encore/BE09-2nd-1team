import React from "react";

export default function page() {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="기업개요"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">기업개요</span>
        </div>
      </div>
      <p></p>
      <div>since 1957</div>
    </>
  );
}