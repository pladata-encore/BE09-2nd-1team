"use client";
import React, { useState } from "react";
import Sec4best from "./components/Sec4best";
import Sec4other from "./components/Sec4other";
import sec4product from "./data/Sec4product";

export default function Section04() {
  const [tab, setTab] = useState("best");

  return (
    <section className="flex flex-col py-[100px] min-h-screen px-[30px] bg-[#fffbf2]">
      <article className="mb-[100px] flex justify-between items-end">
        <div>
          <h2 className="font-['Cafe24Decobox'] text-[70px] leading-[70px] text-[#512d1e]">
            delicious
            <br className="hidden" />
            <span className="text-[80px] ml-4 text-[#f5b335]">MENU</span>
          </h2>
        </div>

        <div className="flex gap-5 pb-[7px]">
          <button
            onClick={() => setTab("best")}
            className={`py-[8px] px-[24px] border-4 cursor-pointer border-[#512d1e] rounded-[50px] ${
              tab === "best" ? "bg-[#512d1e] text-white" : ""
            }`}
          >
            <span className="font-['Cafe24Decobox'] text-[22px] font-bold">
              best
            </span>
          </button>
          <button
            onClick={() => setTab("other")}
            className={`py-[8px] px-[24px] border-4 cursor-pointer border-[#512d1e] rounded-[50px] ${
              tab === "other" ? "bg-[#512d1e] text-white" : ""
            }`}
          >
            <span className="font-['Cafe24Decobox'] text-[22px] font-bold">
              other things
            </span>
          </button>
        </div>
      </article>

      <article>
        {tab === "best" && <Sec4best />}
        {tab === "other" && <Sec4other />}
      </article>
    </section>
  );
}
