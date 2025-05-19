//검색 결과 페이지

"use client";

import React from "react";
import StoreLocationSection from "@/app/(main)/(store)/others/components/StoreLocationSection";

export default function StorePage() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      <main className="flex flex-col pt-[110px]">
        <StoreLocationSection />
      </main>
    </div>
  );
}
