import React from "react";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { ContextProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
const App: React.FC = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="container">
          <div className="sub-container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <ShopList />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/SingleProduct"
                element={
                  <>
                    <Navbar />
                    <SingleProduct />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
