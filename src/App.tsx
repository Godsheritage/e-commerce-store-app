import React from "react";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
        <div className="container">
          <div className="d-flex flex-column justify-content-between">
          <Navbar />
          <ShopList />
          <Footer />
          </div> 
        </div>
    </Router>
  );
}

export default App;
