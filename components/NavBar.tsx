"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

type NavBarItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: NavBarItem[] = [
  {
    label: "Home",
    page: "#home",
  },
  {
    label: "About",
    page: "#about",
  },
  {
    label: "Projects",
    page: "#projects",
  },
];

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      className={`w-full px-10 shadow fixed top-0 z-50 bg-white dark:bg-stone-900`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex w-full justify-between">
          <h2 className="text-2xl font-bold py-5">Martín Rosas</h2>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
          </button>
        </div>
        <div
          className={`space-y-2 md:space-y-0 md:space-x-4 flex-col md:flex-row pb-4 md:pb-0 md:flex items-center ${
            open ? "flex" : "hidden"
          }`}
        >
          {NAV_ITEMS.map((e, idx) => (
            <Link key={idx} href={e.page} className="hover:text-neutral-500">
              {e.label}
            </Link>
          ))}
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")} className="p-1 rounded text-yellow-400">
              <RiSunLine />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="p-1 rounded text-stone-600">
              <RiMoonFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
