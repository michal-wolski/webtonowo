import Navbar from "./components/NavBar";
import MainPage from "./components/MainPage";
import MangaPage from "./components/MangaPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/manga"
          element={
            <>
              <Navbar />
              <MangaPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
