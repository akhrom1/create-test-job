const Recomendation = () => {
  const fitData = [
    {
      id: 1,
      name: "Banyak Pilihan Warna",
      img: "https://images.openai.com/static-rsc-4/jgFO65MLNDtJMumQLEnTOvxLvmT8Kfsigvq5HdZeYDUL-WuvWviOwn59DGyGWCEVoIALceTyLEsUOukQJPLbxbw8jJJXVCE8GEjlp4kCrjVb6n9CnLe4judGIf7GTlGmojNdsakEgUxbhvUBHuhgphdKN96p3FJ39arMkRNBXxvkK-U0M6IhmvsXuTgORmNl?purpose=fullsize",
      desc: "Tersedia berbagai warna menarik dan modern untuk mempercantik dapur dan meja makan Anda.",
    },
    {
      id: 2,
      name: "Berbagai Ukuran",
      img: "https://images.openai.com/static-rsc-4/csTWorB4Rzju73k309VQRW4T2K-0apilOlKF4Dc26cOCGLQvp35rqws-86WQmsr0EM_CpxjYBKUEewksEYN1_zH1tyfjeSMP9fHWwyP0PU_0_v3hjiBvT1pHCncWxtf-CchgqIJy5g5qk1j8K392xeia12ueEOsZPV4wI0nHjQgtiWY5P9PzNqtCeBprlfCu?purpose=fullsize",
      desc: "Pilihan ukuran lengkap mulai dari kecil hingga besar untuk kebutuhan penyimpanan sehari-hari.",
    },
    {
      id: 3,
      name: "Kuat dan Tahan Lama",
      img: "https://images.openai.com/static-rsc-4/SH74GCRaAjC7ANG2UshavqvbZgvBdvdi_QGcUfnbcWrWMcahf0-wI8zLPzQUa0GDcopaLwbCazkR3qc8LSXkI3oA19YMqo3fMr96jMZxuHCp2bJyEfDX5hTjih7aYas65pZ1EKWsDUKeSodbBaBqEl8DLvaLiF924vIRwgZMXojeZfRH4Rw5Z-omOabdXO2F?purpose=fullsize",
      desc: "Menggunakan material berkualitas tinggi yang kokoh, aman, dan tahan digunakan dalam jangka panjang.",
    },
    {
      id: 4,
      name: "Anti Bocor & Praktis",
      img: "https://images.openai.com/static-rsc-4/NXXwRioBjX5BlfPjJd_ot-df89TaZz7sXjWQii7vyyaguleZmJw2Z_jwuOYDzxalxnUbmrPAlKTzQ1iEOdoYJMP80k_rTwRjg4PQYcvmkldxRqYKJ6LZYWI45lts3lIA_a8QI_GUJz67ONAcamQ9T37xCWfD2vUsMB366t37u7yZLMLnUKvzJIttnJG-0ccP?purpose=fullsize",
      desc: "Desain penutup rapat membantu menjaga makanan tetap segar dan tidak mudah tumpah.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {fitData.length === 0 ? (
        <p className="text-red-500">Data tidak ada</p>
      ) : (
        <>
          {/* MOBILE */}
          <div className="space-y-6 sm:hidden">
            {fitData.map((item, index) => (
              <div
                key={item.id}
                className={`flex overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition hover:shadow-purple-500/30 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-32 w-32 object-cover"
                />

                <div
                  className={`flex-1 p-4 text-white ${
                    index % 2 === 1 ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold">{item.name}</h3>

                  <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TABLET */}
          <div className="hidden grid-cols-2 gap-6 sm:grid lg:hidden">
            {fitData.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition hover:shadow-purple-500/30"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5 text-white">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden grid-cols-4 gap-6 lg:grid">
            {fitData.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition hover:shadow-purple-500/30"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5 text-white">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Recomendation;
