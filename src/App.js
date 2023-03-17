
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex pt-12 flex-col w-full h-screen font-montserrat text-xl">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
