import React from "react";
// import { articles } from "../utils/articles";
import { productList } from "../utils/productList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Arrow from "../assets/icon/arrow.svg";

const OtherProduct = () => {
  return (
    <section class="bg-[#FFF9ED] md:grid md:place-content-center h-full w-full">
      <div class="mx-auto w-screen max-w-screen-4xl overflow-hidden">
        <div className="px-16 py-10 gap-5 sm:px-16 sm:py-14 lg:px-24 lg:py-16 flex flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-2xl md:text-4xl text-center font-bold text-indigo-800">
              Produk Kami
            </div>
            <div className="text-sm md:text-2xl text-center font-semibold">
              Temukan Produk Kebutuhanmu Disini !
            </div>
          </div>
          <div className="w-full mt-2 md:mt-5 items-center justify-center">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
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
              {productList.map((product) => (
                <SwiperSlide key={product.id} className="pb-8 md:pb-12">
                  <div className="overflow-hidden rounded-lg shadow-md transition-transform hover:shadow-lg hover:scale-95 h-full bg-white">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="h-full w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime={product.date}
                        className="block text-xs font-medium text-red-700"
                      >
                        {product.date}
                      </time>
                      <a href="/">
                        <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                          {product.title}
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed">
                        {product.description.substring(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <a
            href="/"
            className="px-4 py-2 flex items-center justify-center gap-2 outline outline-blue-900 w-fit rounded-sm"
          >
            <a href="/product" className="text-sm md:text-base ">
              Cek Produk Lainnya
            </a>
            <img src={Arrow} alt="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherProduct;
