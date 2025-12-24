import React from "react";
import { useCart } from "../Contetx/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-26 text-center">
        <h2 className="text-2xl font-semibold">your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="pt-26 max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 bg-[#F3EFEC] p-4 rounded-lg shadow-lg"
          >
            <img
              className="w-full sm:w-32 h-32 object-contain rounded"
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm opacity-70">{item.price}</p>
              <div className="flex item-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-black text-white rounded cursor-pointer"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-black text-white rounded cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-semibold mr-7 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
