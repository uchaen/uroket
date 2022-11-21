import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
            <div className="Header">
                <header>
                    <div id="left">
                        <Link to="/"><img style={{ height: "22px" }} src="assets/uroket-logo.jpg" alt="로고" /></Link>
                        <div id="searchbar">
                            <input type="text" id="searchinput" placeholder="해외상품을 검색해보세요!" />
                            <img id="searchbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/layout/search+1.png" alt="검색" />
                        </div>
                    </div>

                    <div id="right">
                        <div className="bigUnderbar">전세계상품</div>
                        <div>ㅣ</div>
                        <div className="bigUnderbar">셀러이신가요?</div>
                        <div>ㅣ</div>
                        <div className="bigUnderbar">이벤트</div>
                        {this.state.access_Token ?
                            <div>
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
                    </div>
                </header>
            </div>

        );
    }
}
export default Header;