import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import HomePage from "../pages/HomePage";
// import MyProjects from "../pages/MyProjects";
// import AboutMe from "../pages/AboutMe";
const HomePage = lazy(() => import("../pages/HomePage"));
const MyProjects = lazy(() => import("../pages/MyProjects"));
const AboutMe = lazy(() => import("../pages/AboutMe"));

export default function Main() {
  return (
    <main className="dark:bg-slate-500 flex-1 transition-all dark:text-white">
      <div className="px-4 max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myproject" element={<MyProjects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </main>
  );
}
