import Image from "next/image";

export default function ManufacturingSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-10 space-y-24 bg-white md:px-16">
      {/* 삼송 제조공장 (이미지 왼쪽, 텍스트 오른쪽) */}
      <div className="flex flex-col items-center max-w-6xl md:flex-row md:items-start md:w-full">
        {/* 이미지 */}
        <div className="relative z-10 overflow-visible md:w-1/2">
          <div className="relative w-full h-auto">
            <Image
              src="/images/system_images/factory.png"
              alt="삼송 제조 공장"
              width={1500}
              height={1000}
              className="rounded shadow-lg"
            />
            {/* 우측 상단 노란색 강조 박스 */}
            <div className="absolute top-0 right-0 hidden h-40 translate-x-6 -translate-y-6 bg-yellow-400 w-60 -z-10 md:block"></div>
            {/* 배경 텍스트 (SSBNC) */}
            <div
              className="absolute right-0 hidden font-extrabold text-gray-200 pointer-events-none select-none top-1 text-9xl opacity-90 -z-20 lg:block font-PretendardVariable"
              style={{ transform: "translate(calc(100% - 24px), -24px)" }}
            >
              SSBNC
            </div>
          </div>
        </div>
        {/* 텍스트 */}
        <div className="mt-6 text-center md:mt-0 md:pl-16 md:text-left md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold">삼송 제조 공장</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>· HACCP 인증 깨끗한 환경</li>
            <li>· 효율적인 자동화 시스템</li>
            <li>· 라인당 일 최소 생산량 1만개</li>
            <li>· 안전한 생산 관리</li>
          </ul>
        </div>
      </div>

      {/* R&D 연구소 (이미지 오른쪽, 텍스트 왼쪽) */}
      <div className="flex flex-col items-center max-w-6xl md:flex-row-reverse md:items-start md:w-full">
        {/* 이미지 */}
        <div className="relative z-10 overflow-visible md:w-1/2">
          <div className="relative w-full h-auto">
            <Image
              src="/images/system_images/devolopment_lab.png"
              alt="R&D 기술연구소"
              width={1200}
              height={900}
              className="rounded shadow-lg"
            />
            {/* 좌측 상단 노란색 강조 박스 */}
            <div className="absolute top-0 left-0 hidden h-40 translate-x-6 -translate-y-6 bg-yellow-400 w-60 -z-10 md:block"></div>
            {/* 배경 텍스트 (R&D) */}
            <div
              className="absolute hidden font-extrabold text-gray-200 pointer-events-none select-none top-1 text-9xl opacity-90 -z-20 lg:block font-PretendardVariable"
              style={{ transform: "translate(calc(100% - 24px), -24px)" }}
            >
              R&D
            </div>
          </div>
        </div>
        {/* 텍스트 */}
        <div className="mt-6 text-center md:mt-0 md:pr-16 md:text-left md:w-1/2 ">
          <h2 className="mb-6 text-3xl font-bold">R&D 연구소</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>· 시즌 신제품 개발</li>
            <li>· 정기 품질관리 제빵 교육</li>
            <li>· 시즌별 신메뉴 교육</li>
            <li>· 사업장 불시점검 실시</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
