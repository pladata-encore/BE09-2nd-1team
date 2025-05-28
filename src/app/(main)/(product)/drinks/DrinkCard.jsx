import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import FlipCard from "@/components/main/components/FlipCard";
import drinks from "./drinks";
import DrinksModal from "./DrinksModal";

export default function DrinkCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="relative pb-[100px] w-full">
      <div className="grid grid-cols-4 gap-5">
        {drinks.map((item) => (
          <div key={item.id} onClick={() => openModal(item)}>
            <FlipCard
              breadFrontImg={item.image}
              breadBackImg={item.imagedetail || "/images/main/menu1-img1.png"}
              titleKo={item.name}
              titleEn={item.engName}
              backContent={item.description || "설명이 준비 중입니다."}
            />
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && <DrinksModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}
