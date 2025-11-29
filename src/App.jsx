import "./App.css";
import NavbarCom from "./components/NavbarCom";
import FooterCom from "./components/FooterCom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FavouritesPage from "./pages/FavouritesPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Router>
        <NavbarCom />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/favourites" element={<FavouritesPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <FooterCom />
      </Router>
    </>
  );
};

export default App;
