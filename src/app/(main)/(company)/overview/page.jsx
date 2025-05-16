import React from "react";

export default function page() {
  return <>
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
      <div>since 1957</div>
  
  </>;
}
