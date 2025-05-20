"use client";

export default function CardSection({ store }) {
  if (!store) return null;

  return (
    <>
      <div className="flex items-center justify-between p-4 mt-6 bg-white rounded-lg shadow-md min-h-[120px]">
        {/* 매장 정보 */}
        <div className="flex items-center w-full max-w-sm space-x-4">
          <img src="/icons/(store)/markerStar2.png" alt="매장" className="w-4 h-5" />
          <div className="text-sm text-gray-700">
            <div className="text-lg font-extrabold text-black">
              {store.title.split(" ")[0]}
            </div>
            <div className="text-lg font-semibold">{store.title.split(" ").slice(1).join(" ")}</div>
            <p className="text-sm text-gray-600">{store.address}</p>
          </div>
        </div>

       
        <div className="flex items-center justify-center gap-4 min-w-[220px]">
          {/* 주차 가능 */}
          <div title="주차 가능">
            <img src="/icons/(store)/ico3.png" alt="주차가능" className="w-12 h-15 cursor-default" />
          </div>


          {/* 네이버 예약 */}
          {store.naverReserveUrl ? (
            <a
              href={store.naverReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/(store)/ico1.png" alt="네이버예약" className="w-12 h-15" />
            </a>
          ) : null}

          {/* 네이버 로드뷰 또는 카카오 로드뷰 */}
          {store.naverRoadViewUrl ? (
            <a
              href={store.naverRoadViewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/(store)/ico9.png" alt="네이버 로드뷰" className="w-12 h-15" />
            </a>
          ) : (
            <a
              href={`https://map.naver.com/link/roadview/${store.lat},${store.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/(store)/ico9.png" alt="카카오 로드뷰" className="w-12 h-15" />
            </a>
          )}

          {/* 네이버 지도 */}
          {store.naverMapUrl ? (
            <a
              href={store.naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/(store)/ico7.png" alt="네이버지도" className="w-12 h-15" />
            </a>
          ) : null}
        </div>

        {/* 전화번호 */}
        <div className="text-base font-semibold text-gray-800 min-w-[100px] text-center">
          📞 {store.phone}
        </div>
      </div>
    </>
  );
}
