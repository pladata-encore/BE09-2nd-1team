"use client";
import React from "react";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Section06 from "./components/Section06";

export default function Page() {
  return (
    <div className="w-full min-h-screen overflow-hidden text-base">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </div>
  );
}
