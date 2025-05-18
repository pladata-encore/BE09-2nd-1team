"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function StoreDetailTable({
  title = "삼송빵집 본점",
  phone = "053) 254-4064",
  address = "대구시 중구 중앙대로 397 (동성로3가 1-3)",
  hours = "AM 08:00 ~ PM 22:00",
  parking = "주차불가 지역\n(중앙로 대중교통 전용지구)",
  other = "제품 소진 시 조기 마감",
}) {
  const rows = [
    { label: "대표번호", value: phone },
    { label: "주소", value: address },
    { label: "영업시간", value: hours },
    { label: "주차여부", value: parking },
    { label: "기타", value: other },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto pt-10 pb-12 px-4 relative mt-20"
             data-aos="fade-up"
             data-aos-delay="100"
             data-aos-duration="600">
      
      <div className="absolute top-12 right-5 text-[30px] font-serif text-gray-300 opacity-20 pointer-events-none select-none"
           data-aos="fade-in"
           data-aos-delay="300">
        Samsong Bakery
      </div>

      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-medium text-black">{title}</h2>
      </div>

      <hr className="border-1 border-black mb-5" />

      {/* Info Rows */}
      <div className="space-y-6 text-sm sm:text-base">
        {rows.map((row, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
              <div className="w-32 font-semibold text-gray-700 shrink-0">
                {row.label}
              </div>
              <div className="whitespace-pre-line text-gray-800">{row.value}</div>
            </div>
            <hr className="mt-4 border-t border-gray-200" />
          </div>
        ))}
      </div>
       <hr className="border-1 border-black mb-9" />
    </section>
  );
}
