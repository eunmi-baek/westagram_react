import React, { Component } from 'react';
import "./Gnb.css"

class Gnb extends Component {
    render() {
        return (
    <div className="header">
        <nav>
            <div className="navLeft">
                <img src="/img/main_logo.png" alt="Logo" className="mainLogo" />
                <span className="line" />
                <img src="/img/logo_text.png" alt="Logo" className="logo2" />
            </div>
            <div className="navCenter">
                <div className="search">
                    <input type="text" placeholder="검색" className="searchHere" />
                </div>
            </div>
            <div className="navRight">
                <a href="#" className="explore"></a>
                <a href="#" className="heart"></a>
                <a href="#" className="profile"></a>
            </div>
        </nav>
    </div>
        );
    }
}


export default Gnb;