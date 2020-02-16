import React, { Component } from 'react';
import Gnb from "../component/Gnb"
import Feeditem from "../component/Feeditem"


class Main extends React.Component {
    render() {
        return (
            <div>
                <Gnb />
                <Feeditem />
            </div>
        );
    }
}


export default Main;