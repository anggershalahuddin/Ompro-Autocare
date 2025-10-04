import React from "react";
import icon_1 from "../assets/icon/icon-1.svg";
import icon_2 from "../assets/icon/icon-2.svg";
import icon_3 from "../assets/icon/icon-3.svg";

const WhyChooseUs = () => {
  return (
    <section class="bg-[#FFF9ED] md:grid md:place-content-center h-full">
      <div class="mx-auto w-full max-w-screen-4xl overflow-hidden px-10 py-10 sm:px-12 sm:py-10 lg:px-16 lg:py-14 ">
        <div className="text-2xl md:text-3xl font-bold text-indigo-800 mb-10 text-center">
          Kenapa Harus Produk{" "}
          <span className="text-orange-600 font-bold">OMPRO ?</span>
        </div>
        <div className="gap-5 flex flex-col md:flex-row items-start justify-evenly px-4 md:px-20">
          <div className="w-full md:w-[60%] bg-white rounded-xl gap-3 py-5 px-4 shadow-md shadow-gray-300 flex flex-col justify-center items-center">
            <img
              src={icon_1}
              alt="icon_1"
              className="w-[20%] md:w-[30%] lg:w-[20%]"
            />
            <div className="text-lg md:text-xl text-blue-900 font-bold text-center ">
              Bahan Berkualitas Tinggi untuk Perawatan Kendaraan
            </div>
            <div className="text-xs md:text-base text-wrap text-center">
              Kami menggunakan bahan terbaik untuk hasil maksimal.
            </div>
            <a
              href="/"
              className="text-xs md:text-sm text-wrap xl:text-nowrap text-center bg-orange-400 px-2 py-1 rounded-lg mt-3 md:mt-5"
            >
              Coba Sekarang <span>^</span>
            </a>
          </div>
          <div className="w-full md:w-[60%] bg-white rounded-xl gap-3 py-5 px-4 shadow-md shadow-gray-300 flex flex-col justify-center items-center">
            <img
              src={icon_2}
              alt="icon_2"
              className="w-[20%] md:w-[30%] lg:w-[20%]"
            />
            <div className="text-lg md:text-xl text-blue-900 font-bold text-center ">
              Mudah Digunakan untuk Semua Pengguna
            </div>
            <div className="text-xs md:text-base text-wrap text-center">
              Produk kami dirancang agar mudah digunakan oleh siapa saja.
            </div>
            <a
              href="/"
              className="text-xs md:text-sm text-wrap xl:text-nowrap text-center bg-orange-400 px-2 py-1 rounded-lg mt-3 md:mt-5"
            >
              Coba Sekarang <span>^</span>
            </a>
          </div>
          <div className="w-full md:w-[60%] bg-white rounded-xl gap-3 py-5 px-4 shadow-md shadow-gray-300 flex flex-col justify-center items-center">
            <img
              src={icon_3}
              alt="icon_3"
              className="w-[20%] md:w-[30%] lg:w-[20%]"
            />
            <div className="text-lg md:text-xl text-blue-900 font-bold text-center ">
              Efek Tahan Lama untuk Kendaraan Anda
            </div>
            <div className="text-xs md:text-base text-wrap text-center">
              Nikmati hasil yang bertahan lama dengan produk kami.
            </div>
            <a
              href="/"
              className="text-xs md:text-sm text-wrap xl:text-nowrap text-center bg-orange-400 px-2 py-1 rounded-lg mt-3 md:mt-5"
            >
              Coba Sekarang <span>^</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
