const Footer = () => {
  const productLinks = [
    "Promo",
    "Baru",
    "Kategori 1",
    "Kategori 2",
    "Kategori 3",
  ];

  const companyLinks = [
    "About",
    "Contact Us",
    "Lowongan Kerja",
    "Gallery",
    "Blog",
    "Kebijakan Privasi",
    "Syarat dan Ketentuan",
  ];

  const socialLinks = ["Facebook", "Twitter", "Instagram"];

  return (
    <footer className="border-t border-purple-500/20 bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* LOGO & ADDRESS */}
          <div className="lg:col-span-2">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
              MyStore
            </h2>

            <div className="mt-6 space-y-2 text-gray-400">
              <p>Jl. Raya Indonesia No.123</p>
              <p>Surabaya</p>
              <p>60293</p>
              <p>+62 812 3456 7890</p>
            </div>

            <div className="mt-6 flex gap-5 text-gray-400">
              {socialLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* PRODUK */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">Produk</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              {productLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* PERUSAHAAN */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">Perusahaan</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              {companyLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-purple-500/20 pt-6 text-center text-sm text-gray-500">
          © 2019-2021 Gradin. All Rights Reserved.
          <br className="sm:hidden" />
          Please send bug report and feedback to:
          <a href="#" className="ml-1 text-purple-400 hover:text-white">
            Gradin
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
