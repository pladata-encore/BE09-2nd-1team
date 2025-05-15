"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function KakaoMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // 대구 좌표 (이미지에서 보이는 위치)
  const latitude = 35.8714354;
  const longitude = 128.601445;

  const initializeMap = () => {
    if (typeof window.kakao === "undefined" || !mapRef.current) return;

    const kakao = window.kakao;
    
    // 지도 생성
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    
    const map = new kakao.maps.Map(mapRef.current, options);
    mapInstanceRef.current = map;
    
    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    
    // 인포윈도우 생성
    const iwContent = `
      <div style="padding:10px; width:200px; text-align:center;">
        <strong style="display:block; font-size:14px; margin-bottom:5px;">삼송빵집 1957</strong>
        <span style="display:block; font-size:12px; color:#666; margin-bottom:5px;">대구 수성구 동대로 252번길 24</span>
        <span style="display:block; font-size:12px; color:#666;">053-556-3030</span>
      </div>
    `;
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: true
    });
    
    // 마커 클릭 시 인포윈도우 표시
    kakao.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
    
    // 초기에 인포윈도우 표시
    infowindow.open(map, marker);
    
    // 지도 컨트롤 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  };

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initializeMap();
    }
  }, []);

  return (
    <div className="w-full">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=579bd106e1d8eeceebfef26e795e30672&autoload=false`}
        onLoad={() => {
          window.kakao.maps.load(initializeMap);
        }}
      />

      <div className="relative">
        <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-t border-gray-200">
          <h3 className="text-lg font-bold">대구 1957 토탈 베이커리</h3>
        </div>
      </div>
    </div>
  );
}
