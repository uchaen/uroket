import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header>
                    <div id="left">
                        <Link to="/"><img style={{height: "25px"}} src="assets/uroket-logo.jpg" alt="로고" /></Link>
                        <div id="searchbar">
                            <input type="text" id="searchinput" placeholder="해외상품을 검색해보세요!" />
                            <img id="searchbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/layout/search+1.png" alt="검색" />
                        </div>
                    </div>

                    <div id="right">
                        <div class="dropdown">전세계상품</div>
                        <div>|</div>
                        <div class="dropdown">셀러이신가요?</div>
                        <div>|</div>
                        <div class="dropdown">이벤트</div>
                        <Link to="/login" class="dropdown" style={{color:"blueviolet"}}>로그인</Link>
                        <Link to="/ready_to_signup" class="dropdown" style={{color:"blueviolet"}}>회원가입</Link>
                    </div>
                </header>
            </div>

        );
    }
}
export default Header;