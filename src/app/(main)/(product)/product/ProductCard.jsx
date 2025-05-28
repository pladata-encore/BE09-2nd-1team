import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FlipCard from "@/components/main/components/FlipCard";
import { usePathname } from "next/navigation";

export default function ProductCard({ items }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const pathname = usePathname();
  const isCornBread = pathname === "/corn-bread";

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={`relative pb-[100px] ${isCornBread ? "w-[700px]" : "w-full"}`}>
      {isCornBread ? (
        <Swiper slidesPerView={2} spaceBetween={50} loop className="pb-[30px]">
          {items.map((item) => (
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
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {items.map((item) => (
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
      )}

      {modalOpen && selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}
