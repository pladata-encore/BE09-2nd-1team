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
      <Swiper
        slidesPerView={4}
        spaceBetween={200}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="pb-[30px]"
      >
        {drinks.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => openModal(item)}>
              <FlipCard
                breadFrontImg={item.image}
                breadBackImg={item.imagedetail || "/images/main/menu1-img1.png"}
                titleKo={item.name}
                titleEn={item.engName}
                backContent={item.description || "설명이 준비 중입니다."}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-[40px] cursor-pointer">
        <div className="bg-[url('/images/main/arrow_prev.png')] swiper-button-prev h-[26px] w-[67px] border-r-1"></div>
        <div className="bg-[url('/images/main/arrow_next.png')] swiper-button-next h-[26px] w-[67px]"></div>
      </div>

      {modalOpen && selectedProduct && <DrinksModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}
