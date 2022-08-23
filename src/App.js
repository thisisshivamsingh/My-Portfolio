import "./assets/css/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
