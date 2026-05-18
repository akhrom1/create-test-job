const MarketplacePartner = () => {
  const marketplaces = [
    {
      id: 1,
      name: "Tokopedia",
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "Shopee",
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "Lazada",
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Bukalapak",
      color: "bg-red-500",
    },
    {
      id: 5,
      name: "Blibli",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* TITLE */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Marketplace Partner</h2>

        <p className="mt-3 text-gray-600">Responsive Mobile, Tablet, Desktop</p>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-5 sm:hidden">
        {marketplaces.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`${item.color} flex items-center justify-center rounded-2xl px-6 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-105`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* TABLET */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid grid-cols-3 gap-5">
          {marketplaces.slice(0, 3).map((item) => (
            <a
              key={item.id}
              href="#"
              className={`${item.color} rounded-2xl px-4 py-5 text-center text-white shadow-lg transition hover:scale-105`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-5">
          {marketplaces.slice(3).map((item) => (
            <a
              key={item.id}
              href="#"
              className={`${item.color} rounded-2xl px-10 py-5 text-center text-white shadow-lg transition hover:scale-105`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden justify-between gap-5 lg:flex">
        {marketplaces.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`${item.color} flex-1 rounded-2xl px-8 py-5 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default MarketplacePartner;
