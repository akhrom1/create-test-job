import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menus = ["Product", "Galery", "Blog", "Tentang Kami", "Hubungi Kami"];

  return (
    <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
            MyStore
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-8 lg:flex">
            {menus.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 transition hover:text-purple-400"
              >
                {item}
              </a>
            ))}

            <button className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-white transition hover:shadow-lg hover:shadow-purple-500/50">
              Login
            </button>
          </nav>

          {/* TABLET MENU */}
          <nav className="hidden items-center gap-4 sm:flex lg:hidden">
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400">
              Product
            </a>

            <a href="#" className="text-sm text-gray-300 hover:text-purple-400">
              Blog
            </a>

            <button className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm text-white hover:shadow-lg hover:shadow-purple-500/50">
              Login
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="sm:hidden">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-purple-500/20 bg-gray-800/50 py-4 sm:hidden backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              {menus.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-purple-400"
                >
                  {item}
                </a>
              ))}

              <button className="mt-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-white hover:shadow-lg hover:shadow-purple-500/50">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
