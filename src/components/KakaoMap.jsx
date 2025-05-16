"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function KakaoMap({ latitude, longitude, title, address, phone }) {
  const mapRef = useRef(null);         // 지도 container DOM
  const mapInstance = useRef(null);    // 지도 객체 참조

  const initializeMap = () => {
    if (!window.kakao || !mapRef.current) return;

    const kakao = window.kakao;
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    mapInstance.current = map; // 지도 객체 저장

    // 마커 설정
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    // 인포윈도우
    const iwContent = `
      <div style="padding:10px; width:220px;">
        <strong style="font-size:14px;">${title}</strong><br/>
        <span style="font-size:12px;">${address}</span><br/>
        <span style="font-size:12px;">${phone}</span>
      </div>
    `;
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: true,
    });
    infowindow.open(map, marker);

    // 컨트롤 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };

  const moveToLocation = (lat, lng) => {
    if (!mapInstance.current || !window.kakao) return;
    const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
    mapInstance.current.panTo(moveLatLon);
  };

  // ✅ 크기 변경 대응 (윈도우 리사이즈 시 map.relayout 호출)
  useEffect(() => {
    const handleResize = () => {
      if (mapInstance.current) {
        mapInstance.current.relayout();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 지도 초기화
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initializeMap);
    }
  }, []);

  return (
    <div className="w-full space-y-4">
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=9fd453e56ef6d8617c10653062a578d3&autoload=false"
        strategy="beforeInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.kakao?.maps) {
            window.kakao.maps.load(initializeMap);
          }
        }}
      />

      {/* 지도 컨테이너 */}
      <div
        ref={mapRef}
        id="map"
        className="w-full h-[400px] rounded-md shadow-lg transition-all duration-500"
      />

      {/* 지도 이동 버튼 예시 */}
      <div className="flex space-x-2">
        <button
          onClick={() => moveToLocation(37.5665, 126.9780)} // 서울시청
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          서울시청으로 이동
        </button>
        <button
          onClick={() => moveToLocation(latitude, longitude)}
          className="px-4 py-2 text-white bg-green-600 rounded-md"
        >
          원래 위치로 이동
        </button>
      </div>
    </div>
  );
}
