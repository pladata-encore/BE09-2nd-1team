"use client";


export default function StoreDetailTable({
  title = "삼송빵집 본점",
  phone = "053) 254-4064",
  address = "대구시 중구 중앙대로 397 (동성로3가 1-3)",
  hours = "AM 08:00 ~ PM 22:00",
  parking = "주차불가 지역 (중앙로 대중교통 전용지구)",
  other = "제품 소진 시 조기 마감",
}) {
  return (
    <section className="w-full max-w-4xl py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#5C2E14]">{title}</h2>
        <div className="text-3xl font-light text-gray-300">Samsong Bakery</div>
      </div>

      <div className="border-t border-b border-gray-200">
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
          <div className="px-4 py-5 font-medium text-gray-700">대표번호</div>
          <div className="px-4 py-5">{phone}</div>
        </div>

        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
          <div className="px-4 py-5 font-medium text-gray-700">주소</div>
          <div className="px-4 py-5">{address}</div>
        </div>

        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
          <div className="px-4 py-5 font-medium text-gray-700">영업시간</div>
          <div className="px-4 py-5">{hours}</div>
        </div>

        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
          <div className="px-4 py-5 font-medium text-gray-700">주차여부</div>
          <div className="px-4 py-5">{parking}</div>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <div className="px-4 py-5 font-medium text-gray-700">기타</div>
          <div className="px-4 py-5">{other}</div>
        </div>
      </div>
    </section>
  )
}
