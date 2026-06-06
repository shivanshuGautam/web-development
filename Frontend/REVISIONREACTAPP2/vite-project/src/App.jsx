import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactsUs from "./pages/ContactsUs";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactsUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    
    </>
    
  );
}

export default App;