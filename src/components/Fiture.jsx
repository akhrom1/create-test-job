const Recomendation = () => {
  const fitData = [
    {
      id: 1,
      name: "Banyak Pilihan Warna",
      img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7",
      desc: "Tersedia berbagai warna menarik dan modern untuk mempercantik dapur dan meja makan Anda.",
    },
    {
      id: 2,
      name: "Berbagai Ukuran",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      desc: "Pilihan ukuran lengkap mulai dari kecil hingga besar untuk kebutuhan penyimpanan sehari-hari.",
    },
    {
      id: 3,
      name: "Kuat dan Tahan Lama",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      desc: "Menggunakan material berkualitas tinggi yang kokoh, aman, dan tahan digunakan dalam jangka panjang.",
    },
    {
      id: 4,
      name: "Anti Bocor & Praktis",
      img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
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
                className={`flex overflow-hidden rounded-3xl bg-white shadow-lg ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-32 w-32 object-cover"
                />

                <div
                  className={`flex-1 p-4 ${
                    index % 2 === 1 ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold">{item.name}</h3>

                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TABLET */}
          <div className="hidden grid-cols-2 gap-6 sm:grid lg:hidden">
            {fitData.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden grid-cols-4 gap-6 lg:grid">
            {fitData.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-gray-600">{item.desc}</p>
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
