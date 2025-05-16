"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function KakaoMap({ latitude, longitude, title, address, phone }) {
  const mapRef = useRef(null);

  const initializeMap = () => {
    if (!window.kakao || !mapRef.current) return;

    const kakao = window.kakao;
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

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
  };

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initializeMap);
    }
  }, []);

  return (
    <div className="w-full">
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=9fd453e56ef6d8617c10653062a578d3&autoload=false"
        strategy="beforeInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.kakao?.maps) {
            window.kakao.maps.load(initializeMap);
          }
        }}
      />
      <div ref={mapRef} id="map" className="w-full h-[400px] rounded-md shadow-lg" />
    </div>
  );
}
