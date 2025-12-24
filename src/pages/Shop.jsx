import React, { useState } from "react";
import { useProducts } from "../Contetx/ProductContext";
import { useCart } from "../Contetx/CartContext";
import ProductModel from "../component/ProductModel";

const Shop = () => {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);
  const [selectProduct, setSelectProduct] = useState(null);
  const [toast, setToast] = useState(false);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category) &&
      product.price <= price
    );
  });

  return (
    <div className="pt-26 max-w-7xl mx-auto px-6 py-10">
      <h1
        className="text-2xl font-bold mb-8 bg-linear-to-r from-[#B68D40] to-[#7C5CFA] bg-clip-text text-transparent
"
      >
        Shop whatever you want . That enhanced you
      </h1>
      <div className="grid grid-cols-1 lg:grid-col-[260px_1fr] gap-8">
        <aside className="bg-[#F3EFEC] p-6 rounded-lg h-fit w-full lg:w-1/4">
          <h2 className="font-semibold mb-4">Filters</h2>
          <input
            className="w-full mb-4 px-3 py-2 rounded border"
            type="text"
            placeholder="search products here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id=""
          />
          <select
            className="w-full mb-4 px-3 py-2 rounded border"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option value={cat} key={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>

          <label className="text-sm font-medium">Max price : ${price}</label>
          <input
            className="w-full"
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </aside>
        <section>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <p className="mb-4 text-sm opacity-70">
                Showing {filteredProducts.length} products
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    onClick={() => setSelectProduct(product)}
                    className="bg-[#F3EFEC] rounded-xl p-4 flex flex-col shadow-lg cursor-pointer"
                  >
                    <img
                      className="h-44 w-full rounded mb-3 object-contain"
                      src={product.thumbnail}
                      alt={product.title}
                    />
                    <h3 className="font-semibold line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm opacity-70 line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold">${product.price}</span>
                      <button
                        onClick={(e) => {
                          addToCart(product);
                          e.stopPropagation();
                          setToast(true);
                          setTimeout(() => setToast(false), 2000);
                        }}
                        className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
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
    </div>
  );
};

export default Shop;
