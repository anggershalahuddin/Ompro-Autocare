import React from "react";

const ProductFeature = () => {
  return (
    <div>
      <section class="bg-[#E6EAF8] md:grid md:place-content-center h-full">
        <div class="mx-auto w-full max-w-screen-4xl overflow-hidden">
          <div className="px-12 py-16 gap-5 sm:px-12 sm:py-14 lg:px-16 lg:py-16 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-3xl md:text-4xl text-center font-bold text-orange-700">
                Keunggulan Produk Perawatan Kami
              </div>
              <div className=" md:px-16 text-sm md:text-lg text-center font-semibold text-blue-950">
                Produk kami terbuat dari bahan berkualitas tinggi yang aman
                untuk kendaraan Anda. Dengan kemudahan penggunaan, Anda dapat
                merawat kendaraan Anda tanpa kesulitan. Efek yang tahan lama
                memastikan kendaraan Anda tetap terlihat baru lebih lama.
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 px-8 md:px-24 mt-5">
              <div className="w-full h-full shadow-md transition hover:shadow-lg rounded-lg overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
                <div className="bg-white h-full p-4 sm:p-6">
                  <a href="/">
                    <h3 className="mt-0.5 font-semibold text-md md:text-lg text-blue-950">
                      Bahan Berkualitas Tinggi untuk Perawatan Kendaraan
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-xs md:text-sm/relaxed text-black">
                    Kami menggunakan bahan terbaik untuk hasil maksimal.
                  </p>
                </div>
              </div>
              <div className="w-full h-full shadow-sm transition hover:shadow-lg rounded-lg overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
                <div className="bg-white h-full p-4 sm:p-6">
                  <a href="/">
                    <h3 className="mt-0.5 font-semibold text-md md:text-lg text-blue-950">
                      Harga Terjangkau, Ramah di Kantong
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-xs md:text-sm/relaxed text-black">
                    Dengan harga terjangkau kami memberikan kualitas terbaik.
                  </p>
                </div>
              </div>
              <div className="w-full h-full shadow-sm transition hover:shadow-lg rounded-lg overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
                <div className="bg-white h-full p-4 sm:p-6">
                  <a href="/">
                    <h3 className="mt-0.5 font-semibold text-md md:text-lg text-blue-950">
                      Jaminan 100% Uang Kembali
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-xs md:text-sm/relaxed text-black">
                    jika produk tidak berfungsi sebagaimana mestinya uang kami
                    kembalikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFeature;
