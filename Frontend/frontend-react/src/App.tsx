import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home/home";
import Register from "./pages/register/register"
import Trivia from "./pages/trivia/trivia"
import Footer from "./components/footer/footer";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Contact from "./pages/contact/contact";
import "./App.css";


function App() {
  return (
      <BrowserRouter>
        <Header />
        {/* <!-- Epic Neural Background --> */}
            <div className="neural-background"></div>

            {/* <!-- Floating Geometric Shapes --> */}
            <div className="geometric-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            {/* <!-- Neural Network Lines --> */}
            {/* <div className="neural-lines">
                <div className="neural-line"></div>
                <div className="neural-line"></div>
                <div className="neural-line"></div>
            </div> */}
        <AnimatedBackground/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
        <Footer />
      </BrowserRouter>  
  );
}

export default App;
