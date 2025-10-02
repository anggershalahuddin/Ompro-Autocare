import React from "react";
import OmproHero from "../../assets/img/Ompro-Hero.jpg";

const Hero = () => {
  return (
    <div className="bg-blue-800">
      <div className="mx-auto flex max-w-screen-4xl h-fit items-center">
        <div className="md:grid md:grid-cols-2 justify-center h-[800px] overflow-hidden text-white">
          <div className="relative h-full w-full px-12 md:pl-36 xl:pl-42 md:pr-24 flex flex-col justify-center gap-8">
            <div className="absolute md:hidden inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <div className="absolute inset-0 bg-blue-800/80"></div>
            </div>
            <div className="relative z-10 space-y-5">
              <h1 className="text-4xl font-bold sm:text-5xl text-shadow-lg shadow-black custom-text-shadow">
                Perawatan Kendaran
                <strong className="text-orange-400"> Premium </strong>
                untuk Performa Optimal
              </h1>
              <h3 className="font-medium text-base text-pretty sm:text-lg/relaxed custom-text-shadow">
                <strong className="text-orange-400 custom-text-shadow">
                  OMPRO AUTOCARE{" "}
                </strong>
                menyediakan layanan perawatan kendaraan terbaik dengan teknologi
                mutakhir dan bahan berkualitas tinggi.
              </h3>
              <div class="flex gap-4">
                <a
                  class="inline-block rounded border border-orange-600 bg-orange-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-orange-700 text-sm md:text-base "
                  href="/"
                >
                  Produk Kami
                </a>

                <a
                  class="inline-block rounded border border-white bg-white px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-gray-200 hover:text-gray-900 text-sm md:text-base"
                  href="/"
                >
                  Lihat Artikel
                </a>
              </div>
            </div>
          </div>
          <img
            src={OmproHero}
            alt="OmproHero"
            className="hidden sm:flex overflow-hidden w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
