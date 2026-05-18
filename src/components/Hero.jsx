const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="https://plus.unsplash.com/premium_vector-1727184847317-c257d301d43c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          className="h-[250px] w-full object-cover sm:h-[400px] lg:h-[600px]"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 text-white sm:px-10">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              Temukan Produk Terbaik Untuk Anda
            </h1>

            <p className="mt-4 text-sm text-gray-200 sm:text-lg">
              Koleksi produk modern dengan kualitas terbaik dan harga
              terjangkau.
            </p>

            <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
              Belanja Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
