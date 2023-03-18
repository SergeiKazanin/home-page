import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyProjects from "../pages/MyProjects";
import AboutMe from "../pages/AboutMe";

export default function Main() {
  return (
    <main className="dark:bg-slate-500 flex-1 dark:text-white">
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
