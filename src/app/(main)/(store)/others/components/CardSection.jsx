"use client";

export default function CardSection({store}){

   if (!store) return null;

    return(
        <>
        {/* 대표 매장 정보 카드 */}
          <div className="flex flex-col items-center justify-between p-4 mt-6 space-y-4 bg-white rounded-lg shadow-md md:flex-row md:space-y-0">
            <div className="flex flex-col w-full md:flex-row md:items-center md:space-x-6 md:w-auto">
              <img src="/icons/(store)/markerStar2.png" alt="매장" className="w-4 h-5" />
              <div className="mt-4 text-xl text-gray-700 md:mt-0 whitespace-nowrap">
                <strong className="font-extrabold text-black">{store.title.split(" ")[0]}</strong>{" "}
                <h1 className="font-bold">{store.title.split(" ").slice(1).join(" ")}</h1>
                <p className="text-sm">{store.address}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#"><img src="/icons/(store)/ico1.png" alt="네이버예약" className="w-12 h-12" /></a>
              <a href="#"><img src="/icons/(store)/ico9.png" alt="주차가능" className="w-12 h-12" /></a>
              <a href="#"><img src="/icons/(store)/ico7.png" alt="지도" className="w-12 h-12" /></a>
              <a href="#"><img src="/icons/(store)/ico3.png" alt="로드뷰" className="w-12 h-12" /></a>
            </div>
            <div className="text-base font-semibold text-gray-800">{store.phone}</div>
          </div>
        </>
    )
}