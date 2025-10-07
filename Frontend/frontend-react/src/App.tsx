import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home/home";
// import Register from "./pages/register/register"
// import Trivia from "./pages/trivia/trivia"
import Footer from "./components/footer/footer";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

import "./App.css";


function App() {
  return (
      <BrowserRouter>
        <Header />
        <AnimatedBackground/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/trivia" element={<Trivia />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>  
  );
}

export default App;
