import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { classSubTitle, classTitle } from "../classes/ClassText";
import Reveal from "../components/Reveal";
import { allServices } from "../data/services";

const classArrow =
  "flex items-center justify-center border border-[#1E63D4] text-[#1E63D4] rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-[#1E63D4] hover:text-white";

const Services = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="services"
      className="
        flex
        flex-col
        gap-4
        font-plus
        scroll-mt-24
      "
    >
      {/* Cabeçalho */}
      <div
        className="
          flex
          flex-col
          items-center
          text-center
          gap-3
          lg:items-start
          lg:text-left
        "
      >
        <span className={classSubTitle}>NOSSOS SERVIÇOS</span>

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-between
            gap-6
            lg:flex-row
            lg:items-end
          "
        >
          <h2
            className={`
              ${classTitle}
              w-full
              max-w-150
            `}
          >
            O sorriso dos seus sonhos ao seu alcance através de{" "}
            <span className="text-[#1E63D4]">procedimentos modernos</span> e{" "}
            <span className="text-[#1E63D4]">personalizados</span>
          </h2>

          {/* Setas desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className={classArrow}
              aria-label="Serviço anterior"
            >
              <BsArrowLeft className="text-3xl" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className={classArrow}
              aria-label="Próximo serviço"
            >
              <BsArrowRight className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Carrossel */}
      <div className="pt-3 sm:pt-4">
        <Swiper
          className="[&>.swiper-wrapper]:items-stretch"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          grabCursor
          speed={600}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 12,
            },

            480: {
              slidesPerView: 1.18,
              spaceBetween: 16,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {allServices.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <article
                className="
                  flex
                  h-full
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  lg:hover:-translate-y-1
                  lg:hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                "
              >
                {/* Imagem */}
                <div className="relative">
                  <img
                    src={`/images/img-services/${item.image}`}
                    alt={item.title}
                    width={400}
                    height={235}
                    loading="lazy"
                    className="
                      h-48
                      w-full
                      object-cover
                      sm:h-52
                      lg:h-56
                    "
                  />

                  {/* Ícone */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-5
                      flex
                      h-16
                      w-16
                      translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-white
                      bg-[#1f72f7]
                      shadow-md
                      lg:h-18
                      lg:w-18
                    "
                  >
                    <img
                      src={`/images/icons-services/${item.icon}`}
                      alt={`Icon ${item.title}`}
                      width={100}
                      height={100}
                      aria-hidden="true"
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    items-start
                    gap-2
                    px-5
                    pb-5
                    pt-10
                    sm:px-6
                    sm:pt-11
                    lg:pt-12
                  "
                >
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-gray-950
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      flex-1
                      text-sm
                      leading-relaxed
                      text-gray-600
                    "
                  >
                    {item.text}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#1E63D4]
                      transition-all
                      duration-300
                      hover:gap-3
                      sm:text-base
                    "
                  >
                    Ler mais
                    <BsArrowRight className="text-base" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Indicação apenas no mobile */}
      <p
        className="
          mt-1
          text-center
          text-xs
          text-gray-400
          lg:hidden
        "
      >
        Deslize para conhecer mais serviços →
      </p>
    </section>
  );
};

export default Services;
