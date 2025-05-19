import Submenu from "@/components/subMenu/Submenu";
import React from "react";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";

export default function page() {
  return (
    <div className="w-full min-h-screen overflow-hidden text-base">
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
}
