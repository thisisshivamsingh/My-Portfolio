import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
