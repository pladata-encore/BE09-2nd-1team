"use client";
import React from "react";
import { timelineData } from "../data/timeLineData";

export default function Section03() {
  return (
    <section className="w-[96%] pb-[5%] mx-auto relative">
      <div className="before:content-[''] before:absolute before:top-0 before:left-[50%] before:ml-[-0.5px] before:w-[1px] before:h-full before:bg-[#ddd] before:z-[1]">
        <ul className="pt-[5%] relative flex flex-col gap-[48px]">
          {timelineData.map((item, idx) => {
            const isRight = idx % 2 === 0;
            return (
              <li
                key={item.year}
                data-aos="fade-up"
                className={`relative z-[2] w-full flex ${isRight ? "justify-end" : "justify-start"}`}
              >
                <div className={`relative w-[50%] px-[20px] ${isRight ? "text-left" : "text-right"}`}>
                  {/* 점 표시 */}
                  <div
                    className={`absolute top-[20px] ${
                      isRight ? "left-[-10px]" : "right-[-11px]"
                    } w-[21px] h-[21px] bg-[#f5b335] rounded-full border-[6px] border-[#fef7ea] z-10`}
                  />

                  {/* 연도 + 내용 */}
                  <h2 className="text-[44px] pt-[5px] font-['Cafe24Decobox'] text-[#512d1e] font-bold">{item.year}</h2>
                  <dl className="text-[17px] leading-[30px] clear-both">
                    {item.events.map((ev, i) => (
                      <div key={i} className="mb-[10px] clear-both">
                        {ev.month ? (
                          <dt
                            className={`w-[45px] inline-block align-top text-[#212121] font-bold text-[21px] ${
                              isRight ? "float-left" : "float-right"
                            }`}
                          >
                            {ev.month}
                          </dt>
                        ) : null}

                        <dd
                          className={`${
                            ev.month ? "w-[calc(100%-45px)] inline-block align-top" : "w-full block"
                          } text-[#686868] whitespace-pre-line ${isRight ? "text-left" : "text-right"}`}
                        >
                          {ev.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
