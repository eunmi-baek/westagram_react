import React, { Component } from 'react';

class Comment extends Component {
    
    render() {
        this.state.comments.map()
        return (
            <div className="cmtAll">
                <span>{this.props.name}</span>
                <span>{this.props.text}</span>
            </div>
        )
    }
}

export default Comment;