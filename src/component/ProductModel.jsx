import React from "react";
import { GiCancel } from "react-icons/gi";

const ProductModel = ({ product, close }) => {
  return (
    <div
      onClick={close}
      className="fixed inset-0 flex items-center-safe justify-center bg-black/50 z-50"
    >
      <div
        className="bg-white max-w-2xl w-full rounded-xl relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold cursor-pointer text-red-700"
          onClick={close}
        >
          <GiCancel />
        </button>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={product.thumbnail}
            alt={product.title}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-sm opacity-70 mb-4">{product.description}</p>
            <p className="mb-2">
              <span className="font-semibold">Brand : </span>
              {product.brand}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Category : </span>
              {product.category}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Rating : </span>
              {product.rating}
            </p>
            <p className="text-xl font-bold mt-4">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
