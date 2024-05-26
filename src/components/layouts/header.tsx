"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import routes from "@/src/app/route/routes";

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    // scrollHandler();
    // window.addEventListener("scroll", scrollHandler);
    // return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header>
      <nav
        className={`bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-slate-950 ${
          top ? "top-0" : "fixed"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
               src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-blue-bird-isolated-on-transparent-png-image_9140659.png"
              className="mr-3 h-6 sm:h-9"
              alt="logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Aogara
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link href={route.url} passHref className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                    {/* <a  href={route.url} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"> */}
                      {route.name}
                    {/* </a> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
