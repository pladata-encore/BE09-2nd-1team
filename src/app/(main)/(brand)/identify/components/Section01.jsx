"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Section01() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative h-[580px] flex justify-center items-center bg-[url('/images/identity/s_visual12.jpg')] w-full bg-cover bg-no-repeat">
      <h2 data-aos="fade-up" data-aos-delay="300" className="font-bold leading-[60px] text-[60px] text-white">
        브랜드 아이덴티티
      </h2>
    </section>
  );
}
