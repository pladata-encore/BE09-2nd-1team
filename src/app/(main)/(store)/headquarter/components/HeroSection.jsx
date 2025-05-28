"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[45vw] w-full">
      <div className="absolute inset-0">
        <Image src="/images/(store)/s_von.jpg" alt="삼송빵집 배경 이미지" fill className="object-cover " priority />
      </div>
      <div className="relative flex items-center justify-center h-full">
        <h2 className="pt-[100px] text-6xl font-bold text-white" data-aos="fade-up" data-aos-delay="300">
          삼송빵집 본점
        </h2>
      </div>
    </section>
  );
}
