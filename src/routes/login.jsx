import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../login_signup.css';

class Login extends Component {
    setLoginData = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    inputKeyPress = (e) => {   //엔터키 입력 시 inputKeyPress 함수를 호출 
        if (e.key === 'Enter') this.login(); // keyPress 이벤트로 입력된 key가 엔터 -> 로그인
    };

    login = () => {
        const { id, pw } = this.state;
        if (id && pw) {
            fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: id,
                    password: pw, //email,password는 백엔드랑 약속 한 부분
                }),
            })
                .then((response) => response.json()) //(1)첫번째 then에서 server에서 보내준 response를 object 형태로 변환한다.
                .then((res) => { //(2)두번째 then에서는 object로 변환한 response를 확인한다.   
                    if (res.accessToken) { //(3)로그인이 성공하면 백엔드에서 토큰을 준다.
                        window.localStorage.setItem('accessToken', res.accessToken); //accessToken과 user_name을 로컬 스토리지에 저장
                        window.localStorage.setItem('user_name', res.user.user_name);
                        document.location.href = '/'  // useNavigate("/");
                    } else {
                        alert('아이디 혹은 비밀번호가 틀렸습니다.');
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert('아이디 혹은 비밀번호를 입력해 주세요.');
        }
    };

    render() {
        return (
            <main>
                <Link to="/"><img id="logo" src="assets/uroket-logo.jpg" alt="로고" /></Link>

                <section>
                    <p id="font28">로그인</p>
                    <div>
                        <input className="idpw" name="id" type="text" onChange={this.setLoginData} onKeyPress={this.inputKeyPress} placeholder="이메일" />
                    </div>
                    <div>
                        <input className="idpw" name="pw" type="password" onChange={this.setLoginData} onKeyPress={this.inputKeyPress} placeholder="비밀번호" />
                    </div>

                    <button id="purplebtn" onClick={this.login}>로그인</button>

                    <div id="font14" style={{ margin: "20px 0 10px 0" }}>
                        소셜 계정으로 유로켓 이용하기
                    </div>

                    <div className="flexlist">
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_kakaotalk.png" alt="카카오톡" />
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_naver.png" alt="네이버" />
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_facebook.png" alt="페이스북" />
                        <img className="snsbtn" src="https://croket.s3.ap-northeast-2.amazonaws.com/icon/auth_appleid.png" alt="애플" />
                    </div>

                    <div className="flexlist" id="font17" style={{ margin: "30px 0 50px 0" }}>
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