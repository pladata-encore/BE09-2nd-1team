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

    
    </main>
  )
}
