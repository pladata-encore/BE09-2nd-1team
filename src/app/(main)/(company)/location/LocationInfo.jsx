import React from "react";

const LocationInfo = () => {
  return (
    <div className="w-[1400px] px-4 py-12  text-gray-800 space-y-10">
      {/* 본사 */}
      <section className="p-8 relative h-[112px]">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">본사</h2>
          <div className="ml-8">
            <p className="mb-1 text-[20px] font-black">
              대구광역시 수성구 욱학로 25길 24
            </p>
            <p className="text-sm text-gray-600">
              24, Yonghak-ro 25-gil, Suseong-gu, Daegu, Republic of Korea
            </p>
          </div>
        </div>
        <div className="absolute text-sm text-right bottom-4 right-6">
          <p>
            <span className="font-semibold">TEL</span> 053-556-3030
          </p>
          <p>
            <span className="font-semibold">FAX</span> 053-556-3038
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 지하철 */}
      <section className="p-8 relative h-[118.79px]">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">지하철</h2>
          <ul className="ml-8 list-disc list-inside text-[16px] space-y-1">
            <li>3호선 지산역 [도보 10분]</li>
            <li>3호선 수성못역 [도보 15분]</li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 버스 */}
      <section className="p-8 relative h-[409.27px]">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">버스</h2>
          <ul className="ml-8 space-y-2 text-[16px] list-disc list-inside">
            <li><span>불교한방병원 [앞1]</span>: 간선 410-1</li>
            <li><span>불교한방병원 [건너1]</span>: 간선 410</li>
            <li><span>불교한방병원 [앞2]</span>: 간선 410, 지선 수성1</li>
            <li><span>불교한방병원 [건너2]</span>: 간선 410, 지선 수성1-1</li>
            <li><span>두산스포츠 [건너]</span>: 간선 410-1, 지선 수성1</li>
            <li><span>한샘교회 [건너]</span>: 간선 410, 564 / 지선 수성1-1, 수성3-1</li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>

      {/* 차량 */}
      <section className="relative h-[112px]">
        <div className="flex">
          <h2 className="text-[18px] font-bold min-w-[60px]">차량</h2>
          <div className="ml-8 text-[16px]">
            <p className="mb-1">삼송1957 매장 주차장 이용</p>
            <p className="text-sm text-gray-600">대구 수성구 수성못2길 26 삼송1957</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
      </section>
    </div>
  );
};

export default LocationInfo;
