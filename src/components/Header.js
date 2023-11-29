import React, { useEffect, useState } from "react";
import AcademicSvg from "./svg/AcademicSvg";
import HomeSvg from "./svg/HomeSvg";
import AboutMeSvg from "./svg/AboutMeSvg";
import LightSvg from "./svg/LightSvg";
import DarkSvg from "./svg/DarkSvg";
import MenuSvg from "./svg/MenuSvg";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  const [theme, setTheme] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = () => {
    if (theme === "light") {
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  const handleClickMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
    return () => {};
  }, [theme]);

  return (
    <header className="fixed w-full dark:text-white bg-white dark:bg-slate-800 transition-all h-12 top-0 left-0 z-50 shadow-md">
      <Menu menuOpen={menuOpen} setMenuOpen={handleClickMenu} />

      <div className="px-4 h-full max-w-screen-lg mx-auto">
        <nav className="flex justify-between h-full">
          <div className="flex items-center md:hidden transition-colors hover:text-indigo-500">
            <button onClick={() => handleClickMenu()}>
              <MenuSvg />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <div className="flex transition-colors hover:text-indigo-500">
                <HomeSvg />
                <span className="ml-1 font-greatvibes  text-2xl">
                  Sergei Kazanin
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/myproject"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <div className="flex transition-colors hover:text-indigo-500">
                <AcademicSvg />
                <span className="ml-1">Мои проекты</span>
              </div>
            </NavLink>
            <NavLink
              to="/aboutme"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <div className="flex transition-colors hover:text-indigo-500">
                <AboutMeSvg />
                <span className="ml-1">Обо мне</span>
              </div>
            </NavLink>
          </div>
          <div className="flex items-center ">
            <button
              className="transition-colors hover:text-indigo-500"
              onClick={() => handleThemeChange()}
            >
              {theme === "light" ? <DarkSvg /> : <LightSvg />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
