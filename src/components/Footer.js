import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-200 transition-all dark:text-white dark:bg-slate-800 shadow-inner border-t border-slate-400 text-center">
      <div className="px-4 max-w-screen-lg mx-auto py-8">
        <h3 className="mb-3">Sergei Kazanin Home Page</h3>
        <p>
          @{new Date().getFullYear()} Дизайн и разработка{" "}
          <Link className="underline" to="/aboutme">
            Сергей&nbsp;Казанин
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
}
