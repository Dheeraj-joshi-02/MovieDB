import "./index.css";
import App from "./App";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Tv from "./components/sidebar/TV";
import { createRoot } from "react-dom/client";
import About from "./components/sidebar/About";
import People from "./components/sidebar/People";
import Movies from "./components/sidebar/Movies";
import Contact from "./components/sidebar/Contact";
import Popular from "./components/sidebar/Popular";
import Trending from "./components/sidebar/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/details/movieDetails";
import TvDetails from "./components/details/tvDetails";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="/movies/detail/:id" element={<MovieDetails />} />
          </Route>
          <Route path="/tv" element={<Tv />}>
            <Route path="/tv/detail/:id" element={<TvDetails />} />
          </Route>
          <Route path="/people" element={<People />}>
            <Route path="people/detail/:id" />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
);
