const Reward = () => {
  const teams = [
    {
      id: 1,
      name: "John Doe",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Backend Developer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* TITLE */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Team Section</h2>

          <p className="mt-3 text-indigo-100">
            Responsive Mobile, Tablet, Desktop
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {teams.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{item.name}</h3>

                <p className="mt-2 text-gray-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reward;
