import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Technology from "./Components/Technology";
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import Hollywood from "./Components/Hollywood";
import Bollywood from "./Components/Bollywood";
import CategoryDetail from "./Components/CategoryDetail";

const RoutePath = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bollywood" element={<Bollywood />}></Route>
          <Route path="/hollywood" element={<Hollywood />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/fitness" element={<Fitness />}></Route>
          <Route path="/tech" element={<Technology />}></Route>
          <Route path="/detail/:id" element={<CategoryDetail/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutePath;
