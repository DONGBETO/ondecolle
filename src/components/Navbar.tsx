"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();

const isActive = (path: string) => pathname === path;

const activePaths = ["/blog", "/evenements", "/bibliotheque"];

const isActualitesActive = activePaths.some((path) =>
  pathname.startsWith(path)
);
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
              className={`cursor-pointer ${
                isActualitesActive ? "text-blue-800 font-bold" : "hover:text-blue-900"
              }`}
            >
              Actualités ▾
            </Link>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              
              <ul className="py-2 text-blue-800">
                
                <li>
                  <Link
                    href="/blog"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/blog") ? "bg-gray-200 text-blue-800 font-semibold" : "hover:bg-gray-100 text-blue-900"
                    }`}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/evenements"
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
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className={isActive("/") ? "font-bold" : ""}>Accueil</Link>
          <Link href="/about" className={isActive("/about") ? "font-bold" : ""}>À propos</Link>
          <Link href="/projects" className={isActive("/projects") ? "font-bold" : ""}>Projets</Link>
          <Link href="/contact" className={isActive("/contact") ? "font-bold" : ""}>Contacts</Link>
        </div>
      )}
    </nav>
  );
}