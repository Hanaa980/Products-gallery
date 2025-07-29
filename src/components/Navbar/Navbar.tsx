import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDark(theme === "dark");
  }, []);

  const darkModeHandler = () => {
    if (!dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("theme");
      setDark(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 start-0 end-0 bg-gray-200 border-gray-200 dark:bg-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              ELEGANCE
            </span>
          </a>

          <div className=" text-2xl block md:order-2 ">
            <button onClick={() => darkModeHandler()}>
              {localStorage.getItem("theme") ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
          </div>

          <input type="checkbox" id="menu-toggle" className="peer hidden" />

          <label
            htmlFor="menu-toggle"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </label>

          <div
            id="navbar-default"
            className="max-h-0 overflow-hidden transition-[max-height] duration-[.5s] ease-in-out w-full md:block md:max-h-full md:overflow-visible md:w-auto peer-checked:max-h-96 order-2 md:order-1 "
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-2  md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
