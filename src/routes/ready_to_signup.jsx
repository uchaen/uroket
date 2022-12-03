import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/login_signup.css';

class ReadyToSignup extends Component {
    render() {
        return (
            <main>
                <Link to="/"><img id="logo" src="assets/uroket-logo.jpg" alt="로고" /></Link>

                <section >
                    <p id="font28">회원가입</p>
                    <Link to="/signup"><button id="purplebtn" style={{margin: "50px 0"}}>유로켓 회원가입</button></Link>

                    <div id="font14" style={{padding: "0 0 10px 0"}}>
                        소셜 계정으로 유로켓 이용하기
                    </div>

                    <div className="flexlist">
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_kakaotalk.png" alt="카카오톡"/>
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_naver.png" alt="네이버"/>
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_facebook.png" alt="페이스북"/>
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_appleid.png" alt="애플" />
                    </div>

                    <div id="font17" style={{ margin: "30px 0 0 0"}}>
                        이미 유로켓에 가입하셨나요? <Link style={{ color: "blueviolet" }} to="/login">로그인</Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default ReadyToSignup;