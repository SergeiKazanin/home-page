import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex pt-12 flex-col w-full min-h-screen font-montserrat text-xl">
      <Header />
      <main className="dark:bg-slate-500 flex-1 transition-all dark:text-white">
        <div className="px-4 max-w-screen-lg mx-auto">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
