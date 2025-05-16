import React from "react";

export default function page() {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="오시는 길"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">오시는 길</span>
        </div>
      </div>

      <div className="">
        <img
          src="/images/location/734.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white"></span>
        </div>
      </div>
    </>
  );
}
