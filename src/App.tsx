import React from "react";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
        <div className="container">
          <Navbar />
          <ShopList />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
