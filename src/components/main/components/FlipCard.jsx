import "../style/flipCard.css";

export default function FlipCard({ breadFrontImg, titleKo, titleEn, backContent, breadBackImg }) {
  return (
    <div className="w-[360px] h-[412px] perspective mb-[20px]">
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d hover:rotate-y-180">
        {/* 앞면 */}
        <div className="absolute w-full h-full overflow-hidden shadow-md bg-[#fffdf1] backface-hidden rounded-xl">
          <div className="pt-[30px] pl-[30px]">
            <h3 className="text-[32px] font-bold text-[#512d1e]">{titleKo}</h3>
            <p className=" text-[#512d1e] font-['Cafe24Decobox'] mt-[14px] text-xl uppercase leading-6 opacity-30 h-[48px]">
              {titleEn}
            </p>
          </div>
          <img src={breadFrontImg} alt={titleKo} className="object-cover" />
        </div>
        {/* 뒷면 */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[url('/images/main/bgb-bg.png')] text-[#512d1e] rounded-xl flex flex-col justify-center items-center shadow-md">
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