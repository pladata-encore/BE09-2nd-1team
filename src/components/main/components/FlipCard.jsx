import { usePathname } from "next/navigation";
import "../style/flipCard.css";

export default function FlipCard({ breadFrontImg, titleKo, titleEn, backContent, breadBackImg }) {
  const pathname = usePathname();

  // 제품소개 페이지에서는 width 300px
  const isProduct =
    pathname === "/bakery" || pathname === "/croquette" || pathname === "/corn-bread" || pathname === "/drinks";

  return (
    <div className={`${isProduct ? "w-[300px]" : "w-[360px]"} h-[412px] mb-[20px] perspective`}>
      <div className="flip-card-inner">
        {/* 앞면 */}
        <div className="front overflow-hidden shadow-md bg-[#fffdf1] rounded-xl">
          <div className="pt-[30px] pl-[30px]">
            <h3 className="text-[32px] font-bold text-[#512d1e]">{titleKo}</h3>
            <p className="text-[#512d1e] font-['Cafe24Decobox'] mt-[14px] text-xl uppercase leading-6 opacity-30 h-[48px]">
              {titleEn}
            </p>
          </div>
          <img src={breadFrontImg} alt={titleKo} className="object-cover" />
        </div>

        {/* 뒷면 */}
        <div className="back bg-[url('/images/main/bgb-bg.png')] text-[#512d1e] flex flex-col justify-center items-center shadow-md rounded-xl">
          <img src={breadBackImg} alt={titleKo} className="object-cover w-[300px]" />
          <div className="pt-[30px] pl-[10px] text-center">
            <h3 className="text-[32px] font-bold text-[#ffd881]">{titleKo}</h3>
            <p className="mx-auto mt-2 text-lg leading-[25.2px] text-white whitespace-pre-line">{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
