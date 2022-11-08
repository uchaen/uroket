import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../login_signup.css';

class Login extends Component {
    render() {
        return (
            <main>
                <Link to="/"><img id="logo" src="assets/uroket-logo.jpg" alt="로고" /></Link>

                <section>
                    <p id="font28">로그인</p>
                    <div>
                        <input class="idpw" type="text" placeholder="이메일" />
                    </div>
                    <div>
                        <input class="idpw" type="password" placeholder="비밀번호" />
                    </div>

                    <button id="purplebtn">로그인</button>

                    <div id="font14" style={{ margin: "20px 0 10px 0" }}>
                        소셜 계정으로 유로켓 이용하기
                    </div>

                    <div class="flexlist">
                        <img class="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_kakaotalk.png" alt="카카오톡"/>
                        <img class="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_naver.png" alt="네이버"/>
                        <img class="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_facebook.png" alt="페이스북"/>
                        <img class="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_appleid.png" alt="애플" />
                    </div>

                    <div class="flexlist" id="font17" style={{ margin: "30px 0 50px 0" }}>
                        <div>잊어버리셨나요?</div>
                        <p>|</p>
                        <Link to="/ready_to_signup">회원가입</Link>
                    </div>

                    <p style={{ color: "gray" }}>크로켓은 관세청으로부터 협의 하에 합법적인 방향으로</p>
                    <p style={{ color: "gray" }}>운영하고 있는 해외 구매대행 중개 플랫폼입니다.</p>
                </section>
            </main>
        );
    }
}

export default Login;