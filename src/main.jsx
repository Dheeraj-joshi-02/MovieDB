import "./index.css";
import App from "./App";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Tv from "./components/sidebar/TV";
import Home from "./components/home/Home";
import TvDetails from "./details/TvDetails";
import { createRoot } from "react-dom/client";
import About from "./components/sidebar/About";
import People from "./components/sidebar/People";
import Movies from "./components/sidebar/Movies";
import MovieDetails from "./details/MovieDetails";
import Popular from "./components/sidebar/Popular";
import PeopleDetails from "./details/PeopleDetails";
import Contact from "./components/sidebar/Contact";
import Trending from "./components/sidebar/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/details/:id" element={<MovieDetails />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/tv/:id" element={<TvDetails />} />
            <Route path="/people" element={<People />} />
            <Route path="people/details/:id" element={<PeopleDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
);
