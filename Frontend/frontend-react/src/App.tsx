import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home/home";
import ContactLaravel from "./pages/Laravel/contactLaravel/contactLaravel";
import ContactStrapi from "./pages/Strapi/contactStrapi/contactStrapi";
import RegisterLaravel from "./pages/Laravel/registerLaravel/registerLaravel"
import RegisterStrapi from "./pages/Strapi/registerStrapi/registerStrapi"
import TriviaLaravel from "./pages/Laravel/triviaLaravel/triviaLaravel"
import TriviaStrapi from "./pages/Strapi/triviaStrapi/triviaStrapi"
import Footer from "./components/footer/footer";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

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
          <Route path="/contactLaravel" element={<ContactLaravel />} />
          <Route path="/contactStrapi" element={<ContactStrapi />} />
          <Route path="/registerLaravel" element={<RegisterLaravel />} />
          <Route path="/registerStrapi" element={<RegisterStrapi />} />
          <Route path="/triviaLaravel" element={<TriviaLaravel />} />
          <Route path="/triviaStrapi" element={<TriviaStrapi />} />
        </Routes>
        <Footer />
      </BrowserRouter>  
  );
}

export default App;
