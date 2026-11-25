import { useRef } from "react";

import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { classSubTitle, classTitle } from "../classes/ClassText";
import { allReviews } from "../data/reviews";

const classArrow =
  "flex items-center justify-center border border-[#1E63D4] text-[#1E63D4] rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-[#1E63D4] hover:text-white";

const Reviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="reviews"
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
          justify-between
          gap-6
          lg:flex-row
          lg:items-end
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            text-center
            lg:items-start
            lg:text-left
          "
        >
          <span className={classSubTitle}>DEPOIMENTOS</span>

          <h2
            className={`
              ${classTitle}
              w-full
              max-w-150
            `}
          >
            Sorrisos reais, histórias que{" "}
            <span className="text-[#1E63D4]">inspiram.</span>
          </h2>

          <p
            className="
              max-w-130
              text-sm
              leading-relaxed
              text-gray-600
              sm:text-base
            "
          >
            Veja o que nossos pacientes dizem sobre suas experiências e
            tratamentos na SorrisoScript.
          </p>
        </div>

        {/* Setas - Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className={classArrow}
            aria-label="Depoimento anterior"
          >
            <BsArrowLeft className="text-3xl" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className={classArrow}
            aria-label="Próximo depoimento"
          >
            <BsArrowRight className="text-3xl" />
          </button>
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
              slidesPerView: 1.15,
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
          {allReviews.map((item) => (
            <SwiperSlide key={item.id} className="h-auto! flex">
              <article
                className="
                  flex
                  h-full
                  min-h-82.5
                  w-full
                  flex-col
                  justify-between
                  gap-6
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  sm:p-6
                  lg:hover:-translate-y-1
                  lg:hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                "
              >
                {/* Avaliação */}
                <div className="flex flex-col gap-4">
                  <div
                    aria-label="Avaliação: 5 de 5 estrelas"
                    className="
                      flex
                      items-center
                      gap-1
                      text-[#1E63D4]
                    "
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <BsStarFill
                        key={index}
                        aria-hidden="true"
                        className="text-base sm:text-lg"
                      />
                    ))}
                  </div>

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-gray-700
                      sm:text-base
                    "
                  >
                    “{item.text}”
                  </p>
                </div>

                {/* Paciente */}
                <div className="flex items-center gap-3">
                  <img
                    src={`/images/img-reviews/${item.image}`}
                    alt={`Foto de ${item.name}`}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="
                      h-14
                      w-14
                      shrink-0
                      rounded-full
                      object-cover
                      sm:h-16
                      sm:w-16
                    "
                  />

                  <div className="flex min-w-0 flex-col">
                    <span
                      className="
                        font-bold
                        text-gray-950
                      "
                    >
                      {item.name}
                    </span>

                    <span
                      className="
                        mb-2
                        text-xs
                        text-gray-600
                        sm:text-sm
                      "
                    >
                      {item.local}
                    </span>

                    <span
                      className="
                        w-fit
                        rounded-full
                        bg-[#1e64d418]
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-[#1E63D4]
                        sm:text-sm
                      "
                    >
                      {item.service}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Indicação Mobile */}
      <p
        className="
          mt-1
          text-center
          text-xs
          text-gray-400
          lg:hidden
        "
      >
        Deslize para ver mais avaliações →
      </p>
    </section>
  );
};

export default Reviews;
