import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Suspense } from "react";

function App() {
  return (
    <div className="flex pt-12 flex-col w-full min-h-screen font-montserrat text-xl">
      <Header />
      <Suspense
        fallback={
          <p className="text-3xl flex justify-center dark:bg-slate-500 flex-1 transition-all dark:text-white">
            Loading...
          </p>
        }
      >
        <Main />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
