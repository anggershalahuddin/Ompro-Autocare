import React from "react";
import { articles } from "../../utils/articles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Arrow from "../../assets/icon/arrow.svg";

const Main = () => {
  return (
    <section class="bg-[#E6EAF8] md:grid md:place-content-center h-full">
      <div class="mx-auto w-full max-w-screen-4xl overflow-hidden">
        <div className="px-12 py-16 gap-5 sm:px-12 sm:py-14 lg:px-16 lg:py-16 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-4xl text-center font-bold text-indigo-800">
              Produk Kami
            </div>
            <div className="text-xl text-center font-semibold text-orange-600">
              Temukan Produk Kebutuhanmu Disini !
            </div>
          </div>
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              anima
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id} className="pb-8 md:pb-12">
                  <article className="overflow-hidden rounded-lg shadow-sm transition-transform hover:shadow-lg hover:scale-95 h-full bg-white">
                    <img
                      alt={article.title}
                      src={article.image}
                      className="h-56 w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime={article.date}
                        className="block text-xs font-medium text-red-700"
                      >
                        {article.date}
                      </time>
                      <a href="/">
                        <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                          {article.title}
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed">
                        {article.description.substring(0, 80) + "..."}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <a
            href="/"
            className="px-4 py-2 flex items-center justify-center gap-2 outline outline-blue-500 w-fit rounded-sm"
          >
            <a href="/product" className="text-sm md:text-base">
              Cek Produk Lainnya
            </a>
            <img src={Arrow} alt="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
