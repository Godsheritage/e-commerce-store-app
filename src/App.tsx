import React from "react";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { ContextProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Main from "./components/Main";
const App: React.FC = () => {
  return (
    <Router>
      <ContextProvider>
        <div className="container">
          <div className="sub-container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Main />
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
                path="/Products/*"
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
      </ContextProvider>
    </Router>
  );
};

export default App;
