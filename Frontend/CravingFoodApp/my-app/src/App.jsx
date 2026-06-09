import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
