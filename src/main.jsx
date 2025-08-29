import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/sidebar/Trending";
import Popular from "./components/sidebar/Popular";
import Movies from "./components/sidebar/Movies";
import Tv from "./components/sidebar/TV";
import People from "./components/sidebar/People";
import About from "./components/sidebar/About";
import Contact from "./components/sidebar/Contact";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
);
