import React, { Component } from 'react';

class Comment extends Component {
    
    render() {
        return (
            <div className="cmtAll" key={this.props.data}>
                <span style={{fontWeight:600, marginRight:"3px"}}>eun.m__</span>
                <span>{this.props.data}</span>
            </div>
        )
    }
}

export default Comment;