import React from "react";

const RiviewSummary = () => {
  return (
    <section class="bg-[#E6EAF8] md:grid md:place-content-center h-full">
      <div class="mx-auto w-full max-w-screen-4xl overflow-hidden px-10 py-10 sm:px-12 sm:py-10 lg:px-16 lg:py-10 ">
        <div className="text-2xl md:text-3xl font-bold text-indigo-800 mb-5">
          Penilaian Pelanggan Kami
        </div>
        <div className="gap-5 flex flex-col md:flex-row items-center justify-evenly">
          <div className="bg-white rounded-xl py-5 px-8 shadow-md shadow-gray-300  w-full">
            <div className="text-5xl md:text-5xl text-orange-600 font-semibold mb-5">
              95%
            </div>
            <div className="text-xl md:text-2xl text-blue-900 font-semibold mb-1">
              Ulasan Positif
            </div>
            <div className="text-xs md:text-base text-wrap md:text-nowrap">
              Kami Mendapatkan ulasan positif dari pelanggan
            </div>
          </div>
          <div className="bg-white rounded-xl py-5 px-8 shadow-md shadow-gray-300 w-full">
            <div className="text-5xl md:text-5xl text-orange-600 font-semibold mb-5">
              85%
            </div>
            <div className="text-xl md:text-2xl text-blue-900 font-semibold mb-1">
              Penggunaan Ulang
            </div>
            <div className="text-xs md:text-base text-wrap md:text-nowrap">
              85% pelanggan kami kembali membeli produk.
            </div>
          </div>
          <div className="bg-white rounded-xl py-5 px-8 shadow-md shadow-gray-300  w-full">
            <div className="text-5xl md:text-5xl text-orange-600 font-semibold mb-5">
              100%
            </div>
            <div className="text-xl md:text-2xl text-blue-900 font-semibold mb-1">
              Komitmen Kami
            </div>
            <div className="text-xs md:text-base text-wrap md:text-nowrap">
              Kami berkomitmen untuk kepuasan pelanggan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiviewSummary;
