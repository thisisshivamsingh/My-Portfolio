import "./assets/css/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ProjectInMind from "./components/ProjectInMind";
import Testimonial from "./components/Testimonial";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  // const [homeHightOffSetTop, setHomeHightOffSetTop] = useState({});
  // const [AboutHightOffSetTop, setAboutHightOffSetTop] = useState({});
  // const [skillHightOffSetTop, setSkillHightOffSetTop] = useState({});
  // const [servicesHightOffSetTop, setServicesHightOffSetTop] = useState({});
  // const [portfolioHightOffSetTop, setPortfolioHightOffSetTop] = useState({});
  // const [contactMeHightOffSetTop, setContactMeHightOffSetTop] = useState({});

  // const ref = useRef(null);

  // useEffect(() => {
  //   setHomeHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   setAboutHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   setSkillHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   setServicesHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   setPortfolioHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   setContactMeHightOffSetTop({
  //     height: ref.current.offsetHeight,
  //     offSet: ref.current.offsetTop - 50,
  //   });
  //   // console.log("height: ", ref.current.offsetHeight);

  //   // console.log("width: ", ref.current.offsetTop - 50);
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <ProjectInMind />
        <Testimonial />
        <ContactMe />
        <Footer />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
