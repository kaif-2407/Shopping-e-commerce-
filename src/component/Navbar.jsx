import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useCart } from "../Contetx/CartContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-15 left-0 w-full z-40 bg-[#FAF8FC] border-b">
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold rounded">
            S
          </div>
          <span>Shopping</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" label="Home" />
          <NavLink to="/shop" label="Shop" />
          <NavLink to="/cloth" label="Cloth" />
          <NavLink to="/abouts" label="Abouts" />
        </ul>
        <div className="flex items-center gap-4">
          <Link to="/wishlist">
            <FaHeart />
          </Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <IoMenu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 top-15">
          <div className="absolute top-0 right-0 w-64 h-full bg-[#FAF8FC] p-5">
            <button onClick={() => setOpen(false)}>
              <MdCancel />
            </button>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <MobileLink to="/" label="Home" setOpen={setOpen} />
              <MobileLink to="/shop" label="Shop" setOpen={setOpen} />
              <MobileLink to="/cloth" label="Cloth" setOpen={setOpen} />
              <MobileLink to="/abouts" label="Abouts" setOpen={setOpen} />
              <MobileLink to="/wishlist" label="Wishlist" setOpen={setOpen} />
              <MobileLink to="/cart" label="Cart" setOpen={setOpen} />
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

function NavLink({ to, label }) {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
}

function MobileLink({ to, label, setOpen }) {
  return (
    <li>
      <Link to={to} onClick={() => setOpen(false)}>
        {label}
      </Link>
    </li>
  );
}

export default Navbar;
