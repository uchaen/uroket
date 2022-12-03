import React, { Component } from 'react';
import Header from "../components/Header";

import Footer from "../components/Footer";
import { Link } from 'react-router-dom';



class Seller extends Component {
  render() {
    return (
      <div className="Seller">
        <Header/>
        <div style={{margin:"150px"}}>
          <Link to="/seller/product/form">판매 상품 등록</Link>
        </div>
        <div style={{margin:"150px"}}>
          <Link to="/seller">판매 상품 관리</Link>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Seller;