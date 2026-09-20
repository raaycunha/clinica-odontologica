import { BsClock, BsEnvelope, BsMap, BsTelephone } from "react-icons/bs";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { allServices } from "../data/services";

const classSocial =
  "flex h-9 w-9 items-center justify-center rounded-full bg-[#1E63D4] text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80";

const classFooterLink =
  "text-sm text-gray-600 transition-colors duration-300 hover:text-[#1E63D4]";

const Footer = () => {
  return (
    <footer
      className="
        mt-16
        border-t
        border-gray-200
        font-plus
        lg:mt-20
      "
    >
      {/* Conteúdo principal */}
      <div
        className="
          grid
          grid-cols-1
          gap-10
          py-10

          sm:grid-cols-2

          lg:grid-cols-[1.2fr_0.8fr_1fr_1.4fr]
          lg:gap-12
          lg:py-12
        "
      >
        {/* Marca */}
        <div className="flex flex-col gap-4">
          <a href="#home" aria-label="Voltar para o início" className="w-fit">
            <img
              src="/images/logo-clinica.webp"
              alt="Logo SorrisoScript"
              className="w-36 sm:w-40 lg:w-45"
            />
          </a>

          <p
            className="
              max-w-70
              text-sm
              leading-relaxed
              text-gray-600
            "
          >
            Cuidado, tecnologia e atenção para transformar a saúde e a confiança
            do seu sorriso.
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da SorrisoScript"
              className={classSocial}
            >
              <FaWhatsapp className="text-xl" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da SorrisoScript"
              className={classSocial}
            >
              <FaInstagram className="text-xl" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da SorrisoScript"
              className={classSocial}
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          <h3
            className="
              mb-1
              font-semibold
              text-[#1E63D4]
            "
          >
            Menu
          </h3>

          <a href="#home" className={classFooterLink}>
            Home
          </a>

          <a href="#services" className={classFooterLink}>
            Serviços
          </a>

          <a href="#about" className={classFooterLink}>
            Sobre
          </a>

          <a href="#reviews" className={classFooterLink}>
            Depoimentos
          </a>

          <a href="#contact" className={classFooterLink}>
            Contato
          </a>
        </nav>

        {/* Serviços */}
        <div className="flex flex-col gap-3">
          <h3
            className="
              mb-1
              font-semibold
              text-[#1E63D4]
            "
          >
            Nossos Serviços
          </h3>

          {allServices.map((item) => (
            <a key={item.id} href="#services" className={classFooterLink}>
              {item.title}
            </a>
          ))}
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-4">
          <h3
            className="
              mb-1
              font-semibold
              text-[#1E63D4]
            "
          >
            Contato
          </h3>

          {/* Endereço */}
          <div className="flex items-start gap-3">
            <BsMap
              className="
                mt-0.5
                shrink-0
                text-xl
                text-[#1E63D4]
              "
            />

            <span
              className="
                text-sm
                leading-relaxed
                text-gray-600
              "
            >
              Rua Sorriso, 123
              <br />
              Belo Horizonte – MG
            </span>
          </div>

          {/* Telefone */}
          <a
            href="tel:+5512345678910"
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <BsTelephone
              className="
                shrink-0
                text-xl
                text-[#1E63D4]
              "
            />

            <span
              className="
                text-sm
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-[#1E63D4]
              "
            >
              (123) 4567-8910
            </span>
          </a>

          {/* E-mail */}
          <a
            href="mailto:sorrisoscript.info@gmail.com"
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <BsEnvelope
              className="
                shrink-0
                text-xl
                text-[#1E63D4]
              "
            />

            <span
              className="
                break-all
                text-sm
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-[#1E63D4]
              "
            >
              sorrisoscript.info@gmail.com
            </span>
          </a>

          {/* Horário */}
          <div className="flex items-start gap-3">
            <BsClock
              className="
                mt-0.5
                shrink-0
                text-xl
                text-[#1E63D4]
              "
            />

            <span
              className="
                text-sm
                leading-relaxed
                text-gray-600
              "
            >
              Seg. a Sex.: 8h às 18h
              <br />
              Sábado: 8h às 12h
            </span>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-3
          border-t
          border-gray-200
          px-4
          py-5
          text-center

          sm:flex-row
          sm:px-6
          sm:text-left

          lg:px-2
        "
      >
        <span
          className="
            text-xs
            font-medium
            text-gray-500
            sm:text-sm
          "
        >
          © 2026 SorrisoScript. Todos os direitos reservados.
        </span>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <a
            href="#"
            className="
              text-xs
              font-medium
              text-gray-500
              transition-colors
              duration-300
              hover:text-[#1E63D4]
              sm:text-sm
            "
          >
            Política de Privacidade
          </a>

          <a
            href="#"
            className="
              text-xs
              font-medium
              text-gray-500
              transition-colors
              duration-300
              hover:text-[#1E63D4]
              sm:text-sm
            "
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
