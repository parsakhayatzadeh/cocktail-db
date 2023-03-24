import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navabr from "./Component/Navabr";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <div>
      <Navabr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/cocktail/:id" element={<SinglePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
