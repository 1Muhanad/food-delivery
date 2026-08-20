import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
const App = () => {

  const [showLogin,setShowLogin] = useState(false)


 
  useEffect(() => {
   if(showLogin) {
    document.body.style.overflow = 'hidden'
   }
   else {
    document.body.style.overflow = 'auto'
  }
  return () => {
     document.body.style.overflow = 'auto'
   }
  } , [showLogin])

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null , "" , window.location.pathname)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } , [])

  return (
     <>
     {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></> }
      <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
