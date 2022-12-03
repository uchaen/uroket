import React, { Component } from 'react';
import Header from "../components/Header";
import MarketTOC from '../components/MarketTOC';
import Footer from "../components/Footer";



class Market extends Component {
  render() {
    return (
      <div className="Market">
        <Header/>
        <MarketTOC/>
        <div>
          <img id="floatingbanner" src="assets/img1.jpg" alt="플로팅배너" />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Market;