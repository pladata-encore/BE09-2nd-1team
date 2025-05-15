// 메뉴 데이터
const menuData = [
  {
    title: "삼송빵집",
    items: [
      { href: "/story", label: "브랜드스토리" },
      { href: "/identify", label: "브랜드 아이덴티티" },
      { href: "/samsongfriends", label: "삼송프렌즈 소개" },
      { href: "/system", label: "운영시스템" },
    ],
  },
  {
    title: "제품소개",
    items: [
      { href: "/product", label: "제품소개" },
      {
        href: "/corn-bread",
        label: "통옥수수빵",
        hasIcon: true,
        iconSrc: "/icons/ico_best.png",
        iconAlt: "베스트 아이콘",
      },
      {
        href: "/croquette",
        label: "오븐에 구운 고로케",
        hasIcon: true,
        iconSrc: "/icons/ico_best.png",
        iconAlt: "베스트 아이콘",
      },
      { href: "/bakery", label: "베이커리" },
      { href: "/drinks", label: "커피/음료/디저트" },
    ],
  },
  {
    title: "매장안내",
    items: [
      { href: "/samgsong-1957", label: "SAMSONG 1957" },
      { href: "/headquarter", label: "삼송빵집 본점" },
      { href: "/others", label: "삼송빵집" },
    ],
  },
  {
    title: "회사소개",
    items: [
      { href: "/greeting", label: "인사말" },
      { href: "/overview", label: "기업개요" },
      { href: "/philosophy", label: "기업이념" },
      { href: "/organization", label: "조직도" },
      { href: "/location", label: "오시는길" },
    ],
  },
];
export default menuData;
