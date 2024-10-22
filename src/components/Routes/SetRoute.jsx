
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
  import '../css/style.scss'   
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js' ;
 
import React, { useState, useEffect } from 'react';   
import Login from "../jsx/login/login.jsx";
import Sign_up from "../jsx/sign-up/sign_up.jsx";
import Home from "../jsx/home/home.jsx";
import Product from "../jsx/product/product.jsx";
 
 
 


function SetRoute() {
 
 
  return (
    <>
        <Router>  
        <Routes>  
        <Route path="/" element={  <Home />}></Route>  
        <Route path="/product" element={  <Product />}></Route>  
        
        </Routes>
      </Router>
    </>

  );
};

export default SetRoute;




