"use client"

export default function StoreDetailTable({
  title = "삼송빵집 본점",
  phone = "053) 254-4064",
  address = "대구시 중구 중앙대로 397 (동성로3가 1-3)",
  hours = "AM 08:00 ~ PM 22:00",
  parking = "주차불가 지역 (중앙로 대중교통 전용지구)",
  other = "제품 소진 시 조기 마감",
}) {
  return (
    <section className="w-full max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        <div className="text-3xl font-light text-gray-300">Samsong Bakery</div>
      </div>

      <hr className="border-t border-gray-200 mb-4" />

      <div className="space-y-6">
        <div className="flex">
          <div className="w-32 font-medium text-gray-700">대표번호</div>
          <div>{phone}</div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex">
          <div className="w-32 font-medium text-gray-700">주소</div>
          <div>{address}</div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex">
          <div className="w-32 font-medium text-gray-700">영업시간</div>
          <div>{hours}</div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex">
          <div className="w-32 font-medium text-gray-700">주차여부</div>
          <div>{parking}</div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex">
          <div className="w-32 font-medium text-gray-700">기타</div>
          <div>{other}</div>
        </div>
      </div>

      <hr className="border-t border-gray-200 mt-6" />
    </section>
  )
}
