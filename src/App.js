import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex pt-12 flex-col w-full h-screen justify-between font-montserrat text-xl">
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

      <Footer />
    </div>
  );
}

export default App;
