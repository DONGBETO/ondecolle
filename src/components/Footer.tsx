import Image from "next/image";
import Link from "next/link";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { navLinks, siteConfig } from "@/src/config/site";

const socials = [
  { label: "Facebook", icon: <FaFacebook size={18} />, href: siteConfig.socials.facebook },
  { label: "Instagram", icon: <FaInstagram size={18} />, href: siteConfig.socials.instagram },
  { label: "LinkedIn", icon: <FaLinkedin size={18} />, href: siteConfig.socials.linkedin },
  { label: "TikTok", icon: <Music2 size={18} />, href: siteConfig.socials.tiktok },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2a5a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Logo + desc */}
          <div className="mt-4">

            <div className="flex items-center gap-3 mb-2">
              <Link href="/" aria-label="Accueil">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.movement}
                  width={250}
                  height={250}
                  className="-mx-8 -mt-12 md:-mx-8 md:-mt-12"
                />
              </Link>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {siteConfig.mission}
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Menu */}
          <div className="flex flex-col items-start text-left md:items-center md:text-center">

            <h3 className="font-semibold text-lg mb-4">
              Menus
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg mb-4 text-gray-300">
              N&apos;hésitez pas à nous contacter pour discuter de vos projets
              et découvrir comment nous pouvons vous aider.
            </h3>

            <Link
              href="/contacts"
              className="
                inline-block
                bg-yellow-400
                text-black
                px-6 py-3
                rounded-md
                font-semibold
                hover:bg-yellow-300
                transition
                cursor-pointer
              "
            >
              NOUS CONTACTER
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          © {year} {siteConfig.movement}. Tous droits réservés
        </div>

      </div>
    </footer>
  );
}
