import React from "react";
import AnnouncementBar from "./component/AnnouncementBar";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Abouts from "./pages/Abouts";
import Cloth from "./pages/Cloth";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main className="pt-26 top-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="cloth" element={<Cloth />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
