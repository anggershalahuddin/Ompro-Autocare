import React, { useState } from "react";
import Logo from "../../src/assets/img/Logo.png";

const Navbar = () => {
  // Definisikan state untuk melacak apakah menu terbuka (true) atau tertutup (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk membalik nilai state (toggle)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Catatan: Hapus 'bottom-6' dari header jika tidak ada maksud khusus,
    // dan pastikan z-10 ada di sini.
    <header className="bg-blue-950 shadow-md z-20 sticky top-0">
      <div className="mx-auto flex h-16 max-w-screen-4xl items-center gap-8 px-10 sm:px-6 lg:px-8 relative">
        {/* Tambahkan relative pada container agar menu absolute bisa diatur */}

        <div className="flex flex-1 items-center justify-between text-white">
          {/* Logo */}
          <a className="block" href="/">
            <span className="sr-only">Home</span>
            <img src={Logo} alt="Ompro-Logo" className="w-28" />
          </a>

          {/* Tombol Hamburger (Mobile) */}
          <button
            className="block rounded-sm text-white transition hover:text-gray-200 lg:hidden"
            onClick={toggleMenu} // PENTING: Tambahkan onClick handler di sini
            aria-expanded={isMenuOpen} // Aksesibilitas
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Ganti path d dengan icon X jika menu terbuka (opsional) */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Kontainer Menu Navigasi */}
          <div
            className={`
              ${isMenuOpen ? "flex" : "hidden"} 
              flex-col 
              absolute top-full right-0 w-full 
              bg-blue-800 lg:p-0 
              lg:static lg:bg-transparent lg:flex 
              lg:flex-row lg:justify-end font-medium text-sm
            `}
          >
            {/* Navigasi Links */}
            <a
              href="/"
              className="block p-4 py-2 lg:py-0 text-white hover:bg-blue-400 lg:hover:bg-transparent"
            >
              Beranda
            </a>
            <a
              href="/product"
              className="block p-4 py-2 lg:py-0 text-white hover:bg-blue-400 lg:hover:bg-transparent"
            >
              Produk Kami
            </a>
            <a
              href="/article"
              className="block p-4 py-2 lg:py-0 text-white hover:bg-blue-400 lg:hover:bg-transparent"
            >
              Artikel
            </a>
            <a
              href="/about"
              className="block p-4 py-2 lg:py-0 text-white hover:bg-blue-400 lg:hover:bg-transparent"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
