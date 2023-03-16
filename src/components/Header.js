import React, { useEffect, useState } from "react";
import AcademicSvg from "./svg/AcademicSvg";
import HomeSvg from "./svg/HomeSvg";
import AboutMeSvg from "./svg/AboutMeSvg";
import LightSvg from "./svg/LightSvg";
import DarkSvg from "./svg/DarkSvg";
import { Link } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState("");

  const handleThemeChange = () => {
    if (theme === "light") {
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      setTheme("light");
    }
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
    <header className="fixed w-full dark:text-white dark:bg-slate-800 h-12 top-0 left-0 z-50 shadow-md">
      <div className="px-4 h-full max-w-screen-lg mx-auto">
        <nav className="flex justify-between h-full ">
          <div className="flex items-center gap-4 h-full ">
            <Link to="/">
              <div className="flex">
                <HomeSvg />
                <span className="ml-1 font-greatvibes transition-colors hover:text-indigo-500 text-2xl">
                  Sergei Kazanin
                </span>
              </div>
            </Link>
            <Link to="/myproject">
              <div className="flex">
                <AcademicSvg />
                <span className="ml-1">Мои проекты</span>
              </div>
            </Link>
            <Link to="aboutme">
              <div className="flex">
                <AboutMeSvg />
                <span className="ml">Обо мне</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <button onClick={handleThemeChange}>
              {theme === "light" ? <DarkSvg /> : <LightSvg />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
