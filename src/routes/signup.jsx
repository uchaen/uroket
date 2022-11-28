import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/login_signup.css';

class Signup extends Component {
    setSignupData = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    signup = () => {
        const { id, pw, name } = this.state;
        if (id && pw && name) {
            fetch('http://localhost:3001/register', {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                },
                body: JSON.stringify({
                    email: id,
                    password: pw, //email,password는 백엔드랑 약속 한 부분
                    user_name: name
                }),
            })
                .then((response) => response.json()) //(1)첫번째 then에서 server에서 보내준 response를 object 형태로 변환한다.
                .then((res) => { //(2)두번째 then에서는 object로 변환한 response를 확인한다.   
                    if (res.accessToken) { //(3)회원가입이 성공하면 백엔드에서 토큰을 준다.
                        window.localStorage.setItem('accessToken', res.accessToken); //accessToken과 user_name을 로컬 스토리지에 저장
                        window.localStorage.setItem('user_name', res.user.user_name);
                        document.location.href='/' // useNavigate("/");
                    } else {
                        alert(res); // Email already exists & Password is too short
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert('아이디, 비밀번호, 이름을 모두 입력해 주세요.');
        }
    };

    render() {
        return (
            <main>
                <Link to="/"><img id="logo" src="assets/uroket-logo.jpg" alt="로고" /></Link>

                <section>
                    <p id="font28">회원가입</p>
                    <div>
                        <input className="idpw" name="id" type="text" onChange={this.setSignupData} placeholder="이메일" />
                    </div>
                    <div>
                        <input className="idpw" name="pw" type="password" onChange={this.setSignupData} placeholder="비밀번호" />
                    </div>
                    <div>
                        <input className="idpw" name="name" type="text" onChange={this.setSignupData} placeholder="이름" />
                    </div>

                    <button id="purplebtn" onClick={this.signup}>회원가입</button>
                </section>
            </main>
        );
    }
}

export default Signup;