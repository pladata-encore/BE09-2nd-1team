"use client"
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import KakaoMap from "@/components/KakaoMap";
import VideoSection from "./components/VideoSection";
import ProductMenuSection from "./components/ProductMenuSection";
import StoreLocationSection from "./components/StoreLocationSection";


export default function page() {
  return (
    <main className="flex flex-col">

        <HeroSection />
        <VideoSection />
        <ProductMenuSection />
        <StoreLocationSection />

      {/* 사이드 버튼 */}
      <div className="fixed right-0 z-50 transform -translate-y-1/2 top-1/2">
        <div className="flex flex-col items-center p-4 space-y-6 text-white bg-red-600">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="mt-2 text-sm">가맹안내</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="mt-2 text-sm">가맹문의</span>
            <span className="text-xs">1551-3039</span>
            <span className="text-xs">sbnc@ssbnc.kr</span>
          </div>
        </div>
      </div>
    </main>
  )
}
