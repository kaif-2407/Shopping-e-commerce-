import React, { useState } from "react";
import { useProducts } from "../Contetx/ProductContext";
import { useCart } from "../Contetx/CartContext";
import ProductModel from "../component/ProductModel";

const Cloth = () => {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [selectProduct, setSelectProduct] = useState(null);
  const [toast, setToast] = useState(false);

  const clothingProducts = products.filter((product) =>
    [
      "mens-shirts",
      "mens-shoes",
      "womens-dresses",
      "womens-shoes",
      "tops",
    ].includes(product.category)
  );

  return (
    <div className="pt-26 max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Clothing</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <p className="text-center mb-6 text-sm opacity-70">
            {clothingProducts.length} products available
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clothingProducts.map((product) => (
              <div
                onClick={() => setSelectProduct(product)}
                key={product.id}
                className="bg-[#F3EFEC] rounded-xl p-4 flex flex-col shadow-lg cursor-pointer"
              >
                <img
                  className="h-48 w-full object-contain rounded mb-3"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h3 className="font-semibold line-clamp-1">{product.title}</h3>
                <p className="text-sm opacity-70 line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      setToast(true);
                      setTimeout(() => setToast(false), 2000);
                    }}
                    className="bg-black text-white px-4 py-2 rounded text-sm hover:opacity-80 cursor-pointer "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {selectProduct && (
        <ProductModel
          product={selectProduct}
          close={() => setSelectProduct(null)}
        />
      )}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-black/50 text-white px-6 py-2 rounded z-999">
          Added to cart
        </div>
      )}
    </div>
  );
};

export default Cloth;
