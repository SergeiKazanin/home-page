import AcademicSvg from "./svg/AcademicSvg";
import HomeSvg from "./svg/HomeSvg";
import AboutMeSvg from "./svg/AboutMeSvg";
import { NavLink } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
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
            <NavLink
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <HomeSvg />
              <span className="ml-2 text-4xl font-greatvibes">
                Sergei Kazanin
              </span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/myproject"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <AcademicSvg />
              <span className="ml-2 text-3xl">Мои проекты</span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink
              className="transition-colors hover:text-indigo-500 flex items-center"
              onClick={setMenuOpen}
              to="/aboutme"
              style={({ isActive }) => ({
                color: isActive ? "#6366F1" : "inherit",
              })}
            >
              <AboutMeSvg />
              <span className="ml-2 text-3xl">Обо мне</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
