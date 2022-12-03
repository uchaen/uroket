import React, { Component } from 'react';
import Header from "../components/Header";

import Footer from "../components/Footer";
import '../css/product_form.css';


class ProductForm extends Component {
  render() {
    return (
      <div className="ProductForm">
        <Header/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className='title'>판매 상품 등록</div>

        <div className='mini-title'>상품 썸네일</div>
        
        <div className='mini-title'>상품명</div>
        <input name="product_name" type="text" placeholder="상품명" />
        {/* <div>카테고리 선택</div>
        <div>옵션 설정</div> */}
        
        <div className='mini-title'>가격</div>
        <input name="product_price" type="text" placeholder="가격" />
        
        <div>
          <button id="register-btn">상품등록하기</button>
        </div>
        
      </div>
    );
  }
}

export default ProductForm;

