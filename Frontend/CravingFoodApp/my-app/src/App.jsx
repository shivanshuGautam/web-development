import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contactus from "./pages/Contactus";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <div className="bg-green-200  text-light p-4">App</div>
        <button className="bg-blue-400 border border-blue-200">submit</button>


        <h1>helloWorld</h1>
        <h1>helloWorld</h1>
        <h1>helloWorld</h1> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Slider />
        <Footer />
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
