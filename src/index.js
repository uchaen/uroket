import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./routes/login";
import ReadyToSignup from "./routes/ready_to_signup";
import Signup from "./routes/signup";
import Market from './routes/market';
import Seller from './routes/seller';
import ProductForm from './routes/product_form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="ready_to_signup" element={<ReadyToSignup />} />
      <Route path="signup" element={<Signup />} />
      <Route path="market" element={<Market />} />
      <Route path="seller" element={<Seller />} />
      <Route path="seller/product/form" element={<ProductForm/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
