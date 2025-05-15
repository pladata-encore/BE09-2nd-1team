import Image from "next/image";
import React from "react";

export default function MainPage() {
  return (
    <main className="h-[100vh]">
      <Image src={"/images/m_visual1.jpg"} width={1600} height={500} alt="메인이미지-1" />
    </main>
  );
}
