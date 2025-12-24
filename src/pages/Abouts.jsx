import React from "react";
import { useProducts } from "../Contetx/ProductContext";

const Abouts = () => {
  const { products, loading } = useProducts();

  const patternImage = products.slice(79, 95);

  return (
    <div className="pt-26">
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Store</h1>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          {" "}
          A modern e-commerce platform built to deliver a smooth, fast, and
          reliable online shopping experience.
        </p>
      </section>
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <p className="text-center">Loading Images..</p>
          ) : (
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {patternImage.map((product) => (
                <div
                  className="overflow-hidden rounded-xl bg-[#F3EFEC] shadow-lg"
                  key={product.id}
                >
                  <img
                    className="h-56 w-full object-contain hover:scale-105 transition duration-300"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <p className="opacity-80 mb-4">
              Our platform provides a wide range of products including fashion,
              electronics, accessories, and lifestyle essentials.
            </p>
            <p className="opacity-80 mb-4">
              Online shopping allows customers to explore, compare, and purchase
              products conveniently from anywhere at any time.
            </p>
            <p className="opacity-80">
              We focus on performance, simplicity, and user experience to ensure
              a smooth journey from browsing to checkout.
            </p>
          </div>
          <div className="bg-[#EAE1F5] p-10 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Online Shopping
            </h3>
            <ul className="space-y-3 opacity-80">
              <li>✔ Wide product selection</li>
              <li>✔ Time-saving & convenient</li>
              <li>✔ Secure payments</li>
              <li>✔ Easy cart & checkout</li>
              <li>✔ Modern UI & fast loading</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#F1E4B8] py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Who Built This Website</h2>
          <p className="max-w-3xl mx-auto opacity-80 mb-8">
            This e-commerce website is designed and developed using modern
            frontend technologies such as React, Tailwind CSS, Context API, and
            REST APIs.
          </p>
          <div className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg">
            Developed By <span className="font-semibold">Mohammad Kaif</span>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Exprience Smart Shopping
        </h2>
        <p className="opacity-80 mb-6">
          {" "}
          Discover products, add to cart, and enjoy a seamless shopping
          experience.
        </p>
        <a
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:opacity-80 transition "
          href="/shop"
        >
          Explore Shop
        </a>
      </section>
    </div>
  );
};

export default Abouts;
