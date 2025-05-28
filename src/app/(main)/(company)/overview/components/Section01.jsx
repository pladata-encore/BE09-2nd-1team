"use client";
import React from "react";

export default function Section01() {
  return (
    <section className="relative pt-[100px] h-[640px] flex justify-center items-center bg-[url('/images/greeting/s_visual6.jpg')] w-full bg-cover bg-no-repeat">
      <div className="relative table w-[90%] h-full z-[2] max-w-[1600px] mx-auto">
        <div className="table-cell text-center text-white align-middle">
          <h2 className="font-bold leading-[60px] text-[60px] text-white">
            <span data-aos="fade-up" data-aos-delay="300">
              기업개요
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
