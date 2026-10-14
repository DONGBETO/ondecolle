"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, memo } from "react";
import { usePathname } from "next/navigation";

const mobileLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/actualites/blog" },
  { label: "Évènements", href: "/actualites/evenements" },
  { label: "Bibliothèque", href: "/actualites/bibliotheque" },
  { label: "Projets", href: "/projets" },
  { label: "Contacts", href: "/contacts" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  const isActualitesActive = pathname.startsWith("/actualites");

  return (
    <nav className="bg-yellow-400 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logos/Logo.png"
            alt="Ensemble, on décolle"
            width={100}
            height={100}
            priority
          />

          <p className="block md:hidden lg:block text-sm font-semibold text-black">
            Unis pour servir, déterminés pour servir
          </p>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium text-blue-800">

          <li>
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-900"
              }
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/a-propos"
              className={
                isActive("/a-propos")
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-900"
              }
            >
              À propos
            </Link>
          </li>

          {/* Actualités */}
          <li className="relative group">

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
                      isActive("/actualites/blog")
                        ? "bg-gray-200 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/actualites/evenements"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/evenements")
                        ? "bg-gray-200 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Évènements
                  </Link>
                </li>

                <li>
                  <Link
                    href="/actualites/bibliotheque"
                    className={`block px-4 py-2 ${
                      isActive("/actualites/bibliotheque")
                        ? "bg-gray-200 font-semibold"
                        : "hover:bg-gray-100"
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
              className={
                isActive("/projets")
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-900"
              }
            >
              Projets
            </Link>
          </li>

          <li>
            <Link
              href="/contacts"
              className={
                isActive("/contacts")
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-900"
              }
            >
              Contacts
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="absolute right-0 top-0 w-72 h-full bg-yellow-400 shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="self-end text-black"
              aria-label="Fermer le menu"
            >
              <X size={26} />
            </button>

            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={isActive(link.href) ? "font-bold text-blue-900" : "text-blue-800"}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}

export default memo(Navbar);