const Reward = () => {
  const teams = [
    {
      id: 1,
      name: "Top Brand 2016-2020",
      img: "https://images.openai.com/static-rsc-4/QYF7UP2TLiwANsPjaICXEDQg1lrY1_gRW7tfP9GkMJozYvT2w8HAqF1pGo4ZJn5g_vB3zJVe3NArj-PM1qPpXy8tDZEpO4TvVms9j0yLtWoGHRXxkqJjmK2fCKm23iPh0kotTt8Fuar7Ga5HvwjrOwgXj7KrkYI0ttPPy98BCDgc_H6O3uXKxqObMY-_4EC7?purpose=fullsize",
    },
    {
      id: 2,
      name: "Popular Brand Award 2016-2020",
      img: "https://images.openai.com/static-rsc-4/07HAjFFovEr20vBYBGwk484TiuCRCwPUpa0m4YsQbTJWnNi9Ac6xCyldLTuySAa1ATjuzR-3ukF_3yOYChcs-SwDZWfWuur57K7_AKyDOZwzgTrkT595DJ0qIoPGIA2v9YhIkbEmvWHTu4gfc5yQUaxGHpoeVHNMcJSlWxypyYzGGY_ZP1eQSTikSB9NbsNC?purpose=fullsize",
    },
    {
      id: 3,
      name: "Top Inovation 2016-2020",
      img: "https://images.openai.com/static-rsc-4/qGZncqqPG_fR1uyNe7XPEO5W_84fmP_UDoH-cbM2-drbhm1lpgBQKZfi8hf9zwIJlMope8uPA_2ZTN1-6CqaSOqwVUy2AzGlt3HwMXc6dHOLM3Olbv2FrbCD0ktaQkk9kO82bMBS6LFeDN4W9-Jdju6uAnuQ2nMy3W6y0poYEVVVkVgnFYjD2MipcY_kZkar?purpose=fullsize",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* TITLE */}
        <div className="mb-12 text-center text-white">
          <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Penghargaan
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {teams.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-gray-800 shadow-lg transition hover:-translate-y-2 hover:shadow-purple-500/40"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5 text-center text-white">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reward;
