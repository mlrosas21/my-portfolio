"use client";

import { useTheme } from "next-themes";
import React from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

type NavBarItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: NavBarItem[] = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Projects",
    page: "/projects",
  },
];

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className={`w-full px-4 shadow fixed top-0 z-50 bg-white dark:bg-stone-900`}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold py-5">Martín Rosas</h2>
        <ul className="list-none flex space-x-4">
          {NAV_ITEMS.map((e, idx) => (
            <li key={idx}>{e.label}</li>
          ))}
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")}>
              <RiSunLine />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <RiMoonFill />
            </button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
