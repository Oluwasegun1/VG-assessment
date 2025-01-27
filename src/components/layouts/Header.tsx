import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className="flex justify-between items-center mb-8">
      <img src="assets/images/logo.svg" alt="logo" className="h-8" />

      <button
        className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="hidden md:flex gap-5">
        {links.map((item, i) => (
          <a
            key={i}
            href="/"
            className="hover:underline font-semibold text-gray-700"
          >
            {item}
          </a>
        ))}
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-[70%] h-full bg-white p-4 md:hidden`}
      >
        <X
          className="w-8 h-8 absolute right-5 top-5 cursor-pointer"
          onClick={toggleMenu}
        />

        <div className="my-20 mt-44 space-y-10">
          {links.map((item, i) => (
            <a
              key={i}
              href="/"
              className="block font-bold text-gray-700 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
