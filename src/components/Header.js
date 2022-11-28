import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access_Token: localStorage.getItem("accessToken"),
            user_name: localStorage.getItem("user_name")
        }
    }
    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        this.setState({
            access_Token: null,
            user_name: null
        });
    }
    render() {
        return (
            <header>
                <div id="left">
                    <Link to="/"><img style={{ height: "22px" }} src="assets/uroket-logo.jpg" alt="로고" /></Link>
                    <div id="searchbar">
                        <input type="text" id="searchinput" placeholder="해외상품을 검색해보세요!" />
                        <img id="searchbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/layout/search+1.png" alt="검색" />
                    </div>
                </div>

                <div id="middle">
                    <div className="bigUnderbar">전세계상품 <Dropdown /> </div>
                    <div> ㅣ </div>
                    <div className="bigUnderbar">셀러이신가요? <Dropdown /> </div>
                    <div> ㅣ </div>
                    <div className="bigUnderbar">이벤트 <Dropdown /> </div>
                </div>

                {this.state.access_Token ? //로그인 상태에 따라 변경
                    <div id="right">
                        <img className="miniUnderbar" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/ChatCenteredText.png" alt="메세지" />
                        <img className="miniUnderbar" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/basket.png" alt="장바구니" />
                        <img className="miniUnderbar" onClick={this.logout} src="assets/uroket-favicon.png" alt="프사" />
                    </div>
                    :
                    <div>
                        <Link to="/login" className="bigUnderbar" style={{ color: "blueviolet" }}>로그인</Link>
                        <Link to="/ready_to_signup" className="bigUnderbar" style={{ color: "blueviolet" }}>회원가입</Link>
                    </div>
                }
            </header>
        );
    }
}

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown-menu slide_down">
                
                <div className="dropdown-content">
                    <div className='dropdown-title'>전세계상품</div>
                    <li>판매 상품 전체보기</li>
                    <li>HOT테마전</li>
                </div>

                <div className="dropdown-content">
                    <div className='dropdown-title'>전세계 셀러에게 요청하기</div>
                    <li>구매 요청 문의 리스트</li>
                    <li>1:1 구매 요청 등록</li>
                </div>

                <div className="dropdown-content">
                    <div className='dropdown-title'>셀러 정보 관리</div>
                    <li>판매 상품 등록</li>
                    <li>판매 상품 관리</li>
                    <li>구매자 관리</li>
                    <li>1:1 요청자 관리</li>
                    <li>1:1 요청 상품 제안하기</li>
                </div>

                <div className="dropdown-content">
                    <div className='dropdown-title'>이벤트</div>
                    <img id="eventimg" src="assets/img1.jpg" alt="eventimg" />
                </div>

            </div>
        );
    }
}


export default Header;