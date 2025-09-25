import React from "react";
import Tokopedia from "../../assets/img/tokopedia.png";
import Shopee from "../../assets/img/shopee.png";
import Tiktok from "../../assets/img/tiktok.png";
import Lazada from "../../assets/img/lazada.png";
import Fb from "../../assets/icon/facebook-icon.png";
import Ig from "../../assets/icon/instagram-icon.png";
import Tt from "../../assets/icon/tiktok-icon.png";
import Yt from "../../assets/icon/youtube-icon.png";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#081A3A] md:grid md:place-content-center">
        <div class="mx-auto w-full max-w-screen-4xl overflow-hidden">
          <div className="px-12 py-16 gap-5 sm:px-12 sm:py-14 lg:px-16 lg:py-16 flex flex-row justify-evenly w-screen text-white ">
            <div className="flex flex-col space-y-3">
              <div className="font-semibold text-base border-b-2 border-orange-700 pb-3">
                PRODUK KAMI
              </div>
              <a href="/">Perlengkapan Autocare</a>
              <a href="/">Perawatan Interior</a>
              <a href="/">Perawatan Eksterior</a>
              <a href="/">Perawatan Ban</a>
              <a href="/">Cuci Kendaraan</a>
              <a href="/">Koleksi Sponges</a>
              <a href="/">Koleksi Microfiber</a>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="font-semibold text-base border-b-2 border-orange-700 pb-3">
                TENTANG OMPRO
              </div>
              <a href="/">Sejarah Company</a>
              <a href="/">Artikel</a>
              <a href="/">Temukan Kami di</a>
              <a href="/">Koleksi Produk</a>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="font-semibold text-base border-b-2 border-orange-700 pb-3">
                TEMUKAN PRODUK KAMI DI:
              </div>
              <div className="flex flex-row space-x-5">
                <a href="https://www.tokopedia.com/ompro-auto-care">
                  <div className="flex items-center p-2 bg-gray-200 rounded-lg w-14 h-14 shadow-sm shadow-gray-700">
                    <img
                      src={Tokopedia}
                      alt="Tokopedia"
                      className="scale-100"
                    />
                  </div>
                </a>
                <a href="https://shopee.co.id/ompro_auto_care">
                  <div className="flex items-center p-2 bg-gray-200 rounded-lg w-14 h-14 shadow-sm shadow-gray-700">
                    <img src={Shopee} alt="Shopee" className="scale-75" />
                  </div>
                </a>
                <a href="https://www.lazada.co.id/shop/ompro-autocare">
                  <div className="flex items-center p-2 bg-gray-200 rounded-lg w-14 h-14 shadow-sm shadow-gray-700">
                    <img src={Lazada} alt="Lazada" className="scale-100" />
                  </div>
                </a>
                <a href="https://www.tiktok.com/@ompro_autocare">
                  <div className="flex items-center p-2 bg-gray-200 rounded-lg w-14 h-14 shadow-sm shadow-gray-700">
                    <img src={Tiktok} alt="Tiktok" className="scale-75" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="px-12 py-3 gap-5 sm:px-12 lg:px-16 bg-[#002855] text-white text-sm flex flex-row justify-between">
            <div>Ompro Autocare © 2025 All Right Reserved</div>
            <div className=" flex items-center space-x-2">
              <div>Follow us: </div>
              <a href="/">
                <img src={Yt} alt="Youtube" className="w-7" />
              </a>
              <a href="/">
                <img src={Fb} alt="Facebook" className="w-7" />
              </a>
              <a href="/">
                <img src={Tt} alt="Tiktok" className="w-7" />
              </a>
              <a href="/">
                <img src={Ig} alt="Instagram" className="w-7" />
              </a>
              ll
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
