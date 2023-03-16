
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex pt-12 flex-col w-full font-montserrat text-xl">
      <Header />

      <main>
        <div className="px-4 max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myproject" element={<MyProjects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
