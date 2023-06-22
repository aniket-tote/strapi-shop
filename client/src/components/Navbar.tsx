"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Strapi-shop</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/category/fashion"}
            className={`mr-5 hover:text-gray-950 ${
              pathname.endsWith("/category/fashion")
                ? "text-gray-950"
                : "text-gray-500"
            }`}
          >
            Fashion
          </Link>
          <Link
            href={"/category/footwear"}
            className={`mr-5 hover:text-gray-950 ${
              pathname.endsWith("/category/footwear")
                ? "text-gray-950"
                : "text-gray-500"
            }`}
          >
            Footwear
          </Link>
          <Link
            href={"/category/sports"}
            className={`mr-5 hover:text-gray-900 ${
              pathname.endsWith("/category/sports")
                ? "text-gray-950"
                : "text-gray-500"
            }`}
          >
            Sports
          </Link>
          <Link
            href={"/category/electronics"}
            className={`mr-5 hover:text-gray-900 ${
              pathname.endsWith("/category/electronics")
                ? "text-gray-950"
                : "text-gray-500"
            }`}
          >
            Electronics
          </Link>
          <Link
            href={"/category/kitchen"}
            className={`mr-5 hover:text-gray-900 ${
              pathname.endsWith("/category/kitchen")
                ? "text-gray-950"
                : "text-gray-500"
            }`}
          >
            Kitchen
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
};

export default Navbar;
