import Navbar from "./components/NavBar";
import MainPage from "./components/MainPage";
import MangaPage from "./components/MangaPage";
import Contact from "./components/Contact";
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
            </>
          }
        />
        <Route
          path="/manga"
          element={
            <>
              <Navbar />
              <MangaPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
