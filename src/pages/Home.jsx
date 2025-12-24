import React, { useState } from "react";
import { useProducts } from "../Contetx/ProductContext";
import ProductModel from "../component/ProductModel";
import { useCart } from "../Contetx/CartContext";

const Home = () => {
  const { products, loading } = useProducts();
  const { addToCart, cart } = useCart();
  const [selectProduct, setSelectProduct] = useState(null);
  const [toast, setToast] = useState(false);

  return (
    <div className="w-full">
      <section className="h-[60vh] bg-black text-white flex items-center justify-between text-center px-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Style
          </h1>
          <p className="text-sm md:text-base opacity-80">
            Premium products curated just for you
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Featured Products
        </h2>
        {console.log(cart)}
        {loading ? (
          <p className="text-center">Loading..</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 18).map((product) => (
              <div
                onClick={() => {
                  setSelectProduct(product);
                }}
                key={product.id}
                className="bg-[#F3EFEC] rounded-xl p-5 flex flex-col shadow cursor-pointer"
              >
                <img
                  className="h-48 w-full object-contain rounded-lg mb-4"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                <p className="text-sm opacity-70 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-lg">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      setToast(true);
                      setTimeout(() => setToast(false), 2000);
                    }}
                    className="px-4 py-2 bg-black text-white text-sm rounded hover:opacity-80 transition cursor-pointer"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <footer className="bg-[#F1E4B8] py-16 flex justify-center">
        <p className="text-black text-3xl md:text-4xl font-bold tracking-widest ">
          © 2025 All rights reserved
        </p>
      </footer>

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

export default Home;
