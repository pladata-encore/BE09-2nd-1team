const Products = [
  {
    id: 1,
    name: "통옥수수빵",
    engName : "Flaked Corn Bread",
    description: "한번 맛보면 헤어나올 수 없는 맛! 삼송빵집의 베스트 메뉴, 특제 소스로 맛을 낸 원조 옥수수빵!",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/tongcorn.png",
    imagedetail: "/images/products/tongcorn2.png"
  },
  {
    id: 2,  
    name: "먹물 통옥수수빵",
    engName : "Squid Ink Flaked Corn Bread",
    description: "통옥수수빵과는 또 다른 매력의 옥수수빵! 옥수수와 크림치즈, 베이컨, 각종 야채가 가득한 영양만점 까만 먹물빵",
    price: 3400,
    allergy: "밀, 난류, 우유, 돼지고기, 오징어(오징어먹물)",
    image: "/images/products/blackcorn.png",
    imagedetail: "/images/products/blackcorn2.png"
  },
  {
    id: 3,
    name: "크림치즈빵",
    engName : "Cream Cheese Bread",
    description: "겉과 속이 하얀 크림치즈로 가득! 씹을수록 고소하고 달콤한 크림치즈빵",
    price: 3800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/cheese.png",
    imagedetail: "/images/products/cheese2.png"
  },
  {
    id: 4,
    name: "크림치즈 찰떡빵",
    engName : "Cream Cheese Glutinous Rice Cake Bread",
    description: "크림치즈와 찹쌀떡의 조화! 외국인들이 가장 선호하는 빵",
    price: 3200,
    allergy: "밀, 난류, 우유",
    image: "/images/products/cheesedduk.png",
    imagedetail: "/images/products/cheesedduk2.png"
  },
  {
    id: 5,
    name: "야채 고로케",
    engName : "Vegetable Croquette",
    description: "삼송빵집의 두번째 베스트 메뉴!! 신선한 야채를 가득 넣은 고로케",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/vege.png",
    imagedetail: "/images/products/vege2.png"
  },
  {
    id: 6,  
    name: "고추 고로케",
    engName : "Chili Baked Croquette",
    description: "매콤한 고추와 신선한 야채가 들어가있는 화끈한 맛의 고로케",
    price: 2900,
    allergy: "밀, 난류, 우유",
    image: "/images/products/gochu.png",
    imagedetail: "/images/products/gochu2.png"
  },
  {
    id: 7,  
    name: "한우 고로케",
    engName: "Korean Premium Beef Croquette",
    description: "골고루 다진 한우와 신선한 야채가 들어있는 영양만점 고로케",
    price: 3800,
    allergy: "밀, 난류, 우유, 쇠고기",
    image: "/images/products/hanwoo.png",
    imagedetail: "/images/products/hanwoo2.png"
  },
  {
    id: 8,
    name: "만두 고로케",
    engName: "Mandu Baked Croquette",
    description: "선대의 황해도식 만두 노하우를 담아 100% 국산 돈육과 채소로 가득 찬 고로케",
    price: 3400,
    allergy: "밀, 난류, 우유, 돼지고기",
    image: "/images/products/mandu.png",
    imagedetail: "/images/products/mandu2.png"
  },
  {
    id: 9,
    name: "콘짜렐라 허니갈릭",
    engName: "Cornzarella Honey Garlic",
    description: "옥수수와 치즈가 듬뿍! 버터의 풍미가 더해진 허니 갈릭 치즈 옥수수빵",
    price: 3400,
    allergy: "밀, 난류, 우유",
    image: "/images/products/honeygarlic.png",
    imagedetail: "/images/products/honeygarlic2.png"
  },
  {
    id: 10,
    name: "콘짜렐라 페퍼로니",
    engName: "Cornzarella Pepperoni",
    description: "100% 엑스트라 버진 오일을 쓴 피자소스에 매콤한 페퍼로니가  더해진 치즈 옥수수빵",
    price: 3400,
    allergy: "밀, 난류, 우유",
    image: "/images/products/pepperoni.png",
    imagedetail: "/images/products/pepperoni2.png"
  },
  {
    id: 11,
    name: "콘짜렐라 함박",
    engName: "Cornzarella Hamburger steak",
    description: "육즙이 가득한 함박스테이크에 어니언 크리스피가 올라간 치즈 옥수수빵",
    price: 3400,
    allergy: "밀, 난류, 우유",
    image: "/images/products/hambak.png",
    imagedetail: "/images/products/hambak2.png"
  },
  {
    id: 12,
    name: "콘짜렐라 마라로제",
    engName: "Cornzarella Spicy Tteokbokki",
    description: "부드러운 로제 크림치즈와 진한 마라 소스가 더해진 치즈 옥수수빵",
    price: 3400,
    allergy: "밀, 난류, 우유",
    image: "/images/products/mararose.png",
    imagedetail: "/images/products/mararose2.png"
  },
  {
    id: 13,
    name: "황금달빵",
    engName: "Gold Moon Bread",
    description: "달콤 바삭한 쿠키가 한 번, 향긋하고 촉촉한 빵이 두 번의 행복을 주는 황금달빵",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/goldmoon.png",
    imagedetail: "/images/products/goldmoon2.png"
  },
  {
    id: 14,
    name: "단호박빵",
    engName: "sweet Pumpkin Bread",
    description: "바삭한 페스츄리가 올라간 촉촉한 빵 안에 진짜 단호박과 앙금이 가득한 단호박 빵",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/pumpkin.png",
    imagedetail: "/images/products/pumpkin2.png"
  },
  {
    id: 15,
    name: "카카오빵",
    engName: "Cacao Bread",
    description: "바삭한 초콜릿 비스킷 속에 촉촉한 빵과 진한 다크초콜릿 가나슈가 들어간 빵",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/cacao.png",
    imagedetail: "/images/products/cacao2.png"
  },
  {
    id: 16,
    name: "라이스번",
    engName: "Rice mocha Bun",
    description: "겉의 바삭하고 달콤한 커피향과 빵 속 쌀가루의 부드럽고 촉촉함이 잘 어우러진 라이스번",
    price: 2400,
    allergy: "밀, 난류, 우유",
    image: "/images/products/rice.png",
    imagedetail: "/images/products/rice2.png"
  },
  {
    id: 17,
    name: "단팥빵",
    engName: "Sweet Red Bean Bread",
    description: "달콤하고 부드러운 단팥 앙금이 듬뿍 들어간 오리지날 단팥빵",
    price: 2800,
    allergy: "밀, 난류, 우유",
    image: "/images/products/redbean.png",
    imagedetail: "/images/products/redbean2.png"
  },
  {
    id: 18,
    name: "소보로 팥빵",
    engName: "Sweet Adzuki Bean Bread",
    description: "달콤한 단팥 앙금이 들어있는 추억이 새록새록 소보로 빵",
    price: 2900,
    allergy: "밀, 난류, 우유",
    image: "/images/products/soboro.png",
    imagedetail: "/images/products/soboro2.png"
  },
  {
    id: 19,
    name: "촉촉갈릭바게트",
    engName: "soft Garlic Baguette",
    description: "국산 마늘로 만든 달콤한 갈릭 소스가 맛있게 스며든 촉촉한 갈릭 바게트",
    price: 4900,
    allergy: "밀, 난류, 우유",
    image: "/images/products/baguette.png",
    imagedetail: "/images/products/baguette2.png"
  },
  {
    id: 20, 
    name: "소금빵",
    engName: "Salt Bread",
    description: "짭짤한 소금과 버터의 풍미가 잘 느껴지는 빵",
    price: 2900,
    allergy: "밀, 우유",
    image: "/images/products/salt.png",
    imagedetail: "/images/products/salt2.png"
  },
  {
    id: 21,
    name: "카스텔라 슈크림 볼",
    engName: "Samsong Castella Custard Ball",
    description: "달콤한 슈크림이 가득한 부드러운 카스텔라 볼",
    price: 3800,
    allergy: "밀, 우유",
    image: "/images/products/shucream.png",
    imagedetail: "/images/products/shucream2.png"
  },
  {
    id: 22,
    name: "카스텔라 고물 찹쌀떡",
    engName: "Castella Paste Glutinous Rice Cake",
    description: "찹쌀떡에 카스텔라 가루를 묻힌 차갑게 먹으면 더욱 맛있는 찹쌀떡",
    price: 7800,
    allergy: "밀, 난류, 우유 <1박스 6개입>",
    image: "/images/products/castella.png",
    imagedetail: "/images/products/castella2.png"
  },
  {
    id: 23,
    name: "상투앙금빵",
    engName: "Sangtu Sediment Bread",
    description: "부드러운 상투 빵 속에 달콤한 앙금이 들어있는 빵",
    price: 5000,
    allergy: "밀, 난류, 우유 <1박스 8개입>",
    image: "/images/products/sangtu.png",
    imagedetail: "/images/products/sangtu2.png"
  },
  {
    id: 24,
    name: "삼송 쑥떡",
    engName: "Samsong Mugwort Rice Cake",
    description: "국내산 찹쌀가루를 사용해 맛이 좋고 향긋한 쑥과 달콤한 단팥 앙금이 만나 건강하고 맛있게 즐길 수 있는 쑥 찹쌀떡",
    price: 12000,
    allergy: "찹쌀, 콩, 쑥, 팥 <1박스 8개입>",
    image: "/images/products/ssuk.png",
    imagedetail: "/images/products/ssuk2.png"
  }
];

export default Products;
