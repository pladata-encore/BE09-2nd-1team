import Section01 from "@/components/main/Section01";
import Section02 from "@/components/main/Section02";
import Section03 from "@/components/main/Section03";
import Section04 from "@/components/main/Section04";
import Section05 from "@/components/main/Section05";
import React from "react";

export default function MainPage() {
  return (
    <div className="w-full min-h-screen overflow-hidden text-base">
      <main className="flex w-full flex-col pt-[110px]">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </main>
    </div>
  );
}
