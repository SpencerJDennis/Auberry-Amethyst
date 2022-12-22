import React from "react";
import AboutUs from "./AboutUs";
import Header from "./Header";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs";
import Policies from "./Policies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

render() {
<div>
        <Router basename="capstone">
          {navComponent}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  <Header />
                  <About />
                  <FAQ />
                  <Footer />
                </React.Fragment>
              }
            />

            <Route
              path="/Gallery"
              exact
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <Gallery
                    onGalleryClick={this.handleGalleryClick}
                    photos={album}
                  />
                </div>
              }
            />

            <Route
              path="/ContactUs"
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <ContactUs />
                </div>
              }
            />
            <Route
              path="/Policies"
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <Policies />
                </div>
              }
            />
            </Routes>
        </Router>
      </div>
  }
};  

export default SiteControl;