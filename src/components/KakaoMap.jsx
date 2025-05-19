"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Script from "next/script";

const KakaoMap = forwardRef(function KakaoMap(
  { latitude, longitude, title, address, phone, markers },
  ref
) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  // 지도 초기화
  const initializeMap = () => {
    if (!window.kakao || !mapRef.current) return;

    const kakao = window.kakao;
    const centerLat = markers?.[0]?.lat ?? latitude;
    const centerLng = markers?.[0]?.lng ?? longitude;

    const map = new kakao.maps.Map(mapRef.current, {
      center: new kakao.maps.LatLng(centerLat, centerLng),
      level: 11,
    });

    mapInstance.current = map;

    if (markers && Array.isArray(markers)) {
      markers.forEach((marker) => {
        const markerPosition = new kakao.maps.LatLng(marker.lat, marker.lng);
        const imageSrc = "/icons/(store)/markerStar.png";
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        const mapMarker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
          title: marker.title,
        });

        mapMarker.setMap(map);

        const content = `
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
            <strong style="display: block; margin-bottom: 5px;">${marker.title}</strong>
            <div style="font-size: 12px; color: #555;">${marker.address || ""}</div>
            <div style="font-size: 12px; color: #555;">${marker.phone || ""}</div>
          </div>`;

        const overlay = new kakao.maps.CustomOverlay({
          position: markerPosition,
          content,
          yAnchor: 1,
        });

        kakao.maps.event.addListener(mapMarker, "click", () => {
          overlay.setMap(map);
        });
      });
    } else {
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const markerImage = new kakao.maps.MarkerImage(
        "/icons/(store)/markerStar.png",
        new kakao.maps.Size(24, 35)
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);

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
        </div>`;

      const overlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: overlayContent,
        yAnchor: 1,
      });

      overlay.setMap(map);
    }

    map.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
  };


  useImperativeHandle(ref, () => ({
    resetBounds: () => {
      if (!mapInstance.current || !markers?.length) return;
      const bounds = new kakao.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(new kakao.maps.LatLng(marker.lat, marker.lng));
      });
      mapInstance.current.setBounds(bounds);
    },
  }));

  useEffect(() => {
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => initializeMap());
    }
  }, [markers, latitude, longitude]);

  return (
    <div className="w-full space-y-4">
     <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=9fd453e56ef6d8617c10653062a578d3&autoload=false"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao?.maps && mapRef.current) {
            window.kakao.maps.load(() => {
              initializeMap();
            });
          }
        }}
      />
      <div
        ref={mapRef}
        className="w-full h-[70vh] md:h-[75vh] lg:h-[80vh] rounded-md shadow-lg"
      />
    </div>
  );
});

export default KakaoMap;
