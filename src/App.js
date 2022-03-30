import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Steps from "./views/Steps.js";
import './App.scss'
import Home from "./views/Home.js";

const App = () => {
  return (
    <div className="App h-100">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/steps" element={<Steps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;