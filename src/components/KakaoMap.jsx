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

    // 마커 위치
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    // ✅ 사용자 정의 마커 이미지
    const markerImageSrc = "/icons/(store)/markerStar.png"; // public 폴더 기준
    const markerSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(markerImageSrc, markerSize);

    // ✅ 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    // ✅ 커스텀 오버레이 콘텐츠
    const overlayContent = `
      <div class="customoverlay" style="
        position: relative;
        bottom: 35px;
        border-radius: 6px;
        background: white;
        border: 1px solid #ccc;
        padding: 10px 15px;
        font-size: 14px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        white-space: nowrap;
      ">
        <strong style="display: block; margin-bottom: 5px;">${title}</strong>
        <div style="font-size: 12px; color: #555;">${address}</div>
        <div style="font-size: 12px; color: #555;">${phone}</div>
      </div>
    `;

    // ✅ 커스텀 오버레이 생성
    const customOverlay = new kakao.maps.CustomOverlay({
      position: markerPosition,
      content: overlayContent,
      yAnchor: 1,
    });
    customOverlay.setMap(map);

    // 지도 컨트롤 추가
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

  // 윈도우 리사이즈 대응
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
    </div>
  );
}
