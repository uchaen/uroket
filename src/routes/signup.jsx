import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../login_signup.css';

class Signup extends Component {
    render() {
        return (
            <main>
                <Link to="/"><img id="logo" src="assets/uroket-logo.jpg" alt="로고" /></Link>

                <section>
                    <p id="font28">회원가입</p>
                    <div>
                        <input class="idpw" type="text" placeholder="이메일" />
                    </div>
                    <div>
                        <input class="idpw" type="password" placeholder="비밀번호" />
                    </div>
                    <div>
                        <input class="idpw" type="password" placeholder="비밀번호 확인" />
                    </div>
                    <div>
                        <input class="idpw" type="text" placeholder="이름" />
                    </div>
                    <div>
                        <input class="idpw" type="text" placeholder="지역번호" />
                    </div>
                    <div>
                        <input class="idpw" type="text" placeholder="휴대폰 번호 (숫자만입력)" />
                    </div>

                    <button id="purplebtn">회원가입</button>
                </section>
            </main>
        );
    }
}

export default Signup;