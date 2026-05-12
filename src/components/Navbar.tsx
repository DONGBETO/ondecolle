"use client";

import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [openActualites, setOpenActualites] = useState(false);
const pathname = usePathname();

const isActive = (path: string) => pathname === path;

const isActualitesActive = pathname.startsWith("/actualites");

const isBlogActive = pathname.startsWith("/actualites/blog");
const isEvenementsActive = pathname.startsWith("/actualites/evenements");
const isBibliothequeActive = pathname.startsWith("/actualites/bibliotheque");

  return (
    <nav className="bg-yellow-400 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/assets/logos/Logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <p className="text-sm font-semibold text-black">
            Unis pour servir, déterminé pour servir
          </p>
        </Link>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium text-blue-800">      
          <li>
            <Link
              href="/"
              className={isActive("/") ? "text-blue-800 font-bold" : "hover:text-blue-900"}
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/a-propos"
              className={isActive("/a-propos") ? "text-blue-800 font-bold" : "hover:text-blue-900"}
            >
              À propos
            </Link>
          </li>

          <li className="relative group">
  
            {/* Parent link */}
          <Link
            href="/actualites/blog"
            className={`cursor-pointer flex items-center gap-1 ${
              isActualitesActive
                ? "text-blue-800 font-bold"
                : "hover:text-blue-900"
            }`}
          >
            Actualités

            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isActualitesActive ? "rotate-180" : ""
              }`}
            />
          </Link>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              
              <ul className="py-2 text-blue-800">
                
                <li>
                  <Link
                    href="/actualites/blog"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/blog") ? "bg-gray-200 text-blue-800 font-semibold" : "hover:bg-gray-100 text-blue-900"
                    }`}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/actualites/evenements"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/evenements") ? "bg-gray-200 text-blue-800 font-semibold" : "hover:bg-gray-100 text-blue-900"
                    }`}
                  >
                    Évènements
                  </Link>
                </li>

                <li>
                  <Link
                    href="/actualites/bibliotheque"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/bibliotheque") ? "bg-gray-200 text-blue-800 font-semibold" : "hover:bg-gray-100 text-blue-900"
                    }`}
                  >
                    Bibliothèque
                  </Link>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <Link
              href="/projets"
              className={isActive("/projets") ? "text-blue-800 font-bold" : "hover:text-blue-900"}
            >
              Projets
            </Link>
          </li>

          <li>
            <Link
              href="/contacts"
              className={isActive("/contacts") ? "text-blue-800 font-bold" : "hover:text-blue-900"}
            >
              Contacts
            </Link>
          </li>

        </ul>

        {/* Mobile */}
       <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-blue-900"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          
          {/* PANEL */}
          <div className="absolute right-0 top-0 w-72 h-full bg-yellow-400 shadow-2xl p-6 flex flex-col gap-6">

            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-black"
            >
              <X size={26} />
            </button>

            {/* LINKS */}
            <Link href="/" onClick={() => setIsOpen(false)}
              className={isActive("/") ? "font-bold text-blue-900" : "text-blue-800"}
            >
              Accueil
            </Link>

            <Link href="/a-propos" onClick={() => setIsOpen(false)}
              className={isActive("/a-propos") ? "font-bold text-blue-900" : "text-blue-800"}
            >
              À propos
            </Link>

            {/* ACTUALITES */}
          <div>
            <button
              onClick={() => setOpenActualites(!openActualites)}
              className="font-medium flex justify-between items-center w-full text-blue-900 hover:text-blue-700 transition"
            >
              Actualités

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openActualites ? "rotate-180" : ""
                }`}
              />
            </button>

            {openActualites && (
              <div className="ml-4 mt-2 flex flex-col gap-2">

                <Link
                  href="/actualites/blog"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/actualites/evenements"
                  onClick={() => setIsOpen(false)}
                >
                  Évènements
                </Link>

                <Link
                  href="/actualites/bibliotheque"
                  onClick={() => setIsOpen(false)}
                >
                  Bibliothèque
                </Link>

              </div>
            )}
          </div>

            <Link href="/projets" onClick={() => setIsOpen(false)}
              className={isActive("/projets") ? "font-bold text-blue-900" : "text-blue-800"}
            >
              Projets
            </Link>

            <Link href="/contacts" onClick={() => setIsOpen(false)}
              className={isActive("/contacts") ? "font-bold text-blue-900" : "text-blue-800"}
            >
              Contacts
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}