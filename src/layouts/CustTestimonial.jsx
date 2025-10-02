import React from "react";
import User from "../assets/icon/user.svg";
import Star from "../assets/icon/star.svg";
import Tokopedia from "../assets/img/tokopedia.png";
import Shopee from "../assets/img/shopee.png";
import Tiktok from "../assets/img/tiktok.png";
import Lazada from "../assets/img/lazada.png";

const CustTestimonial = () => {
  return (
    <section class="bg-[#E6EAF8] md:grid md:place-content-center h-full">
      <div class="mx-auto w-full max-w-screen-4xl overflow-hidden px-10 py-10 sm:px-12 sm:py-10 lg:px-16 lg:py-10 ">
        <div className="text-2xl md:text-4xl text-center font-bold text-blue-900 mb-6 md:mb-10">
          Produk Kami <span className="text-orange-600">Tersedia di</span>
        </div>
        <div className="flex gap-4 flex-row items-center justify-center mb-14 md:mb-20 md:gap-20">
          {/* WADAH UTAMA:
      - grid grid-cols-2: Default (mobile) menjadi 2 kolom.
      - gap-x-10 gap-y-5: Mengatur jarak antar item untuk tampilan grid.
      - md:flex md:flex-row: Pada breakpoint md, beralih ke Flexbox 1 baris.
      - md:gap-20: Mengatur jarak antar item saat Flexbox.
  */}

          {/* Item 1: Tokopedia */}
          <a
            href="https://www.tokopedia.com/ompro-auto-care"
            className="transition-all hover:scale-110"
          >
            <div className="flex items-center justify-center p-2 bg-gray-200 rounded-xl w-14 h-14 md:w-20 md:h-20  shadow-sm shadow-gray-700 border-2 border-blue-900 mx-auto">
              <img src={Tokopedia} alt="Tokopedia" className="scale-100" />
            </div>
          </a>

          {/* Item 2: Shopee */}
          <a
            href="https://shopee.co.id/ompro_auto_care"
            className="transition-all hover:scale-110"
          >
            <div className="flex items-center justify-center p-2 bg-gray-200 rounded-xl w-14 h-14 md:w-20 md:h-20  shadow-sm shadow-gray-700 border-2 border-blue-900 mx-auto">
              <img src={Shopee} alt="Shopee" className="scale-75" />
            </div>
          </a>

          {/* Item 3: Lazada */}
          <a
            href="https://www.lazada.co.id/shop/ompro-autocare"
            className="transition-all hover:scale-110"
          >
            <div className="flex items-center justify-center p-2 bg-gray-200 rounded-xl w-14 h-14 md:w-20 md:h-20  shadow-sm shadow-gray-700 border-2 border-blue-900 mx-auto">
              <img src={Lazada} alt="Lazada" className="scale-100" />
            </div>
          </a>

          {/* Item 4: TikTok */}
          <a
            href="https://www.tiktok.com/@ompro_autocare"
            className="transition-all hover:scale-110"
          >
            <div className="flex items-center justify-center p-2 bg-gray-200 rounded-xl w-14 h-14 md:w-20 md:h-20  shadow-sm shadow-gray-700 border-2 border-blue-900 mx-auto">
              <img src={Tiktok} alt="Tiktok" className="scale-75" />
            </div>
          </a>
        </div>
        <div className="text-2xl md:text-4xl font-bold text-indigo-800 text-center mb-2 md:mb-3">
          Testimonial Pelanggan
        </div>
        <div className="text-xl md:text-2xl font-semibold text-center mb-5">
          Apa kata mereka tentang{" "}
          <span className="text-orange-600 font-bold">OMPRO AUTOCARE</span>
        </div>
        <div className="md:px-20 gap-5 flex flex-col md:flex-row items-stretch justify-evenly">
          {/* Div utama diubah dari items-center ke items-stretch (atau biarkan default, tapi lebih aman items-stretch)
      Saya hapus border-black di sini. */}

          {/* KOTAK TESTIMONI 1: Tambahkan h-full */}
          <div className="bg-white rounded-xl py-8 px-8 shadow-md shadow-gray-300 w-full flex flex-col gap-3 md:gap-5 h-full">
            <div className="flex flex-row">
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
            </div>

            {/* Gunakan blockquote untuk semantik yang lebih baik */}
            <blockquote className="text-sm md:text-base font-medium mb-1 flex-grow">
              "Gw kira stiker di motor dan mobil itu gak bisa dibersihin,
              ternyata bisa cuy. Baru kali ini nemu produk sebagus ini.
              Bener-bener ampuh buat bersihin noda stiker di motor & mobil gw
              🤩"
            </blockquote>

            <div className="flex flex-row items-center gap-2 mt-auto">
              <img src={User} alt="User Profile" />
              {/* Gunakan cite untuk semantik nama */}
              <cite className="font-medium text-sm md:text-base not-italic">
                @bambangtris3
              </cite>
            </div>
          </div>

          {/* KOTAK TESTIMONI 2: Tambahkan h-full */}
          <div className="bg-white rounded-xl py-8 px-8 shadow-md shadow-gray-300 w-full flex flex-col gap-3 md:gap-5 h-full">
            <div className="flex flex-row">
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
            </div>

            <blockquote className="text-sm md:text-base font-medium mb-1 flex-grow">
              "Bagus banget cairan ini, sekali bilas langsung bersih.
              Terimakasih untuk penjual, kurirnya juga cepet. Oke pokoknya"
            </blockquote>

            <div className="flex flex-row items-center gap-2 mt-auto">
              <img src={User} alt="User Profile" />
              <cite className="font-medium text-sm md:text-base not-italic">
                @aldimotorsport
              </cite>
            </div>
          </div>

          {/* KOTAK TESTIMONI 3: Tambahkan h-full */}
          <div className="bg-white rounded-xl py-8 px-8 shadow-md shadow-gray-300 w-full flex flex-col gap-3 md:gap-5 h-full">
            <div className="flex flex-row">
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
              <img src={Star} alt="Star-svg" />
            </div>

            <blockquote className="text-sm md:text-base font-medium mb-1 flex-grow">
              Bagus… Harganya terjangkau… Terimakasih… Sukses selalu waw."
            </blockquote>

            <div className="flex flex-row items-center gap-2 mt-auto">
              <img src={User} alt="User Profile" />
              <cite className="font-medium text-sm md:text-base not-italic">
                @mas.chio
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustTestimonial;
