import React from "react";
import { Routes, Route } from "react-router-dom";
import PopularPage from "../pages/PopularPage";
import Navbar from "../components/Navbar";
import Upcoming from "../pages/Upcoming";
import Detail from "../pages/Detail";
import SearchedLists from "../pages/SearchedLists";
const Main = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularPage />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:name" element={<SearchedLists/>}/>
      </Routes>
    </section>
  );
};

export default Main;
