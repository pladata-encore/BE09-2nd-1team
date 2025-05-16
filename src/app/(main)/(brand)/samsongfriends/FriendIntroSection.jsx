"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FriendIntroSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null); // 이미지 참조용
  const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 상태

  useEffect(() => {
    if (!imageLoaded || !sectionRef.current) return;

    const image = imageRef.current;
    const paragraphs = sectionRef.current.querySelectorAll(".fade-in-up");

    // 이미지 줌인 애니메이션
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // 각 문단(덩어리)별 애니메이션
    paragraphs.forEach((p) => {
      gsap.fromTo(
        p,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // 위치 다시 계산 (이미지 로딩 이후)
    ScrollTrigger.refresh();
  }, [imageLoaded]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center w-full max-w-4xl mx-auto mt-12"
    >
      <Image
        src="/images/samsongfriends_images/friendall.png"
        alt="friendall"
        width={988}
        height={300}
        className="object-contain zoom-in"
        ref={imageRef}
        onLoad={() => setImageLoaded(true)} // 이미지 로드되면 애니메이션 실행
      />

      <p className="mt-4 font-semibold text-center text-7xl fade-in-up">
        <span className="font-bold text-amber-200">삼송프렌즈</span>
        <span className="text-black">를 소개합니다</span>
      </p>

      <div className="mt-4 space-y-6 text-base text-center text-gray-700">
        {/* 첫 번째 문단 덩어리 */}
        <div className="space-y-2 text-lg leading-relaxed tracking-wide fade-in-up">
          <p>우주 최강 제빵 사관학교 삼송 스쿨에 다니는 삼송 친구들 이야기.</p>
          <p>
            최고의 원료, 최고의 손맛, 빵에 대한 우주 최강 지식이 아니고서는 아무나 들어갈 수 없는 학교이다.
          </p>
        </div>

        {/* 두 번째 문단 덩어리 */}
        <div className="space-y-2 text-lg leading-relaxed tracking-wide fade-in-up">
          <p>
            제빵가문의 5대 손자 매력남 알코니, 언제나 감동하는 감격토끼 아리, 도시에서 온 쿨가이 까모,
          </p>
          <p>
            자유와 여유를 즐기는 낙천주의자 댄싱 모모찌, 제빵보다 탐정놀이가 더 재미있다는 로케와 가루까지!
          </p>
          <p className="mb-9">여섯 친구들이 엮어가는 말랑말랑 리얼 제빵 학교 이야기</p>
        </div>
      </div>
    </div>
  );
}

export default FriendIntroSection;
