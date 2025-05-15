import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#38312e] w-[100%] h-[250px] py-[3%] text-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-[30px]">
          <Image src={"/icons/f_logo.png"} width={240} height={45} alt="푸터 로고" />
        </h1>
        <ul className="flex justify-center gap-[30px] mb-[10px]">
          <li className="flex items-center">
            <Link
              className="flex items-center gap-[5px]"
              href="https://www.instagram.com/samsong_bakery/?igshid=ZWQyN2ExYTkwZQ%3D%3D"
              target="_blank"
            >
              <Image src="/icons/ft-insta.png" width={25} height={25} alt="인스타 로고" />
              <p className="text-[#7e7572] font-medium">삼송빵집</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="flex items-center gap-[5px]"
              href="https://www.instagram.com/samsong1957/?igshid=ZWQyN2ExYTkwZQ%3D%3D"
              target="_blank"
            >
              <Image src="/icons/ft-insta.png" width={25} height={25} alt="인스타 로고" />
              <p className="text-[#7e7572] font-medium">삼송1957</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="flex items-center gap-[5px]" href="https://www.youtube.com/@ssbnc" target="_blank">
              <Image src="/icons/ft-ytb.png" width={25} height={25} alt="유튜브 로고" />
              <p className="text-[#7e7572] font-medium">유튜브</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="flex items-center gap-[5px]"
              href="https://blog.naver.com/samsongbakery1957"
              target="_blank"
            >
              <Image src="/icons/ft-blog.png" width={25} height={25} alt="블로그 로고" />
              <p className="text-[#7e7572] font-medium">블로그</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="flex items-center gap-[5px]" href="https://pf.kakao.com/_cRxcxixl" target="_blank">
              <Image src="/icons/ft-kakao.png" width={25} height={25} alt="카카오 로고" />
              <p className="text-[#7e7572] font-medium">카카오</p>
            </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center text-[#625956]">
          <p className="px-[10px]">(주)삼송비엔씨</p>
          <p className="px-[10px]">대표이사 : 박성욱</p>
          <p className="px-[10px]">주소 : 대구광역시 수성구 용학로 25길 24</p>
          <p className="px-[10px]">대표전화 : 053-556-3030</p>
          <p className="px-[10px]">팩스번호 : 053-556-3038</p>
          <p className="px-[10px]">사업자등록번호 : 720-87-00099</p>
        </div>
        <div>
          <p className="opacity-50 text-[#625956] text-sm">Copyright SAMSONG BNC all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
