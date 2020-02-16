import React, { Component } from 'react';
import Comment from "./Comment"
import "./Feeditem.css"

class Feeditem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            text:[],
            txt: ""
        };
    }
    
    handleKey = e => {
        console.log("ㅎㅎ" + e.target);
        this.setState({
            [e.target.name]:e.target.value      
        })
    }
//e.target.name 이 txt죠, 그 값을 바꾸는 이유가 새로 계속 추가된 값을 맵으로 돌린다. 추가 시키는 주체가 text입니다. text값에 txt을 넣어야한다. 
    handleCmt = e => {
        this.setState({
            text: this.state.text.concat(this.state.txt),
            txt:''
        })
        
    }
    mapOffeed = (texts) => {
        return texts.map((txt,i)=>(
            <div className="cmtAll" key={i}>
                <span style={{fontWeight:600, marginRight:"3px"}}>eun.m__</span>
                <span>{txt}</span>  
            </div>
        ))
    }


    render() {
        return (
    <div className="main">
        <div className="feeds">
            <div className="boxHeader">
                <div className="profileSomeImg">
                </div>
                <div className="profileSome">
                    <div className="profileTxt">
                        <a href="#" className="profileName">4.13h</a>
                        <a href="#" className="profilePlace">Deoksugung</a>
                    </div>
                    <p className="profileMore">
                    </p>
                </div>
            </div>
            <div className="mainImg"></div>
            <div className="articleSide">
                <div className="atcOption">
                    <div className="atcLike"></div>
                    <div className="atcCmt"></div>
                    <div className="atcShare"></div>
                </div>
                <p className="save"></p>
            </div>
            <div className="commentCnt">
                <div className="likeSomeone">좋아요 330개</div>
                <div className="someCmt">
                    <span className="someId">4.13h</span>
                    <span>3도....</span>
                </div>
                <div className="moreCmt">
                    댓글 13개 모두 보기
                </div>
                <div className="cmtAll">
                    <span className="frenId">lovem</span>
                    <span className="frenCmt">근처 맛집이 어디인가요</span>
                    <span className="frenLike"></span>
                </div>
                <div>
                    <span className="frenId">yororing</span>
                    <span className="frenCmt">가을 조아</span>
                    <span className="frenLike"></span>
                </div>
                {this.mapOffeed(this.state.text)}
            </div>

            {/* 여기로~ */}
            {/* 여기로~ */}
            {/* 여기로~ */}

            <div className="commentZone">
                <input type="text"
                 name="txt"
                 placeholder="댓글 달기..." 
                 onChange={this.handleKey}
                 value={this.state.txt}
                 className="newCmt" />
                <button
                    className="cmtBtn"
                    style={{opacity : this.state.txt ? "1" : "0.5"}}
                    onClick={this.handleCmt}
                >
                     게시
                </button>
            </div>
        </div>

        <div className="mainRight">
            <div className="myProfile">
                <p className="myImg"></p>
                <a href="#" className="myId">eun.m__</a>
            </div>
            <div className="story">
                <div className="storyHd">
                    <span>스토리</span>
                    <a href="#" className="storyAll">모두 보기</a>
                </div>
                <div className="storyCnt">
                    <div className="storySome">
                        <div className="storySomeImg img1">
                        </div>
                        <div className="storyTxt">
                            <a href="#" className="storyName">ppnf2_</a>
                            <a href="#" className="storyTime">5시간 전</a>
                        </div>
                    </div>
                    <div className="storySome">
                        <div className="storySomeImg img2">
                        </div>
                        <div className="storyTxt">
                            <a href="#" className="storyName">yororing</a>
                            <a href="#" className="storyTime">8시간 전</a>
                        </div>
                    </div>
                    <div className="storySome">
                        <div className="storySomeImg img3">
                        </div>
                        <div className="storyTxt">
                            <a href="#" className="storyName">around_h</a>
                            <a href="#" className="storyTime">11시간 전</a>
                        </div>
                    </div>
                    <div className="storySome">
                        <div className="storySomeImg img4">
                        </div>
                        <div className="storyTxt">
                            <a href="#" className="storyName">yeddi</a>
                            <a href="#" className="storyTime">17시간 전</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="myRecommend">
                <div className="recoHd">
                    <span>회원님을 위한 추천</span>
                    <a href="#" className="recoAll">모두 보기</a>
                </div>
                <div className="reCnt">
                    <div className="reSomeImg reImg1">
                    </div>
                    <div className="reSome">
                        <div className="reTxt">
                            <a href="#" className="reName">onnk</a>
                            <p className="someFollow">yon님이 팔로우합니다</p>
                        </div>
                        <p className="reFollow">
                            팔로우
                        </p>
                    </div>
                </div>
                <div className="reCnt">
                    <div className="reSomeImg reImg2">
                    </div>
                    <div className="reSome">
                        <div className="reTxt">
                            <a href="#" className="reName">leleye</a>
                            <p className="someFollow">jenny님 외 4명이 팔로우합니다</p>
                        </div>
                        <p className="reFollow">
                            팔로우
                        </p>
                    </div>
                </div>
                <div className="reCnt">
                    <div className="reSomeImg reImg3">
                    </div>
                    <div className="reSome">
                        <div className="reTxt">
                            <a href="#" className="reName">hyee_</a>
                            <p className="someFollow">yororing님 외 1명이  팔로우합니다</p>
                        </div>
                        <p className="reFollow">
                            팔로우
                        </p>
                    </div>
                </div>
            </div>
            <div className="mainInfo"></div>
        </div>
    </div> 
        );
    }
}


export default Feeditem;