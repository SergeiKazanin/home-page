import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex pt-12 flex-col max-w-screen-lg items-center">
      <header className="fixed h-12 top-0 left-0 z-50">
        <nav>
          <Link>О бо мне</Link>
          <Link>Домой</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
