import { BsCalendarCheck, BsTelephone } from "react-icons/bs";

import { CgArrowTopRight } from "react-icons/cg";

import { FaClock, FaPeopleGroup, FaTooth, FaWhatsapp } from "react-icons/fa6";

import { classSubTitle, classTitle } from "../classes/ClassText";
import Button from "../components/Button";

const Cta = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        font-plus
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        scroll-mt-24
      "
    >
      {/* Parte principal */}
      <div
        className="
          grid
          grid-cols-1
          lg:min-h-70
          lg:grid-cols-[1.35fr_0.8fr_1fr]
        "
      >
        {/* Texto */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            px-8
            pt-8
            pb-4
            text-center


            lg:items-start
            lg:py-8
            lg:text-left
          "
        >
          <span className={classSubTitle}>
            PRONTO PARA CUIDAR DO SEU SORRISO?
          </span>

          <h2
            className={`
              ${classTitle}
              w-full
              max-w-110
            `}
          >
            Agende sua consulta e dê o próximo passo para um{" "}
            <span className="text-[#1E63D4]">sorriso mais saudável</span>.
          </h2>

          <p
            className="
              w-full
              max-w-110
              text-sm
              leading-relaxed
              font-medium
              text-gray-600
              sm:text-base
            "
          >
            Conte com atendimento humanizado, tecnologia moderna e todo o
            cuidado que você merece.
          </p>
        </div>

        {/* Ações */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            px-5
            py-5

            sm:px-8

            lg:px-6
            lg:py-8
          "
        >
          {/* Divisor desktop */}
          <div
            className="
              absolute
              left-0
              top-[15%]
              hidden
              h-[70%]
              border-l
              border-gray-200
              lg:block
            "
          />

          <div
            className="
              flex
              w-full
              max-w-sm
              flex-col
              gap-3
            "
          >
            <Button
              href="#"
              variant="primary"
              className="h-12 w-full gap-2 px-6"
            >
              <BsCalendarCheck />
              Agendar Consulta
              <CgArrowTopRight />
            </Button>

            <Button
              href="#"
              variant="secondary"
              className="h-12 w-full gap-2 px-8 text-[#1E63D4]"
            >
              <FaWhatsapp className="text-[#1E63D4]" />
              Falar no WhatsApp
            </Button>

            {/* Icon Telefone */}
            <div
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <BsTelephone
                className="
                  shrink-0
                  text-2xl
                  text-[#1E63D4]
                "
              />

              <div className="flex flex-col">
                <span
                  className="
                    text-base
                    font-semibold
                    text-[#1E63D4]
                    sm:text-lg
                  "
                >
                  (123) 4567-8910
                </span>

                <span
                  className="
                    text-xs
                    leading-relaxed
                    text-gray-500
                    sm:text-sm
                  "
                >
                  Seg. a Sex. das 8h às 18h
                  <br />
                  Sábado das 8h às 12h
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Imagem */}
        <div
          className="
            relative
            mt-2
            h-56
            overflow-hidden

            sm:h-72

            lg:mt-0
            lg:h-auto
            lg:min-h-full
          "
        >
          <img
            src="/images/img-cta.webp"
            alt="Paciente durante atendimento odontológico"
            loading="lazy"
            width={600}
            height={450}
            className="
              h-full
              w-full
              object-cover
              object-center

              lg:absolute
              lg:inset-0
              lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_35%,black_100%)]
              lg:mask-[linear-gradient(to_right,transparent_0%,black_35%,black_100%)]
            "
          />

          {/* Gradiente apenas mobile */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-16
              bg-linear-to-b
              from-white
              to-transparent
              lg:hidden
            "
          />
        </div>
      </div>

      {/* Benefícios */}
      <div
        className="
          relative
          z-20
          grid
          grid-cols-1
          gap-5
          border-t
          border-gray-100
          bg-white
          px-5
          py-5

          sm:grid-cols-3
          sm:gap-3
          sm:px-6

          lg:px-8
        "
      >
        {/* Item 1 */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:justify-center
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#1E63D4]/10
            "
          >
            <FaPeopleGroup className="text-xl text-[#1E63D4]" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold sm:text-base">
              Atendimento humanizado
            </span>

            <p className="text-xs text-gray-500 sm:text-sm">
              Você em primeiro lugar
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:justify-center
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#1E63D4]/10
            "
          >
            <FaTooth className="text-xl text-[#1E63D4]" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold sm:text-base">
              Tecnologia moderna
            </span>

            <p className="text-xs text-gray-500 sm:text-sm">
              Mais precisão e conforto
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:justify-center
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#1E63D4]/10
            "
          >
            <FaClock className="text-xl text-[#1E63D4]" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold sm:text-base">
              Horários flexíveis
            </span>

            <p className="text-xs text-gray-500 sm:text-sm">
              Mais facilidade para você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
