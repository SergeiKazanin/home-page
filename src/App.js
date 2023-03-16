import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyProjects from "./pages/MyProjects"; 
import AboutMe from "./pages/AboutMe"
import AcademicSvg from "./components/svg/AcademicSvg";
import HomeSvg from "./components/svg/HomeSvg";
import AboutMeSvg from "./components/svg/AboutMeSvg";


function App() {
  return (
    <div className="flex pt-12 flex-col w-full font-montserrat text-xl">
      <header className="fixed w-full h-12 top-0 left-0 z-50 shadow-md">
        <div className="px-4 h-full max-w-screen-lg mx-auto">
          <nav className="flex items-center gap-4 h-full ">
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
          </nav>
        </div>
      </header>
      <main>
        <div className="px-4 max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myproject" element={<MyProjects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
