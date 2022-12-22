import React from "react";
import Home from "./Home";
import Header from "./Header";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs";
import Policies from "./Policies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Gallery' element={<Gallery/>} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;