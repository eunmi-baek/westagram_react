import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            id:'',
            pwd:''
        };
    }
        /* 
        e.target.name에만 []로 불러온 이유는 위의 this.state가 객체로 되어 있기 때문에 걔를 불러와야 해서, 그리고 밑의
        name과 이름이 같아야 객체를 불러올 수가 있다. 그래서 e.target.name이 value가 될 수 있게 설정해줌.
        input에 name 값을 설정했다는 기준으로 밑의 함수
        handleKey = e => {
            console.log(e);
            this.setState({
                [e.target.name]: e.target.value         
            })
        }
        */
        handleId = e => {
            console.log(e);
            this.setState({
                id: e.target.value         
            })
        }
        handlePwd = e => {
            console.log(e);
            this.setState({
                pwd: e.target.value         
            })
        }

        // ook = e => {
        //     this.state.id === "eun.m__" && this.state.pwd === "1234" ? 
        // }
    
    render() {
        return (
            <div className="container">
                <img src="./img/logo_text.png" alt="Logo" className="logo" />
                <div className="loginContainer">
                    <input type="text" 
                    value={this.state.id}
                    onChange={this.handleId}
                    placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handlePwd}
                    placeholder="비밀번호" />
                    <Link 
                        to="/Main" 
                        className="login"
                        style={{opacity : this.state.id && this.state.pwd ? "1" : "0.5"}}
                        onClick={this.ook}
                    >
                        로그인
                    </Link> 
                </div>
                <a href="#" className="forgetPw">비밀번호를 잊으셨나요?</a>
            </div>  
        );
    }
}


export default Login;