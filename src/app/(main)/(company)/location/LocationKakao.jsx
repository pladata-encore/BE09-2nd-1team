import KakaoMap from "@/components/KakaoMap";

export default function Location() {
  return (
    <KakaoMap
      latitude={35.824958} // 실제 삼송BNC 본사 위도
      longitude={128.624848} // 실제 삼송BNC 본사 경도
      title="삼송BNC 본사"
      address="신안동갈비,대구광역시 수성구 두산동 744-7"
      phone="053-556-3030" // (참고: 실제 전화번호일 경우 교체 필요)
    />
  );
}
