import Image from "next/image";
import React from "react";

export default function MainPage() {
  return (
    <main className="h-[100vh]">
      <Image src={"/images/m_visual1.jpg"} width={0} height={0} alt="메인이미지-1" />
    </main>
  );
}
