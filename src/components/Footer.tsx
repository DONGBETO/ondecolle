import Image from "next/image";

type FooterLink = {
  label: string;
  href: string;
};

type Social = {
  icon: React.ReactNode;
  href: string;
  target?: string;
};

type Props = {
  logo: string;
  description: string;
  links: FooterLink[];
  socials: Social[];
};

export default function Footer({
  logo,
  description,
  links,
  socials,
}: Props) {
  return (
    <footer className="bg-[#1f2a5a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Logo + desc */}
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-2">
                <a href="#"><Image src={logo} alt="logo" width={250} height={250} className="-mx-8 -mt-12 md:-mx-8 md:-mt-12"/></a>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {description}
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a key={index} href={social.href} target={social.target} className="text-gray-300 hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-lg mb-4">Menus</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-gray-300">
              N'hésitez pas à nous contacter pour discuter de vos projets et découvrir comment nous pouvons vous aider.
            </h3>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer">
              NOUS CONTACTER
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          © 2026 Ensemble, on décolle. Tous droits réservés
        </div>

      </div>
    </footer>
  );
}