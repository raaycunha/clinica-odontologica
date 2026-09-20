import { BsArrowRight } from "react-icons/bs";

import { classSubTitle, classTitle } from "../classes/ClassText";
import Button from "../components/Button";

const About = () => {
  return (
    <section
      id="about"
      className="
        grid
        grid-cols-1
        items-center
        gap-10
        font-plus
        scroll-mt-24
        lg:grid-cols-2
        lg:gap-16
      "
    >
      {/* Conteúdo */}
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
          text-center
          lg:items-start
          lg:text-left
        "
      >
        <span className={classSubTitle}>QUEM SOMOS?</span>

        <h2
          className={`
            ${classTitle}
            w-full
            max-w-120
          `}
        >
          Cuidando do seu sorriso com{" "}
          <span className="text-[#1E63D4]">excelência e tecnologia!</span>
        </h2>

        <p
          className="
            w-full
            max-w-130
            text-sm
            leading-relaxed
            text-gray-600
            sm:text-base
          "
        >
          Na SorrisoScript, acreditamos que cada sorriso merece um cuidado
          único. Por isso, unimos tecnologia, experiência e atendimento
          humanizado para oferecer tratamentos seguros, modernos e
          personalizados em todas as etapas da sua jornada.
        </p>

        <p
          className="
            w-full
            max-w-130
            text-sm
            leading-relaxed
            text-gray-600
            sm:text-base
          "
        >
          Nosso objetivo é proporcionar uma experiência tranquila e acolhedora,
          ajudando cada paciente a cuidar da saúde bucal e recuperar a confiança
          para sorrir.
        </p>

        <Button href="#contact" variant="secondary" className="mt-2 h-11 px-5">
          Conheça Nossa História
          <BsArrowRight className="text-base" />
        </Button>
      </div>

      {/* Imagem */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-145
        "
      >
        <img
          src="/images/img-about.jpg"
          alt="Equipe da clínica odontológica SorrisoScript"
          loading="lazy"
          width={600}
          height={327}
          className="
            h-72
            w-full
            rounded-2xl
            object-cover
            object-center
            sm:h-96
            lg:h-105
          "
        />

        {/* Indicadores */}
        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-3

            lg:absolute
            lg:top-1/2
            lg:-right-8
            lg:mt-0
            lg:flex
            lg:-translate-y-1/2
            lg:flex-col
            lg:gap-4
          "
        >
          {/* Card 1 */}
          <div
            className="
              flex
              min-h-24
              flex-col
              items-center
              justify-center
              rounded-xl
              bg-[#1E63D4]
              px-5
              py-3
              text-center
              text-white
              shadow-lg
              lg:min-w-28
              lg:hidden
              xl:flex
            "
          >
            <span className="text-2xl font-bold">5+</span>

            <span className="text-xs font-medium sm:text-sm">Anos de</span>

            <span className="text-xs font-medium sm:text-sm">Experiência</span>
          </div>

          {/* Card 2 */}
          <div
            className="
              flex
              min-h-24
              flex-col
              items-center
              justify-center
              rounded-xl
              border
              border-gray-100
              bg-white
              px-5
              py-3
              text-center
              shadow-lg
              lg:min-w-28
              lg:hidden
              xl:flex
            "
          >
            <span className="text-2xl font-bold text-[#1E63D4]">2K+</span>

            <span className="text-xs font-medium text-gray-900 sm:text-sm">
              Pacientes
            </span>

            <span className="text-xs font-medium text-gray-900 sm:text-sm">
              Satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
