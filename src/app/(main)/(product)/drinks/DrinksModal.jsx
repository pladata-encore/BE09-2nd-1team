import React from "react";

export default function DrinksModal({ product, onClose }) {
  if (!product) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleOverlayClick}
    >
      <div
        className="relative p-8 bg-white rounded-lg shadow-lg w-[500px]"
        style={{
          backgroundImage: "url('/images/products/detail-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          className="absolute text-2xl text-gray-400 top-3 right-3 hover:text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={product.imagedetail}
          alt={product.name}
          className="object-contain w-full h-64 mb-4 rounded"
        />
        <h2 className="mb-2 text-3xl font-bold text-yellow-950">
          {product.name}
        </h2>
        <p className="mb-2 text-black text-[18px]">{product.description}</p>
        <p className="text-2xl font-semibold text-yellow-900">
        {product.price.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
