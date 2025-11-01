"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setSearchQuery } from "@/redux/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-md border-b border-orange-100">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-3xl font-extrabold text-orange-600 tracking-wide drop-shadow-sm">
            E-STORE
          </span>
          <span className="text-xs tracking-widest text-gray-500">
            SHOP WITH STYLE
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-orange-600 transition">Home</Link></li>
          <li><Link href="/product" className="hover:text-orange-600 transition">Products</Link></li>
          <li><Link href="/About" className="hover:text-orange-600 transition">About</Link></li>
          <li><Link href="/Contact" className="hover:text-orange-600 transition">Contact</Link></li>
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-orange-300 rounded-full px-3 py-1 bg-white shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Search..."
              className="outline-none text-sm w-28"
            />
            <Search className="w-4 h-4 text-gray-600 ml-2" />
          </div>

          <Link href="/cart" className="relative">
            <ShoppingCart className="hover:text-[#a91f64]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
