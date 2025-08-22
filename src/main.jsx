import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/sidebar/Trending";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
);
