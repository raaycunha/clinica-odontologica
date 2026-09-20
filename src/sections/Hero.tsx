import { CalendarCheck } from "lucide-react";
import { classSubTitle } from "../classes/ClassText";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        flex
        items-center
        relative
        overflow-hidden
        bg-[#fafafa]
        lg:min-h-135
        lg:bg-[url('/images/bg-hero.jpg')]
        lg:bg-cover
        lg:bg-top
      "
    >
      {/* Gradiente apenas desktop */}
      <div
        className="
          absolute inset-0
          hidden lg:block
          bg-linear-to-r
          from-[#fafafa]
          from-0%
          via-[#fafafa]
          via-40%
          to-transparent
          to-70%
          pointer-events-none
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          flex
          w-full
          max-w-300
          flex-col
          items-center
          px-4
          pt-10
          pb-12
          sm:px-6
          lg:min-h-125
          lg:justify-center
          lg:items-start
          lg:px-4
          lg:py-0
        "
      >
        <div className="flex flex-col w-full max-w-145 gap-5 lgpt-10">
          <span className={classSubTitle}>
            Um sorriso saudável e você confiante.
          </span>

          <h1
            className="
              text-center
              text-3xl/9
              font-bold
              md:text-4xl
              lg:text-5xl/13
              lg:text-left
            "
          >
            Transforme seu <span className="text-[#1E63D4]">sorriso</span>,
            recupere sua confiança.
          </h1>

          <p className="text-center lg:max-w-120 text-sm font-medium text-gray-600 sm:text-base lg:text-left">
            Tratamentos odontológicos modernos e personalizados para cuidar da
            sua saúde, estética e confiança.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button href="#contact" variant="primary" className="h-12 px-6">
              <CalendarCheck />
              Agendar Consulta
            </Button>

            <Button href="#services" variant="secondary" className="h-12 px-6">
              Nossos Serviços
            </Button>
          </div>
        </div>
        <img
          className="
            block 
            w-full 
            max-w-100 
            mt-4 
            rounded-xl 
            shadow-[0px_0px_5px_#00000025]

            md:hidden
          "
          src="/images/bg-hero-mobile.jpg"
          alt="Clinica Odontologica SorrisoScript"
          width={620}
          height={593}
        />
        <img
          className="
            hidden 
            w-full 
            max-w-150 
            mt-4 
            rounded-xl 
            shadow-[0px_0px_5px_#00000025]
            
            md:block
            lg:hidden
          "
          src="/images/bg-hero-tablet.jpg"
          alt="Clinica Odontologica SorrisoScript"
          width={1000}
          height={593}
        />
      </div>
    </section>
  );
};

export default Hero;
