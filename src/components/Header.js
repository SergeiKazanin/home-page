import React, { useEffect, useState } from "react";
import AcademicSvg from "./svg/AcademicSvg";
import HomeSvg from "./svg/HomeSvg";
import AboutMeSvg from "./svg/AboutMeSvg";
import LightSvg from "./svg/LightSvg";
import DarkSvg from "./svg/DarkSvg";
import MenuSvg from "./svg/MenuSvg";
import { Link } from "react-router-dom";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div
      onClick={setMenuOpen}
      className={`fixed -left-2 top-12 w-screen h-screen transition-all ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="dark:bg-slate-800 bg-slate-400 w-80 h-52 shadow-md rounded-md"
      >
        <div className="flex flex-col justify-start gap-6  p-6">
          <div className="flex items-center">
            <Link
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/"
            >
              <HomeSvg className="w-10 h-10" />
              <span className="ml-2 text-4xl font-greatvibes">
                Sergei Kazanin
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/myproject"
            >
              <AcademicSvg />
              <span className="ml-2 text-3xl">Мои проекты</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/aboutme"
            >
              <AboutMeSvg />
              <span className="ml-2 text-3xl">Обо мне</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    setMenuOpen(!menuOpen);
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
            <Link to="/">
              <div className="flex transition-colors hover:text-indigo-500">
                <HomeSvg />
                <span className="ml-1 font-greatvibes  text-2xl">
                  Sergei Kazanin
                </span>
              </div>
            </Link>
            <Link to="/myproject">
              <div className="flex transition-colors hover:text-indigo-500">
                <AcademicSvg />
                <span className="ml-1">Мои проекты</span>
              </div>
            </Link>
            <Link to="/aboutme">
              <div className="flex transition-colors hover:text-indigo-500">
                <AboutMeSvg />
                <span className="ml-1">Обо мне</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center transition-colors hover:text-indigo-500">
            <button onClick={() => handleThemeChange()}>
              {theme === "light" ? <DarkSvg /> : <LightSvg />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
