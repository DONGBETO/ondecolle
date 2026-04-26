"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-12 md:px-8 flex items-center justify-between h-20">
        
        {/* Logo + Texte */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logos/Logo.png" 
            alt="Logo on decolle"
            width={100}
            height={100}
          />
          <div className="text-sm font-semibold leading-tight">
            <p className="text-black">Unis pour servir, déterminé pour servir</p>
          </div>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">
          <li className="cursor-pointer hover:text-black">Accueil</li>
          <li className="cursor-pointer hover:text-black">À propos</li>

          {/* Dropdown */}
          <li className="relative group cursor-pointer">
            <span>Actualités ▾</span>

            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
                <li className="px-4 py-2 hover:bg-gray-100">Évènements</li>
                <li className="px-4 py-2 hover:bg-gray-100">Bibliothèque</li>
              </ul>
            </div>
          </li>

          <li className="cursor-pointer hover:text-black">Projets</li>
          <li className="cursor-pointer hover:text-black">Contacts</li>
        </ul>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-yellow-400">
          <p>Accueil</p>
          <p>À propos</p>
          <p>Actualités</p>
          <p>Projets</p>
          <p>Contacts</p>
        </div>
      )}
    </nav>
  );
}