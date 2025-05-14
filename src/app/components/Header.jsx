import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="h-[110px] flex items-center bg-white">
      <div className="h-[100%] container flex justify-between items-center">
        <div className="h-[100%] flex items-center">
          <Link href="/">
            <Image src={"/icons/logo.png"} width={197} height={60} alt="삼송빵집 로고" />
          </Link>
        </div>
        <div className="h-[100%] flex items-center">
          <ul className="h-[100%] flex justify-around items-center w-full bg-white text-black">
            <li className="h-full flex items-center px-[64px] relative group">
              <Link href="/story" className="h-full flex items-center py-2 text-[20px] text-[#512d1e] font-semibold">
                삼송빵집
              </Link>

              {/* 삼송빵집 서브 메뉴 */}
              <ul className="absolute left-0 top-[100%] opacity-0 translate-y-[-20px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out bg-[#eca51d] shadow-lg z-10 min-w-[165px] text-center">
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/story" className="text-white text-base w-[165px]">
                    브랜드스토리
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/identify" className="text-white text-base w-[165px]">
                    브랜드 아이덴티티
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/samsongfriends" className="text-white text-base w-[165px]">
                    삼송프렌즈 소개
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/system" className="text-white text-base w-[165px]">
                    운영시스템
                  </Link>
                </li>
              </ul>
            </li>

            <li className="h-full flex items-center px-[64px] relative group">
              <Link href="/product" className="block py-2 text-[20px] text-[#512d1e] font-semibold">
                제품소개
              </Link>

              {/* 제품소개 서브 메뉴 */}
              <ul className="absolute left-0 top-[100%] opacity-0 translate-y-[-20px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out bg-[#eca51d] shadow-lg z-10 min-w-[165px] text-center">
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/corn-bread" className="flex justify-center text-white text-base w-[165px]">
                    통옥수수빵
                    <span>
                      <Image
                        src={"/icons/ico_best.png"}
                        className="ml-[3px]"
                        width={30}
                        height={15}
                        alt="베스트 아이콘"
                      />
                    </span>
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/croquette" className="flex justify-center text-white text-base w-[165px]">
                    오븐에 구운 고로케
                    <span>
                      <Image
                        src={"/icons/ico_best.png"}
                        className="ml-[3px]"
                        width={30}
                        height={15}
                        alt="베스트 아이콘"
                      />
                    </span>
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/bakery" className="text-white text-base w-[165px]">
                    베이커리
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/drinks" className="text-white text-base w-[165px]">
                    커피/음료/디저트
                  </Link>
                </li>
              </ul>
            </li>
            <li className="h-full flex items-center px-[64px] relative group">
              <Link href="/samgsong-1957" className="block py-2 text-[20px] text-[#512d1e] font-semibold">
                매장안내
              </Link>

              {/* 매장안내 서브메뉴 */}
              <ul className="absolute left-0 top-[100%] opacity-0 translate-y-[-20px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out bg-[#eca51d] shadow-lg z-10 min-w-[165px] text-center">
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/samgsong-1957" className="text-white text-base w-[165px]">
                    SAMGSONG-1957
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/headquarter" className="text-white text-base w-[165px]">
                    삼송빵집 본점
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/others" className="text-white text-base w-[165px]">
                    삼송빵집
                  </Link>
                </li>
              </ul>
            </li>
            <li className="h-full flex items-center px-[64px] relative group">
              <Link href="/greeting" className="block py-2 text-[20px] text-[#512d1e] font-semibold">
                회사소개
              </Link>

              {/* 회사소개 서브메뉴 */}
              <ul className="absolute left-0 top-[100%] opacity-0 translate-y-[-20px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out bg-[#eca51d] shadow-lg z-10 min-w-[165px] text-center">
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/greeting" className="text-white text-base w-[165px]">
                    인사말
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/overview" className="text-white text-base w-[165px]">
                    기업개요
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/philosophy" className="text-white text-base w-[165px]">
                    기업이념
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/organization" className="text-white text-base w-[165px]">
                    조직도
                  </Link>
                </li>
                <li className="flex justify-center items-center whitespace-nowrap h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200">
                  <Link href="/location" className="text-white text-base w-[165px]">
                    오시는길
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div></div>
      </div>
    </header>
  );
}
