import Section01 from "@/components/main/Section01";
import Section02 from "@/components/main/Section02";
import React from "react";

export default function MainPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-base">
      <main className="flex w-full flex-col pt-[110px]">
        <Section01 />
        <Section02 />
      </main>
    </div>
  );
}
