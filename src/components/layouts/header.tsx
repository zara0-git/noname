"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import menus from "@/src/data/menu";

export default function Header() {
  return (
    <header className=" relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <img
            className="w-[50px]"
            src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-blue-bird-isolated-on-transparent-png-image_9140659.png"
            alt="LOGO"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Aogara
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {menus.map((s, index) => (
                <li
                  key={index}
                  className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#101eea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  <Link href={s.url}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center gap-2">
            <svg
              className="text-[30px] cursor-pointer md:hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
