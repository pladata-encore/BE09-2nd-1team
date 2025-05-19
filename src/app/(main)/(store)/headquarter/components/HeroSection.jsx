"use client"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[580px] w-full">
      <Image
        src="/images/(store)/s_von.jpg"
        alt="삼송빵집 배경 이미지"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-semibold text-white"
             data-aos="fade-up"
             data-aos-delay="100"
             data-aos-duration="800">삼송빵집 본점</h1>
      </div>
    </section>
  )
}
