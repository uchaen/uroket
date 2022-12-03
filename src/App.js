import React, { Component } from 'react';  //"react" 라고 하는 라이브러리에서 "Component" 라고하는 클래스를 로딩할 수 있다.
import Header from "./components/Header"; //Header를 components의 Header.js 에서 가져온다
import MainTOC from "./components/MainTOC";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainTOC />
        <div>
          <img id="floatingbanner" src="assets/img1.jpg" alt="플로팅배너" />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;  //파일 안 여러 변수나 함수들 중 어떤 것을 외부에서 사용할 수 있도록 허용할 것 인가