import { useState } from "react";

import { Menu, X } from "lucide-react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";

import Button from "../components/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-100
        w-full
        bg-white/80
        font-plus
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-14
          w-full
          max-w-300
          items-center
          justify-between
          px-4
          lg:h-16
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Ir para o início"
          className="shrink-0"
        >
          <img
            src="/images/logo-clinica.webp"
            alt="SorrisoScript"
            className="
              w-28
              sm:w-32
              lg:w-40
            "
          />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            <li>
              <a
                href="#home"
                className="
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-[#1E63D4]
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-[#1E63D4]
                "
              >
                Serviços
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-[#1E63D4]
                "
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#reviews"
                className="
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-[#1E63D4]
                "
              >
                Depoimentos
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-[#1E63D4]
                "
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2">
          {/* CTA Desktop */}
          <Button
            href="#contact"
            variant="primary"
            className="hidden h-10 px-4 lg:flex"
          >
            Agendar Consulta
            <CgArrowTopRight className="text-lg" />
          </Button>

          {/* WhatsApp Mobile */}
          <a
            href="#contact"
            aria-label="Falar pelo WhatsApp"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              bg-[#1E63D4]
              text-white
              transition-all
              duration-300
              hover:opacity-80

              lg:hidden
            "
          >
            <FaWhatsapp className="text-xl" />
          </a>

          {/* Menu Mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              border
              border-gray-200
              bg-white
              text-gray-800
              transition-colors
              duration-300
              hover:bg-gray-50

              lg:hidden
            "
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Menu Mobile Aberto */}
        <div
          className={`
            absolute
            top-full
            left-0
            z-50
            w-full
            overflow-hidden
            border-t
            border-gray-100
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            transition-all
            duration-300

            lg:hidden

            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <nav className="px-4 py-5">
            <ul className="flex flex-col">
              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="
                    block
                    border-b
                    border-gray-100
                    py-3
                    font-medium
                    transition-colors
                    hover:text-[#1E63D4]
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="
                    block
                    border-b
                    border-gray-100
                    py-3
                    font-medium
                    transition-colors
                    hover:text-[#1E63D4]
                  "
                >
                  Serviços
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="
                    block
                    border-b
                    border-gray-100
                    py-3
                    font-medium
                    transition-colors
                    hover:text-[#1E63D4]
                  "
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  onClick={closeMenu}
                  className="
                    block
                    border-b
                    border-gray-100
                    py-3
                    font-medium
                    transition-colors
                    hover:text-[#1E63D4]
                  "
                >
                  Depoimentos
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    block
                    py-3
                    font-medium
                    transition-colors
                    hover:text-[#1E63D4]
                  "
                >
                  Contato
                </a>
              </li>
            </ul>

            {/* CTA dentro do menu */}
            <Button
              href="#contact"
              onClick={closeMenu}
              variant="primary"
              className="
                mt-4
                h-11
                w-full
                justify-center
                px-4
              "
            >
              Agendar Consulta
              <CgArrowTopRight className="text-lg" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
