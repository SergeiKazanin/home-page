import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex pt-12 flex-col w-full font-montserrat text-xl">
      <header className="fixed w-full h-12 top-0 left-0 z-50 shadow-md">
        <div className="px-4 h-full max-w-screen-lg mx-auto">
          <nav className="flex items-center gap-4 h-full ">
            <a href="/" className="font-greatvibes transition-colors hover:text-indigo-500 text-2xl flex items-center">Sergei Kazanin</a>
            <Link>Мои проекты</Link>
            <Link>О бо мне</Link>
          </nav>
        </div>
      </header>
      <main>
        <div className="px-4 max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
          </Routes>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
