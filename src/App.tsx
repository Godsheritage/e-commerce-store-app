import React from "react";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { ContextProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="container">
          <div className="d-flex flex-column">
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
            </Routes>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
