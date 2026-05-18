import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menus = ["Product", "Galery", "Blog", "Tentang Kami", "Hubungi Kami"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-8 lg:flex">
            {menus.map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-indigo-600"
              >
                {item}
              </a>
            ))}

            <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700">
              Login
            </button>
          </nav>

          {/* TABLET MENU */}
          <nav className="hidden items-center gap-4 sm:flex lg:hidden">
            <a href="#" className="text-sm hover:text-indigo-600">
              Product
            </a>

            <a href="#" className="text-sm hover:text-indigo-600">
              Blog
            </a>

            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
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
          <div className="border-t py-4 sm:hidden">
            <nav className="flex flex-col gap-4">
              {menus.map((item) => (
                <a key={item} href="#" className="hover:text-indigo-600">
                  {item}
                </a>
              ))}

              <button className="mt-2 rounded-lg bg-indigo-600 px-5 py-2 text-white">
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
