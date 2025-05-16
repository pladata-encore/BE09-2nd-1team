"use client";
import KakaoMap from "@/components/KakaoMap";

export default function StoreLocationSection(){

    return(
        <>
          {/* 매장 위치 섹션 */}
              <section className="py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="mb-8 text-3xl font-bold text-center">매장 안내</h2>
                    <KakaoMap
                      latitude={35.8714354}
                      longitude={128.601445}
                      title="삼송빵집 1957"
                      address="대구 수성구 동대로 252번길 24"
                      phone="053-556-3030"
                    />
        
                    <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
                      <h3 className="mb-4 text-xl font-bold">삼송빵집 1957 대구점</h3>
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>대구광역시 수성구 동대로 252번길 24</span>
                        </p>
                        <p className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>053-556-3030</span>
                        </p>
                        <p className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-red-600 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>영업시간: 08:00 - 22:00 (연중무휴)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
        </>
    )
}