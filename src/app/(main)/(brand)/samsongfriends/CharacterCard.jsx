"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const characters = [
  {
    bgColor: "#25BDAD",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend1.png",
    nameKr: "알코니",
    nameEn: "Alconi",
    description: [
      "옥수수를 좋아하고 호기심이 많아요. 자신감 넘치고 톡톡 터지는 매력의 소유자",
      "모든 일에 대범하고 대체로 쿨한 성격. 가끔은 너무 웃겨서 사람을 빵 터지게 해요.",
      "제빵 가문의 5대 손자로 막강한 실력파이나 현재까진 비밀! 귀여운 아리와 커플!",
    ],
    likes: "옥수수, 아리",
    dislikes: "제빵가문 5대 손자인 사실이 밝혀지는 것",
    hobby: "친구들을 행복하게 하기 위한 개그 짜기",
    specialty: "신선하고 건강한 빵 만들기",
  },
  {
    bgColor: "#E3569A",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend2.png",
    nameKr: "아리",
    nameEn: "Ari",
    description: [
      "마음이 착하고 사려가 깊어요. 항상 발랄한 분위기 메이커에요. 듬직한 알코니와 커플",
      "친구들과 수다 떠는 것을 좋아해서 가끔 수다가 길어지면 밤을 새기도 하는 소녀!",
      "빵과 쿠키를 만들어서 선물하는 것을 좋아하지만 맛없어 하면 살짝 토라지기도 해요.",
    ],
    likes: "수다떨기, 알코니",
    dislikes: "혼자 있는 것",
    hobby: "빵과 쿠키를 만들어 친구에게 선물하기",
    specialty: "특급 애교",
  },
  {
    bgColor: "#F7DF3A",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend3.png",
    nameKr: "모모찌",
    nameEn: "Momozzi",
    description: [
      "둥가둥가 춤추고 노는 것을 즐기는 최강 낙천주의자",
      "포동포동한 몸통으로 데굴데굴 구르는 것을 좋아하는 귀염둥이!",
      "친구들의 이야기를 잘 들어주는 고민 해결사랍니다.",
    ],
    likes: "춤추기, 모모찌(뭐먹지?)라고 말하기",
    dislikes: "경쟁",
    hobby: "데굴데굴 구르기",
    specialty: "친구들의 고민 들어주기",
  },
  {
    bgColor: "#ABABAD",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend4.png",
    nameKr: "까모",
    nameEn: "KKamo",
    description: [
      "조용하고 냉철한 아는 것이 많지만 의외로 허당끼가 있는 차.도.남!",
      "1등을 하고싶어 하지만 허당끼 덕분에 항상 2등을 해요.",
      "정보 수집과 문제 해결에 알 수 없는 신비주의가 있고 공상에 빠지는 걸 좋아해요.",
      "겉으론 틱틱 대면서도 뒤에선 따뜻하게 사람들을 챙겨주는 전형적인 츤데레!",
    ],
    likes: "자기자신, 공상에 빠지기",
    dislikes: "2등",
    hobby: "셀카 찍기",
    specialty: "틱틱 거리기",
  },
  {
    bgColor: "#EDC79E",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend5.png",
    nameKr: "로케",
    nameEn: "Roke",
    description: [
      "똑똑하고 장난을 좋아하는 개구쟁이",
      "못 하는 운동이 없는 스포츠 광이며, 야채와 우리 한우를 좋아하는 건강한 로케.",
      "친구들에게 골탕을 먹이려고 하지만 결국은 친구들을 도와주는 일이 되어버리는 착한 개구쟁이랍니다.",
    ],
    likes: "야채, 우리 한우",
    dislikes: "기름에 튀긴 음식, 가만히 있기",
    hobby: "호시탐탐 장난치기, 어쩌다 탐정놀이",
    specialty: "운동",
  },
  {
    bgColor: "#C89C83",
    textColor: "white",
    imageSrc: "/images/samsongfriends_images/friend6.png",
    nameKr: "가루",
    nameEn: "Garoo",
    description: [
      "항상 로케를 따라 다니는 귀여운 빵가루! 가루",
      "그날그날 기분에 따라 성격이 달라지는 예측불가 가루군",
    ],
    likes: "로케 머리 위에 앉기",
    dislikes: "오래 생각하기",
    hobby: "로케 껌딱지",
    specialty: "찰싹 붙어있기",
  },
];

export default function CharacterCard() {
  const imgRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { autoAlpha: 0, scale: 0.8 },
          {
            duration: 1,
            autoAlpha: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });

    textRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { autoAlpha: 0, scale: 0.8 },
          {
            duration: 1,
            autoAlpha: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {characters.map((char, i) => (
        <div
          key={i}
          className={`w-[1600px] h-[573.36px] p-[50px_80px] font-[Pretendard, 'Noto Sans KR', sans-serif] shadow-lg flex flex-col px-40 ${
            i === characters.length - 1 ? "mb-20" : ""
          } ${i >= 3 && i <= 5 ? "py-20" : ""}`}
          style={{ backgroundColor: char.bgColor, color: char.textColor }}
        >
          <div className="flex items-center gap-20">
            <div
              className="flex-shrink-0"
              ref={(el) => (imgRefs.current[i] = el)}
              style={{ opacity: 0 }}
            >
              <img
                src={char.imageSrc}
                alt={char.nameKr}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            <div
              className="flex flex-col max-w-3xl"
              ref={(el) => (textRefs.current[i] = el)}
              style={{ opacity: 0 }}
            >
              <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-white">
                {char.nameKr}{" "}
                <span className="ml-3 text-2xl font-normal">{char.nameEn}</span>
              </h2>
              {char.description.map((line, idx) => (
                <p key={idx} className="text-lg leading-relaxed tracking-wide">
                  {line}
                </p>
              ))}
              <div className="flex flex-col mt-6 space-y-3 text-base text-white">
                <InfoRow label="좋아요" value={char.likes} />
                <InfoRow label="싫어요" value={char.dislikes} />
                <InfoRow label="취미" value={char.hobby} />
                <InfoRow label="특기" value={char.specialty} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center gap-4">
      <span className="min-w-[70px] px-4 py-1 font-semibold bg-black rounded-full bg-opacity-70 text-center ">
        {label}
      </span>
      <span className="text-center">{value}</span>
    </div>
  );
}
